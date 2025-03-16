"use client";

import { Button } from "@/components/ui/button";
import ShoppingBasket from "@/components/ui/shopping-basket/ShoppingBasket";
import MobileNavEnd from "@/components/ui/mobile-nav/MobileNavEnd";
import { useAppSelector } from "@/lib/hooks";
import { ShoppingBag } from "lucide-react";

export default function MobileNav() {
  const language = useAppSelector((state) => state.language.languageData);

  return (
    <div className="fixed bottom-0 right-0 block w-full p-[10px] lg:hidden">
      <div className="flex items-center justify-between rounded-primary bg-white p-[15px] shadow-mobile-nav">
        {/* TODO: add link later */}
        <ShoppingBasket>
          <Button className="flex items-center justify-center rounded-primary bg-primary px-[15px] py-[20px] text-[16px] font-bold text-white shadow-mobile-nav-button">
            <div className="flex flex-row items-center justify-center rounded-primary bg-primary-700 p-1">
              <ShoppingBag />
            </div>
            <span className="mb-[-3px]">{language.mobileNav.cart}</span>
          </Button>
        </ShoppingBasket>

        <MobileNavEnd />
      </div>
    </div>
  );
}
