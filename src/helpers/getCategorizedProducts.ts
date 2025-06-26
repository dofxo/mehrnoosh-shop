import { langType } from "@/app/[lang]/langs";
import { IProduct } from "@/app/[lang]/product/[id]/Product";

export const getCategorizedProducts = (
  products: IProduct[],
  currentLanguage: langType,
) => {
  const categorized: { [key: string]: any[] } = {};

  products.forEach((product) => {
    const productCategory = product.category[currentLanguage][0];

    if (!categorized[productCategory]) {
      categorized[productCategory] = [];
    }

    categorized[productCategory].push(product);
  });

  return categorized;
};
