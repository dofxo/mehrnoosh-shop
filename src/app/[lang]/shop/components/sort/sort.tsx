"use client";

import type { SortProps } from "./sort.d";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { filterOptions } from "@/configs/filterOptions";
import { useAppSelector } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function Sort({
  productsAmount,
  currentFilter,
  setCurrentFilter,
  handleCurrentFilterChange,
}: SortProps) {
  const language = useAppSelector((state) => state.language.languageData);
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage,
  ) as "en" | "fa";

  // TODO: change this later
  useEffect(() => {
    console.log("Filter changed to:", currentFilter);
  }, [currentFilter]);

  return (
    <>
      <h2 className="mb-[20px] text-[25px] font-bold">{language.shop.title}</h2>

      <div className="flex flex-row flex-wrap items-center gap-2">
        <div className="rounded-primary bg-white px-[16px] py-[8px] text-sm">
          {language.shop.show} 1-9 {language.shop.from} {productsAmount}{" "}
          {language.shop.result}
        </div>

        <RadioGroup
          value={currentFilter}
          onValueChange={handleCurrentFilterChange}
          className={cn(
            "flex flex-wrap gap-2",
            currentLanguage === "fa" ? "flex-row-reverse" : "flex-row",
          )}
        >
          {filterOptions.map((option) => (
            <RadioGroupItem key={option.value} value={option.value}>
              {option.label[currentLanguage]}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      </div>
    </>
  );
}
