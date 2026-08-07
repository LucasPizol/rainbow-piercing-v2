/**
 * Fonte única de verdade do conteúdo que envelhece.
 *
 * Nada de "Há 3 anos" escrito à mão no JSX: qualquer número derivado do
 * tempo é calculado a partir de FOUNDING_YEAR na hora da renderização.
 */

const FOUNDING_YEAR = 2021;

const WHATSAPP_PHONE = "5535999422529";
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de ver seu catálogo de piercings!";

const buildWhatsappLink = (message: string = WHATSAPP_MESSAGE) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    message
  )}`;

export const yearsInBusiness = (reference: Date = new Date()) =>
  reference.getFullYear() - FOUNDING_YEAR;

export const currentYear = (reference: Date = new Date()) =>
  reference.getFullYear();

export const site = {
  name: "Rainbow Piercing",
  foundingYear: FOUNDING_YEAR,
  city: "Poços de Caldas",
  state: "MG",
  address: {
    street: "Rua São Paulo, 56",
    complement: "sala 35, 2º andar",
    landmark: "ao lado da Caixa Econômica Federal",
    zip: "37701-752",
  },
  links: {
    instagram: "https://instagram.com/rainbowpiercing04",
    whatsapp: buildWhatsappLink(),
    whatsappCatalog: buildWhatsappLink(
      "Olá! Gostaria de ver seu catálogo de piercings!"
    ),
    whatsappBooking: buildWhatsappLink(
      "Olá! Gostaria de agendar uma aplicação de piercing."
    ),
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.832302835207!2d-46.5696682254923!3d-21.78675039880297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9dceede647d0f%3A0x114481fd666fcd1!2sR.%20S%C3%A3o%20Paulo%2C%2056%20-%20Centro%2C%20Po%C3%A7os%20de%20Caldas%20-%20MG%2C%2037701-752!5e0!3m2!1spt-BR!2sbr!4v1724884413240!5m2!1spt-BR!2sbr",
  },
  author: "Lucas Pizol",
} as const;

export const buildWhatsapp = buildWhatsappLink;
