import type { MegaMenuCategoryProps } from "./Category.d";
import { IProduct } from "@/app/[lang]/product/[id]/Product";
import { Button } from "@/components/ui/button";
import MegaMenuTrigger from "@/components/ui/mega-menu/mega-menu-trigger/MegaMenuTrigger";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Smartphone, LaptopMinimal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiLipstick, GiVacuumCleaner, GiSmallFire } from "react-icons/gi";

export default function MegaMenuCategory({
  currentLanguage,
  category,
  products,
  language,
}: MegaMenuCategoryProps) {
  const categoryText =
    currentLanguage === "fa" ? category.fa[0] : category.en[0];

  const currentCategoryProducts = products.productsData.filter(
    (product: IProduct) => product.category.en[0] === category.en[0],
  );

  const slicedProducts = currentCategoryProducts.slice(0, 8);

  const categoryIconObject: Record<string, React.ReactElement> = {
    "laptop and computer": <LaptopMinimal />,
    "vacuum cleaner": <GiVacuumCleaner />,
    cosmetics: <GiLipstick />,
    fry: <GiSmallFire />,
    "phone and tablet": <Smartphone />,
  };

  const categoryName = category?.en?.[0] as string;
  const categoryIcon = categoryIconObject[categoryName];

  // Track loading state for each product individually
  const [loadingMap, setLoadingMap] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(
      slicedProducts.map((_: any, idx: number) => [idx, true]),
    ),
  );

  const handleImageLoad = (idx: number) => {
    setLoadingMap((prev) => ({ ...prev, [idx]: false }));
  };

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <MegaMenuTrigger icon={categoryIcon} text={categoryText} />
      </MenuTrigger>
      <MenuContent
        dir={currentLanguage === "fa" ? "rtl" : "ltr"}
        className="mt-10 hidden w-[100vw] flex-col justify-start gap-2 rounded-primary bg-white p-[30px] text-black shadow-none lg:flex"
      >
        <div className="flex max-w-container flex-row flex-wrap items-center gap-2">
          {/* TODO: change any later */}
          {slicedProducts.map((item: any, idx: number) => {
            const itemName = item.name[currentLanguage];
            const isLoading = loadingMap[idx];

            return (
              <div
                key={idx}
                className="flex max-w-[content] flex-col items-center gap-2 rounded-primary border-[10px] border-secondary p-3"
              >
                <div className="h-[100px] w-[100px]">
                  {isLoading && (
                    <Skeleton className="rounded-full h-[100px] w-[100px]" />
                  )}
                  <Image
                    width={100}
                    height={50}
                    alt={itemName}
                    src={item.images[0]}
                    onLoad={() => handleImageLoad(idx)}
                    className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
                  />
                </div>
                <span className="min-w-[150px] max-w-[250px] font-bold ltr:text-left rtl:text-right">
                  {itemName}
                </span>
              </div>
            );
          })}
        </div>

        {/* TODO: link to products page */}
        <Link href="#" className="self-end">
          <Button size="lg">{language.megaMenu.more_button}</Button>
        </Link>
      </MenuContent>
    </MenuRoot>
  );
}
