import { ReactElement } from "react";
import { FaLaptop, FaMobileAlt, FaUtensils } from "react-icons/fa";
import { GiVacuumCleaner, GiLipstick } from "react-icons/gi";

const categoryIcons: Record<string, ReactElement> = {
  "لپ تاپ و کامپیوتر": <FaLaptop size={60} />,
  "laptop and computer": <FaLaptop size={60} />,

  "جارو برقی": <GiVacuumCleaner size={60} />,
  "vacuum cleaner": <GiVacuumCleaner size={60} />,

  "لوازم آرایشی": <GiLipstick size={60} />,
  cosmetics: <GiLipstick size={60} />,

  "سرخ کن": <FaUtensils size={60} />,
  fry: <FaUtensils size={60} />,

  "موبایل و تبلت": <FaMobileAlt size={60} />,
  "phone and tablet": <FaMobileAlt size={60} />,
};

export const getCategoryIcon = (categoryName: string) => {
  return categoryIcons[categoryName];
};
