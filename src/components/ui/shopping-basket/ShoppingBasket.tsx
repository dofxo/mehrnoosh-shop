"use client";

import type { ShoppingBasketProps } from "./ShoppingBasket.d";
import DirectionWrapper from "@/components/ui/direction";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppSelector } from "@/lib/hooks";
import { Frown } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ShoppingBasket({ children }: ShoppingBasketProps) {
  const { currentLanguage, languageData } = useAppSelector(
    (state) => state.language,
  );

  return (
    <DirectionWrapper>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent
          className="flex flex-col"
          side={currentLanguage === "en" ? "right" : "left"}
        >
          <div className="z-1 relative">
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
          </div>

          {/* bottom nav */}
					<Link href="/shop" >
            <div className="group absolute bottom-4 left-2.5 right-2.5 flex cursor-pointer items-center justify-between rounded-primary bg-secondary p-[15px] text-primary">
              <span className="font-bold">
                {languageData.shoppingBasket.go_to_shop}
              </span>
              <div className="cursor-pointer rounded-[100%] bg-white p-2 transition group-hover:bg-primary group-hover:text-white">
                <ChevronLeft size={16} />
              </div>
            </div>
          </Link>
        </SheetContent>
      </Sheet>
    </DirectionWrapper>
  );
}
