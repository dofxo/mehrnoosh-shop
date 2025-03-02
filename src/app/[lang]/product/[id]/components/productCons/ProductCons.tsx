"use client";

import { cons } from "@/configs/productCons";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";

const ProductCons = () => {
  const { currentLanguage } = useAppSelector((state) => state.language);

  return (
    <section className="flex items-center justify-between gap-2 rounded-[25px] bg-white p-[30px]">
      {cons[currentLanguage as "fa" | "en"].map(
        (item, key) => (
          console.log(item.imageUrl),
          (
            <div key={key} className="flex items-center gap-5">
              <Image
                src={item.imageUrl}
                layout="responsive"
                width={0}
                height={0}
                alt={item.title}
                className="!w-[50px]"
              />
              <div className="flex flex-col gap-1">
                <h5 className="w-max text-[16px] font-bold text-text-primary">
                  {item.title}
                </h5>
                <span className="w-max text-[15px] font-[600] text-[#6D90B9]">
                  {item.subtitle}
                </span>
              </div>
            </div>
          )
        ),
      )}
    </section>
  );
};

export default ProductCons;
