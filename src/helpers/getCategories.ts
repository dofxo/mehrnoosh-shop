import { IProductData } from "@/lib/features/productSingle/productSingleSlice";

export const getCategories = (products: IProductData) => {
  const categories = Array.from(
    new Map(
      products.productsData
        ?.map((product) => product.category)
        .filter(Boolean)
        .map((category) => [JSON.stringify(category), category]),
    ).values(),
  );

  return categories;
};
