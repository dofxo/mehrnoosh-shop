"use client";

import { langType } from "@/app/[lang]/langs";
import { IProduct } from "@/app/[lang]/product/[id]/Product";
import { getCategorizedProducts } from "@/helpers/getCategorizedProducts";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

const TopSection = () => {
  const { productsData } = useAppSelector((state) => state.productsData);
  const { languageData, currentLanguage } = useAppSelector(
    (state) => state.language,
  );

  const [categories, setCategories] = useState<IProduct[]>();
  const [categoryItems, setCategoryItems] = useState<any[]>([]);

  useEffect(() => {
    if (!productsData) return;
    const categories = getCategorizedProducts(
      productsData as IProduct[],
      currentLanguage as langType,
    );
    setCategories(Object.keys(categories) as unknown as IProduct[]);
  }, [productsData]);

  useEffect(() => {
    if (!categories) return;
    setCategoryItems([
      {
        title: languageData.landing.footer_category_links.categories,
        submenu: categories.map((category) => ({
          text: category,
          link: `/shop/category/${category}`,
        })),
      },
      {
        title: languageData.landing.footer_category_links.useful_menu,
        submenu: [
          {
            text: languageData.landing.footer_category_links.shopping_cart,
            link: "/shopping-cart/",
          },
        ],
      },
    ]);
  }, [categories]);

  return (
    <div className="categories flex gap-5">
      {categoryItems.length > 0 &&
        categoryItems.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h5 className="text-[20px] font-bold text-text-primary">
              {item.title}
            </h5>
            <ul className="flex flex-col gap-1">
              {item.submenu.map(
                (subItem: { text: string; link: string }, index: number) => (
                  <li key={index} className="group relative">
                    <span className="rounded absolute right-0 top-1.5 h-2 w-[0.8px] bg-gray-400 group-hover:bg-primary"></span>
                    <a
                      className="pr-2 transition group-hover:text-primary"
                      href={subItem.link}
                    >
                      {subItem.text}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default TopSection;
