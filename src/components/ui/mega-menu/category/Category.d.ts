import { IProduct } from "@/app/[lang]/product/[id]/Product";
import { CategoryType } from "@/helpers/getCategories";

export type MegaMenuCategoryProps = {
  currentLanguage: string;
  category: CategoryType;
  // TODO: change later
  products: any;
};
