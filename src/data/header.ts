const baseUrl = import.meta.env.BASE_URL;

export const navItems = [
  { title: "Главная", href: baseUrl },
  { title: "Наши услуги", href: `${baseUrl}services/` },
  { title: "Каталог", href: `${baseUrl}catalog/` },
  { title: "О компании", href: `${baseUrl}about/` },
  { title: "Контакты", href: `${baseUrl}contacts/` },
];