import "server-only";

const dictionaries = {
  en: () =>
    import("../../public/lang/en.json").then((module) => module.default),
  fa: () =>
    import("../../public/lang/fa.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "fa") =>
  dictionaries[locale]();
