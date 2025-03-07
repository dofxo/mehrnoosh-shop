"use client";

import { useAppSelector } from "@/lib/hooks";
import { IProduct } from "../../Product";

const RelatedProducts = () => {
  const { languageData } =
    useAppSelector((state) => state.language);

  return <section>
    <h3>{languageData.productSingle.related_products}</h3>
  </section>;
};

export default RelatedProducts;
