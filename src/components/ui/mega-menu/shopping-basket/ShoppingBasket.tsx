"use client";

import { Button } from "@/components/ui/button";
import DirectionWrapper from "@/components/ui/direction";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppSelector } from "@/lib/hooks";
import { ShoppingBasket as ShoppingBasketIcon, Frown } from "lucide-react";

export default function ShoppingBasket() {
  const { currentLanguage, languageData } = useAppSelector(
    (state) => state.language,
  );

  return (
    <DirectionWrapper>
      <Sheet>
        <SheetTrigger>
          <div className="group flex cursor-pointer flex-row items-center justify-center gap-2 rounded-primary bg-primary p-4 text-white transition delay-75 hover:bg-primary-100 ltr:flex-row-reverse rtl:flex-row">
            {/* TODO: make this dynamic  */}
            <div className="flex items-center justify-center rounded-[100%] bg-primary-700 px-2.5 pt-1 font-bold transition group-hover:bg-primary">
              0
            </div>
            <ShoppingBasketIcon className="transition group-hover:text-primary" />
          </div>
        </SheetTrigger>
        <SheetContent
          className="flex flex-col"
          side={currentLanguage === "en" ? "right" : "left"}
        >
          <div className="relative">
            <div className="flex flex-col items-center justify-center gap-4 rounded-primary bg-secondary p-[20px]">
              <div className="rounded-[100%] bg-primary-100 p-6">
                <Frown
                  width={40}
                  height={40}
                  className="font-bold text-primary"
                />
              </div>
              <p>{languageData.shoppingBasket.empty_basket}</p>
            </div>
            <div className="fixed bottom-2 flex items-center justify-between rounded-primary bg-secondary p-[15px] text-primary">
              <span>{languageData.shoppingBasket.go_to_shop}</span>
              <div></div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </DirectionWrapper>
  );
}
