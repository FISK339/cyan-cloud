import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import OpenAI from 'openai';
import { siteContext } from './siteContext.js';

const SYSTEM_PROMPT = `
Ты — AI-помощник сайта компании «СитиЛифтСервис».

Твоя задача — помогать посетителю сайта
ориентироваться по сайту и получать информацию
о компании и её услугах.

Правила:

1. Отвечай на русском языке.
2. Отвечай кратко, понятно и естественно.
3. Не используй сложные технические термины без необходимости.
4. Если пользователь задаёт простой вопрос, отвечай прямо, без длинного вступления.
5. Если вопрос связан с сайтом, помогай пользователю найти нужный раздел.
6. Если пользователь хочет связаться с компанией, направляй его в раздел «Контакты».
7. Если пользователь хочет посмотреть продукцию, направляй его в раздел «Каталог».
8. Если пользователь спрашивает об услугах, направляй его в раздел «Услуги».
9. Не придумывай цены, характеристики, сроки, адреса или другие сведения, которых нет в предоставленном тебе контексте.
10. Если информации недостаточно, честно скажи об этом.
11. Не выдавай предположения за факты.
12. Не говори пользователю, что ты языковая модель, если он прямо не спрашивает об этом.

ИНФОРМАЦИЯ О САЙТЕ:

${JSON.stringify(siteContext, null, 2)}
`;


const app = express();

const PORT = process.env.PORT || 3000;

const YANDEX_CLOUD_FOLDER = process.env.YANDEX_CLOUD_FOLDER;
const YANDEX_CLOUD_API_KEY = process.env.YANDEX_CLOUD_API_KEY;
const YANDEX_CLOUD_MODEL =
    process.env.YANDEX_CLOUD_MODEL || 'yandexgpt-4-lite/latest';

const client = new OpenAI({
    apiKey: YANDEX_CLOUD_API_KEY,
    baseURL: 'https://ai.api.cloud.yandex.net/v1',
    defaultHeaders: {
        'OpenAI-Project': YANDEX_CLOUD_FOLDER
    }
});

console.log({
    folder: YANDEX_CLOUD_FOLDER,
    model: YANDEX_CLOUD_MODEL,
    hasApiKey: Boolean(YANDEX_CLOUD_API_KEY)
});

// Middleware
app.use(cors());
app.use(express.json());


// Проверка сервера
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'AI Assistant backend is running'
    });
});


// Чат
app.post('/chat', async (req, res) => {
    try {
        const { message, history = [] } = req.body ?? {};

        if (typeof message !== 'string' || !message.trim()) {
            return res.status(400).json({
                error: 'A non-empty message is required'
            });
        }

        const previousMessages = Array.isArray(history)
            ? history
                .filter(
                    item =>
                        item &&
                        ['user', 'assistant'].includes(item.role)
                )
                .filter(
                    item =>
                        typeof item.content === 'string' &&
                        item.content.trim()
                )
                .slice(-20)
                .map(({ role, content }) => ({
                    role,
                    content: content.trim()
                }))
            : [];

        const input = [
            ...previousMessages,
            {
                role: 'user',
                content: message.trim()
            }
        ];

        console.log('User:', message.trim());

        console.log('INPUT TO YANDEX:');
        console.dir(input, { depth: null });

        const response = await client.responses.create({
            model: `gpt://${YANDEX_CLOUD_FOLDER}/${YANDEX_CLOUD_MODEL}`,
            instructions: SYSTEM_PROMPT,
            input,
            temperature: 0.3,
            max_output_tokens: 1500
        });

        const reply = response.output_text;

        if (typeof reply !== 'string' || !reply.trim()) {
            throw new Error('YandexGPT returned an empty response');
        }

        console.log('AI:', reply);

        // ОТПРАВЛЯЕМ ОТВЕТ ТОЛЬКО ОДИН РАЗ
        return res.json({
            reply: reply.trim()
        });

    } catch (error) {
        console.error('AI ERROR:', error);

        return res.status(500).json({
            error: 'Internal server error'
        });
    }
});


// Запуск
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});