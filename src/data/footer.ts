import type { FooterBottomProps } from "@components/Footer";

const catalogue = [
  { title: "1 Элемент каталога", href: "/catalog" },
  { title: "2 Элемент каталога", href: "/catalog" },
  { title: "3 Элемент каталога", href: "/catalog" },
  { title: "4 Элемент каталога", href: "/catalog" },
  { title: "5 Элемент каталога", href: "/catalog" },
  { title: "6 Элемент каталога", href: "/catalog" },
  { title: "7 Элемент каталога", href: "/catalog" },
  { title: "8 Элемент каталога", href: "/catalog" },
  { title: "9 Элемент каталога", href: "/catalog" },
  { title: "10 Элемент каталога", href: "/catalog" },
];

const navItemsAbout = [
  { title: "1 Элемент Компании", href: "/about" },
  { title: "2 Элемент Компании", href: "/about" },
  { title: "3 Элемент Компании", href: "/about" },
  { title: "4 Элемент Компании", href: "/about" },
  { title: "5 Элемент Компании", href: "/about" },
];

const navItemsContacts = [
  { title: "1 Элемент Контактов", href: "/contacts" },
  { title: "2 Элемент Контактов", href: "/contacts" },
  { title: "3 Элемент Контактов", href: "/contacts" },
  { title: "4 Элемент Контактов", href: "/contacts" },
  { title: "5 Элемент Контактов", href: "/contacts" },
  { title: "6 Элемент Контактов", href: "/contacts" },
];

const navItemsForClients = [
  { button: "1 Кнопка для клиентов", href: "/" },
  { button: "2 Кнопка для клиентов", href: "/" },
  { button: "3 Кнопка для клиентов", href: "/" },
  { button: "4 Кнопка для клиентов", href: "/" },
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
