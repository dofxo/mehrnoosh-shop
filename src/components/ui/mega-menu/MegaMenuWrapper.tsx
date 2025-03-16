"use client";

import MegaMenuCascadingMenu from "@/components/ui/mega-menu/cascading-menu/CascadingMenu";
import MegaMenuCategory from "@/components/ui/mega-menu/category/Category";
import MegaMenuDigitalEquipments from "@/components/ui/mega-menu/digital-equipments/DigitalEquipments";
import MegaMenuHouseEquipments from "@/components/ui/mega-menu/house-equipments/HouseEquipments";
import MegaMenuLaptopAndComputer from "@/components/ui/mega-menu/laptop-and-computer/LaptopAndComputer";
import ShoppingBasketSheet from "@/components/ui/mega-menu/shopping-basket/ShoppingBasket";
import { useAppSelector } from "@/lib/hooks";
import { ShoppingBasket as ShoppingBasketIcon } from "lucide-react";

export default function MegaMenuWrapper() {
  const language = useAppSelector((state) => state.language.languageData);

  return (
    <section className="hidden bg-white p-[15px] pt-[20px] lg:block">
      <div className="container flex flex-row items-center justify-between">
        <div className="flex gap-1">
          <MegaMenuCategory language={language} />
          <MegaMenuDigitalEquipments language={language} />
          <MegaMenuHouseEquipments language={language} />
          <MegaMenuLaptopAndComputer language={language} />
          <MegaMenuCascadingMenu language={language} />
        </div>
        <div className="flex w-[20%] max-w-[200px] flex-row items-center justify-between gap-1 p-[10px]">
          <ShoppingBasketSheet>
            <div className="group flex cursor-pointer flex-row items-center justify-center gap-2 rounded-primary bg-primary p-4 text-white transition delay-75 hover:bg-primary-100 ltr:flex-row-reverse rtl:flex-row">
              {/* TODO: make this dynamic  */}
              <div className="flex items-center justify-center rounded-[100%] bg-primary-700 px-2.5 pt-1 font-bold transition group-hover:bg-primary">
                0
              </div>
              <ShoppingBasketIcon className="transition group-hover:text-primary" />
            </div>
          </ShoppingBasketSheet>
        </div>
      </div>
    </section>
  );
}
