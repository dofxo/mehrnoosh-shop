"use client";

import type { SortProps } from "./sort.d";
import { useAppSelector } from "@/lib/hooks";

export default function Sort({ productsAmount }: SortProps) {
  const language = useAppSelector((state) => state.language.languageData);

  return (
    <>
      <h2 className="mb-[20px] text-[25px] font-bold">{language.shop.title}</h2>
      <div className="flex flex-row gap-2">
        <div className="rounded-primary bg-white px-[15px] py-[8px]">
          {/* TODO: change 1-9 to show the related number in the products list */}
          {language.shop.show} 1-9 {language.shop.from} {productsAmount}{" "}
          {language.shop.result}
        </div>
      </div>
    </>
  );
}
