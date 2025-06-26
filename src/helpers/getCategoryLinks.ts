const categoryLinks: Record<string, string> = {
  "لپ تاپ و کامپیوتر": "#",
  "laptop and computer": "#",

  "جارو برقی": "#",
  "vacuum cleaner": "#",

  "لوازم آرایشی": "#",
  cosmetics: "#",

  "سرخ کن": "#",
  fry: "#",

  "موبایل و تبلت": "#",
  "phone and tablet": "#",
};

export const getCategoryLinks = (categoryName: string) => {
  return categoryLinks[categoryName];
};
