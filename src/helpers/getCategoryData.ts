"use client";

import { getCategorizedProducts } from "./getCategorizedProducts";
import { langType } from "@/app/[lang]/langs";
import { IProduct } from "@/app/[lang]/product/[id]/Product";
import { useAppSelector } from "@/lib/hooks";
import { ICategories } from "@/types/categories";

// pass on one of the categoryNames to get category data
export const getCategoryData = async (categoryName: ICategories) => {
  const { currentLanguage } = useAppSelector((store) => store.language);
  const { productsData } = await useAppSelector((store) => store.productsData);

  const categorizedData = getCategorizedProducts(
    productsData as IProduct[],
    currentLanguage as langType,
  );

  return categorizedData[categoryName];
};
