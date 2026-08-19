export function initContactUs() {
  const checkbox = document.querySelector(
    ".contact-us-politics-checkbox"
  );

  const button = document.querySelector(
    ".contact-us-submit"
  );

  if (!checkbox || !button) return;

  const updateButton = () => {
    button.disabled = !checkbox.checked;
  };

  checkbox.addEventListener("change", updateButton);

  updateButton();
}