# СитиЛифтСервис — Corporate Website

Современный адаптивный сайт для компании «СитиЛифтСервис», специализирующейся на монтаже, обслуживании и эксплуатации лифтового и эскалаторного оборудования.

Проект создан с использованием Astro с упором на производительность, минимальное количество JavaScript на клиенте и корректное отображение на мобильных устройствах.

## ✨ Features

- **Responsive design** — адаптация интерфейса под мобильные устройства, планшеты и настольные компьютеры.
- **Multi-page architecture** — отдельные страницы для основных направлений деятельности компании.
- **AI Assistant** — интеллектуальный помощник для навигации по сайту на базе YandexGPT.
- **Interactive UI** — анимации, эффекты наведения и интерактивные элементы.
- **Contact forms** — интерфейс для связи с компанией.
- **Performance-focused frontend** — использование Astro и минимизация клиентского JavaScript.
- **GitHub Pages deployment** — публикация статической части сайта.

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [Astro](https://astro.build/) | Frontend framework |
| HTML5 / CSS3 | Structure and styling |
| JavaScript | Client-side interactions |
| TypeScript | Typed project data and interfaces |
| Node.js | Backend runtime |
| Express.js | Backend API |
| YandexGPT | AI assistant |
| GitHub Pages | Frontend hosting |

## 📁 Project Structure

```text
cyan-cloud/
├── public/
│   ├── fonts/
│   └── images/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── catalog.astro
│   │   ├── about.astro
│   │   └── contacts.astro
│   ├── styles/
│   └── data/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── astro.config.mjs
├── package.json
└── README.md
```

*Примечание: структура приведена как ориентир; фактическое расположение некоторых файлов может отличаться.*

## 📄 Pages

- **Home** (`/`) — главная страница компании.
- **Services** (`/services`) — услуги компании.
- **Catalog** (`/catalog`) — каталог оборудования.
- **About** (`/about`) — информация о компании.
- **Contacts** (`/contacts`) — контактная информация и форма обратной связи.

## 🚀 Getting Started

### Prerequisites

Перед началом работы установи:

- [Node.js](https://nodejs.org/) версии `22.12.0` или новее.
- npm.
- Git.

### 1. Clone the repository

```bash
git clone https://github.com/FISK339/cyan-cloud.git
cd cyan-cloud
```

### 2. Install dependencies

Установи зависимости фронтенда:

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

После запуска Astro выведет локальный адрес сайта в терминале. Обычно это `http://localhost:4321/`.

### 4. Build for production

```bash
npm run build
```

Собранная статическая версия сайта появится в директории `dist/`.

Для локального просмотра production-сборки:

```bash
npm run preview
```

## 🤖 AI Assistant Backend

AI-ассистент использует Node.js, Express и YandexGPT через Yandex Cloud.

### Setup

Перейди в директорию бэкенда:

```bash
cd backend
npm install
```

Создай файл `.env`:

```env
PORT=3000
YANDEX_CLOUD_FOLDER=your_folder_id
YANDEX_CLOUD_API_KEY=your_api_key
YANDEX_CLOUD_MODEL=your_model_identifier
```

Запусти сервер:

```bash
npm start
```

API принимает сообщения через `POST /chat`. Запрос содержит сообщение пользователя и историю диалога.

Пример тела запроса:

```json
{
  "message": "Какие услуги предоставляет компания?",
  "history": []
}
```

**Security:** не публикуй API-ключи, токены и другие секреты в GitHub. Храни их в переменных окружения и добавь `.env` в `.gitignore`.

### Production deployment

Фронтенд и бэкенд развёртываются независимо:

- **Frontend:** GitHub Pages.
- **Backend:** Node.js-хостинг с поддержкой Express, например Render.

При публикации бэкенда необходимо настроить переменные окружения и заменить локальный адрес API (`localhost:3000`) на публичный HTTPS-адрес сервера. Также настрой CORS для разрешённого домена сайта.

## ⚙️ Development

При разработке придерживайся следующих принципов:

- Используй компоненты Astro для повторно используемых частей интерфейса.
- Не добавляй клиентский JavaScript там, где достаточно HTML и CSS.
- Поддерживай адаптивность и доступность элементов интерфейса.
- Храни повторно используемые данные отдельно от разметки.
- Не передавай секретные ключи на клиентскую сторону.

## 📌 Roadmap

- [ ] Завершить адаптацию всех страниц под мобильные устройства.
- [ ] Подключить production API для AI-ассистента.
- [ ] Завершить интеграцию и тестирование форм обратной связи.
- [ ] Улучшить обработку ошибок и состояний загрузки.
- [ ] Проверить производительность и доступность сайта.
- [ ] Добавить автоматические проверки при сборке проекта.

## 📜 License

Лицензия проекта пока не указана. До её добавления все права на исходный код сохраняются за правообладателем в соответствии с применимым законодательством.

---

**СитиЛифтСервис** — лифтовое и эскалаторное оборудование: монтаж, обслуживание, эксплуатация.
