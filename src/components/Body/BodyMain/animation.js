const hero = document.querySelector("#hero");

const title = hero.querySelector(".BodyMain__title");
const description = hero.querySelector(".BodyMain__description");

hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    title.style.transform =
        `translate(${x * 20}px, ${y * 20}px)`;

    description.style.transform =
        `translate(${x * 12}px, ${y * 12}px)`;
});

hero.addEventListener("mouseleave", () => {
    title.style.transform = "";
    description.style.transform = "";
});