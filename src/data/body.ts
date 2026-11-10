import bodyServicesImage from "@assets/images/BodyServicesExample.png";
import bodyClientsImageAuchan from "@assets/images/Auchan-logo.png";
import bodyClientsImageBah from "@assets/images/bah_logo.png";
import bodyClientsImageDvor from "@assets/images/dvor_logo.png";
import bodyCatalogueImageLift from "@assets/images/Catalogue-Image.png";

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
  { img: bodyClientsImageAuchan.src, alt: "Клиент 1" },
  { img: bodyClientsImageBah.src, alt: "Клиент 2" },
  { img: bodyClientsImageDvor.src, alt: "Клиент 3" },
  { img: bodyClientsImageAuchan.src, alt: "Клиент 4" },
  { img: bodyClientsImageBah.src, alt: "Клиент 5" },
  { img: bodyClientsImageDvor.src, alt: "Клиент 6" },
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

export const BodyCatalogueInfo = [
  {
    title: "Каталог 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: servicesUrl,
  },
  {
    title: "Каталог 2",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: servicesUrl,
  },
  {
    title: "Каталог 3",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    href: servicesUrl,
  },
  {
    title: "Каталог 4",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: servicesUrl,
  },
  {
    title: "Каталог 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: servicesUrl,
  },
  {
    title: "Каталог 6",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    href: servicesUrl,
  },
];

export const BodyCatalogueImages = [
  { img: bodyCatalogueImageLift.src, alt: "Каталог 1" },
  { img: bodyCatalogueImageLift.src, alt: "Каталог 2" },
  { img: bodyCatalogueImageLift.src, alt: "Каталог 3" },
  { img: bodyCatalogueImageLift.src, alt: "Каталог 4" },
  { img: bodyCatalogueImageLift.src, alt: "Каталог 5" },
  { img: bodyCatalogueImageLift.src, alt: "Каталог 6" },
];
