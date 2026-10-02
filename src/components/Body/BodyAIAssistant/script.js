export function initAIAssistantMainButton() {
  const button = document.querySelector("[data-ai-assistant-open]");{
  const chat = document.querySelector("[data-ai-assistant-chat]");
  const closeButton = chat?.querySelector("[data-ai-assistant-close]");
  const form = chat?.querySelector("[data-ai-assistant-form]");
  const input = form?.querySelector("input");
  const messages = chat?.querySelector("[data-ai-assistant-messages]");

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
  
  button?.addEventListener("click", () => {
    if (chat.hidden) setOpen(true);
    else setOpen(false);
  })

  window.addEventListener("ai-assistant:open", () => setOpen(true));
  closeButton.addEventListener("click", () => setOpen(false));
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !chat.hidden) setOpen(false);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    const message = document.createElement("p");
    message.className = "ai-assistant-chat-message";
    message.textContent = text;
    messages.append(message);
    input.value = "";
    messages.scrollTop = messages.scrollHeight;
  });
}
}
