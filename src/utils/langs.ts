import "server-only";

const languages = {
  en: () =>
    import("../../public/lang/en.json").then((module) => module.default),
  fa: () =>
    import("../../public/lang/fa.json").then((module) => module.default),
};

export const getLanguage = async (locale: "en" | "fa") => languages[locale]();
