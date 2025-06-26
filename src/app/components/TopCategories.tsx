"use client";

import { langType } from "../[lang]/langs";
import { IProduct } from "../[lang]/product/[id]/Product";
import Title from "@/components/Title";
import { getCategorizedProducts } from "@/helpers/getCategorizedProducts";
import { getCategoryIcon } from "@/helpers/getCategoryIcon";
import { getCategoryLinks } from "@/helpers/getCategoryLinks";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

const TopCategories = () => {
  const { languageData, currentLanguage } = useAppSelector(
    (store) => store.language,
  );
  const { productsData } = useAppSelector((store) => store.productsData);

  // categorized data
  const [products, setProducts] = useState<Record<string, IProduct[]>>({});

  useEffect(() => {
    (async () => {
      const categorizedData = await getCategorizedProducts(
        productsData as IProduct[],
        currentLanguage as langType,
      );

      setProducts(categorizedData as any);
    })();
  }, [productsData, currentLanguage]);

  return (
    <section className="flex flex-col gap-10 rounded-[25px] bg-gradient-to-b from-white to-[#F2295B05] p-[30px]">
      <Title
        title={languageData.landing.top_categories}
        subTitle={
          currentLanguage === "fa"
            ? "List of top categories"
            : "برترین دسته بندی ها"
        }
        image="/images/landing/square-ellipsis.png"
        color={{ imageBackground: "#f2f6fc" }}
      />
      <div className="categories flex flex-wrap justify-evenly gap-4">
        {Object.entries(products).length > 0 ? (
          Object.entries(products).map((item, idx) => {
            return (
              <a
                className="group flex h-[80px] w-[100px] cursor-pointer flex-col items-center justify-evenly gap-2 rounded-[15px] bg-white p-[10px] shadow-[0px_2px_15px_#73636317] md:h-[250px] md:w-[150px]"
                key={idx}
                href={getCategoryLinks(item[0])}
              >
                <span className="mb-[40px] hidden items-center justify-center rounded-[50%] bg-gray-300 p-[15px] transition group-hover:scale-105 md:flex">
                  {getCategoryIcon(item[0])}
                </span>
                <h5 className="text-[12px] font-bold md:text-[16px]">
                  {item[0]}
                </h5>
                <span className="rounded-[20px] bg-gray-200 px-[10px] py-[2px] text-[12px] md:text-[16px]">
                  {item[1].length} {languageData.landing.product}
                </span>
              </a>
            );
          })
        ) : (
          <span className="category-loader"></span>
        )}
      </div>
    </section>
  );
};

export default TopCategories;
