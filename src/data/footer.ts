import type { FooterBottomProps } from "@components/Footer";

const baseUrl = import.meta.env.BASE_URL;

const catalogue = [
  ...Array.from({ length: 10 }, (_, index) => ({ title: `${index + 1} Элемент каталога`, href: `${baseUrl}catalog/` })),
];

const navItemsAbout = [
  ...Array.from({ length: 5 }, (_, index) => ({ title: `${index + 1} Элемент Компании`, href: `${baseUrl}about/` })),
];

const navItemsContacts = [
  ...Array.from({ length: 6 }, (_, index) => ({ title: `${index + 1} Элемент Контактов`, href: `${baseUrl}contacts/` })),
];

const navItemsForClients = [
  ...Array.from({ length: 4 }, (_, index) => ({ button: `${index + 1} Кнопка для клиентов`, href: `${baseUrl}contacts/` })),
];

const navItemsDevInfo: FooterBottomProps["developerInfo"] = {
  title: "Разработано MouseDevelopment - разрботка сайтов на словах",
  button: "Тык!",
  href: "https://mouse-development.ru",
};

export const navItems = {
  catalogue,
  about: navItemsAbout,
  contacts: navItemsContacts,
  forClients: navItemsForClients,
  devInfo: navItemsDevInfo,
};
