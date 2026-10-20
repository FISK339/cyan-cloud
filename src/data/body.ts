import bodyServicesImage from "@assets/images/BodyServicesExample.png";
import bodyClientsImage from "@assets/images/Auchan-logo.png";

const servicesUrl = `${import.meta.env.BASE_URL}services/`;

export const BodyServicesInfo = [
  {
    title: "Услуга 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: servicesUrl,
  },
  {
    title: "Услуга 2",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: servicesUrl,
  },
  {
    title: "Услуга 3",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    href: servicesUrl,
  },
  {
    title: "Услуга 4",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: servicesUrl,
  },
  {
    title: "Услуга 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: servicesUrl,
  },
  {
    title: "Услуга 6",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: servicesUrl,
  },
];

export const BodyOurClientsImages = [
  { img: bodyClientsImage.src, alt: "Клиент 1" },
  { img: bodyClientsImage.src, alt: "Клиент 2" },
  { img: bodyClientsImage.src, alt: "Клиент 3" },
  { img: bodyClientsImage.src, alt: "Клиент 4" },
  { img: bodyClientsImage.src, alt: "Клиент 5" },
  { img: bodyClientsImage.src, alt: "Клиент 6" },
];

export const BodyServicesImages = [
  { img: bodyServicesImage.src, alt: "Услуга 1" },
  { img: bodyServicesImage.src, alt: "Услуга 2" },
  { img: bodyServicesImage.src, alt: "Услуга 3" },
  { img: bodyServicesImage.src, alt: "Услуга 4" },
  { img: bodyServicesImage.src, alt: "Услуга 5" },
  { img: bodyServicesImage.src, alt: "Услуга 6" },
];

export const BodyContactUsInputInfo = [
  { label: "Ваше имя", type: "text" },
  { label: "Ваш email", type: "email" },
];

export const BodyAIAssistantMessageInfo = [
  { label: "Здравствуйте! Чем я могу вам помочь?" },
  { label: "Привет, помоги выбрать оборудование" },
];
