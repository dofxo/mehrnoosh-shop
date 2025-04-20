import { CategoryType } from "@/helpers/getCategories";
import { languageDataType } from "@/lib/features/language/languageSlice";

export type MegaMenuCategoryProps = {
  currentLanguage: string;
  category: CategoryType;
  language: languageDataType;
  // TODO: change later
  products: any;
};
