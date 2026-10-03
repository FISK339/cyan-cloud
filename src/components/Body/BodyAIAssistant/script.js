export async function initAIAssistantMainButton() {
  const button = document.querySelector("[data-ai-assistant-open]");
  const chat = document.querySelector("[data-ai-assistant-chat]");
  const closeButton = chat?.querySelector("[data-ai-assistant-close]");
  const form = chat?.querySelector("[data-ai-assistant-form]");
  const input = form?.querySelector("input");
  const messages = chat?.querySelector("[data-ai-assistant-messages]");

  // История текущего диалога
  const history = [];

  if (!chat || !closeButton || !form || !input || !messages) return;

  const setOpen = (open) => {
    if (open) {
      chat.hidden = false;
      chat.classList.remove("is-closing");
      chat.setAttribute("aria-hidden", "false");
      input.focus();
      return;
    }

    chat.classList.add("is-closing");
    chat.setAttribute("aria-hidden", "true");

    chat.addEventListener(
      "animationend",
      () => {
        chat.hidden = true;
        chat.classList.remove("is-closing");
      },
      { once: true }
    );
  };

  setOpen(false);

  // Открытие / закрытие чата
  button?.addEventListener("click", () => {
    if (chat.hidden) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  });

  window.addEventListener("ai-assistant:open", () => setOpen(true));

  closeButton.addEventListener("click", () => setOpen(false));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !chat.hidden) {
      setOpen(false);
    }
  });

  // Отправка сообщения
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const text = input.value.trim();

    if (!text) return;

    // Показываем сообщение пользователя
    const message = document.createElement("p");

    message.className = "ai-assistant-chat-message";
    message.textContent = text;

    messages.append(message);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;

    // Сохраняем сообщение пользователя в историю
    history.push({
      role: "user",
      content: text
    });

    try {
      // Отправляем сообщение на наш backend
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          message: text,

          // Передаём предыдущую историю,
          // но не текущее сообщение второй раз
          history: history.slice(0, -1)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Chat request failed");
      }

      // Показываем ответ AI
      const reply = document.createElement("p");

      reply.className =
        "ai-assistant-chat-message ai-assistant-chat-message--reply";

      reply.textContent = data.reply;

      messages.append(reply);

      // Сохраняем ответ AI в историю
      history.push({
        role: "assistant",
        content: data.reply
      });

      messages.scrollTop = messages.scrollHeight;

    } catch (error) {
      console.error("AI assistant request failed:", error);

      // Показываем ошибку пользователю
      const errorMessage = document.createElement("p");

      errorMessage.className =
        "ai-assistant-chat-message ai-assistant-chat-message--reply";

      errorMessage.textContent =
        "Не удалось получить ответ. Попробуйте ещё раз.";

      messages.append(errorMessage);

      messages.scrollTop = messages.scrollHeight;
    }
  });
}


