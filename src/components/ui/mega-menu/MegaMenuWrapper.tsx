"use client";

import MegaMenuCategory from "@/components/ui/mega-menu/category/Category";
import ShoppingBasketSheet from "@/components/ui/shopping-basket/ShoppingBasket";
import { getCategories } from "@/helpers/getCategories";
import { useAppSelector } from "@/lib/hooks";
import { ShoppingBasket as ShoppingBasketIcon } from "lucide-react";

export default function MegaMenuWrapper() {
  const { currentLanguage } = useAppSelector((state) => state.language);
  const products = useAppSelector((state) => state.productSingle);
  const categories = getCategories(products);

  return (
    <section className="hidden bg-white p-[15px] pt-[20px] lg:block">
      <div className="container flex flex-row items-center justify-between">
        <div className="flex gap-1">
          {categories.map((category, idx) => (
            <MegaMenuCategory
              products={products}
              key={idx}
              category={category}
              currentLanguage={currentLanguage}
            />
          ))}
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
