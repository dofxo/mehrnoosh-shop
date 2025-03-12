"use client";

import MegaMenuCascadingMenu from "@/components/ui/mega-menu/cascading-menu/CascadingMenu";
import MegaMenuCategory from "@/components/ui/mega-menu/category/Category";
import MegaMenuDigitalEquipments from "@/components/ui/mega-menu/digital-equipments/DigitalEquipments";
import MegaMenuHouseEquipments from "@/components/ui/mega-menu/house-equipments/HouseEquipments";
import MegaMenuLaptopAndComputer from "@/components/ui/mega-menu/laptop-and-computer/LaptopAndComputer";
import { useAppSelector } from "@/lib/hooks";

export default function MegaMenuWrapper() {
  const language = useAppSelector((state) => state.language.languageData);

  return (
    <section className="hidden bg-white p-[15px] pt-[20px] lg:block">
      <div className="container flex gap-4">
        {/* category */}
        <MegaMenuCategory language={language} />
        <MegaMenuDigitalEquipments language={language} />
        <MegaMenuHouseEquipments language={language} />
        <MegaMenuLaptopAndComputer language={language} />
        <MegaMenuCascadingMenu language={language} />
      </div>
    </section>
  );
}
