"use client";

import MobileNavEnd from "@/components/ui/mobile-nav/MobileNavEnd";
import ShoppingBasket from "@/components/ui/shopping-basket/ShoppingBasket";
import { useAppSelector } from "@/lib/hooks";
import { ShoppingBag } from "lucide-react";

export default function MobileNav() {
  const language = useAppSelector((state) => state.language.languageData);

  return (
    <div className="fixed bottom-0 right-0 block w-full p-[10px] lg:hidden">
      <div className="flex items-center justify-between rounded-primary bg-white p-[15px] shadow-mobile-nav">
        {/* TODO: add link later */}
        <ShoppingBasket>
          <div className="flex items-center justify-center gap-1 rounded-primary bg-primary px-[15px] py-[8px] text-[16px] font-bold text-white shadow-mobile-nav-button">
            <div className="flex flex-row items-center justify-center rounded-primary bg-primary-700 p-1.5">
              <ShoppingBag height={20} width={20}/>
            </div>
            <span className="mb-[-3px]">{language.mobileNav.cart}</span>
          </div>
        </ShoppingBasket>

        <MobileNavEnd />
      </div>
    </div>
  );
}
