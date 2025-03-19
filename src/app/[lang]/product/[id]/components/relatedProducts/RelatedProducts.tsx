"use client";

import { IProduct } from "../../Product";
import ProductCard from "./ProductCard";
import { useAppSelector } from "@/lib/hooks";
import { Store } from "lucide-react";
import { useEffect, useState } from "react";

const RelatedProducts = () => {
  const [filteredProductsData, setFilteredProductsData] =
    useState<IProduct[]>();
  const { languageData, currentLanguage } = useAppSelector(
    (state) => state.language,
  );
  const { productsData, productData } = useAppSelector(
    (state) => state.productSingle,
  );

  useEffect(() => {
    // Filter out products that share any category with myProductCategories
    const filteredProducts = productsData?.filter((product: IProduct) => {
      const productCategories = product.category.en || [];

      // remove the current product
      if (productData?.id === product.id) return;

      return productCategories.some((category) => {
        return productData?.category.en.includes(category);
      });
    });

    setFilteredProductsData(filteredProducts as IProduct[]);
  }, [productData?.category.en, productsData]);

  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-2">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-primary text-[18px] text-white">
          <Store size={18} />
        </div>
        <h3 className="text-[20px] font-bold">
          {languageData.productSingle.related_products}
        </h3>
      </div>
      <div className="related-products flex flex-wrap gap-5 p-5">
        {filteredProductsData?.map((productData, idx) => (
          <ProductCard
            languageData={languageData}
            currentLanguage={currentLanguage}
            productData={productData}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
