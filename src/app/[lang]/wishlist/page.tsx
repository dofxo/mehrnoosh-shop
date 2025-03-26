"use client";

import { langType } from "../langs";
import { useAppSelector } from "@/lib/hooks";
import { Heart } from "lucide-react";

const WhishList = () => {
  const { languageData, currentLanguage } = useAppSelector(
    (state) => state.language,
  );
  const { productsData } = useAppSelector((state) => state.productsData);
  console.log(productsData);

  return (
    <section className="container !mt-[20px] rounded-[25px] bg-white p-[30px]">
      <h1 className="flex items-center gap-3 text-2xl font-bold text-text-primary">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#ff4191] shadow-[0px_2px_15px_#FF419170]">
          <Heart color="white" />
        </div>
        <span> {languageData.whishlist.title}</span>
      </h1>

      <div className="list-of-products mt-[30px] rounded-[20px] bg-background p-[20px]">
        <div className="rounded-[15px] bg-white p-[20px]">
          {productsData?.map((product, idx) => {
            return (
              <div key={idx}>{product.name[currentLanguage as langType]}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhishList;
