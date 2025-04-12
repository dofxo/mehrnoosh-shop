import type { MegaMenuCategoryProps } from "./Category.d";
import MegaMenuTrigger from "@/components/ui/mega-menu/mega-menu-trigger/MegaMenuTrigger";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { Smartphone, LaptopMinimal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { GiLipstick, GiVacuumCleaner, GiSmallFire } from "react-icons/gi";

export default function MegaMenuCategory({
  currentLanguage,
  category,
  products,
}: MegaMenuCategoryProps) {
  const categoryText =
    currentLanguage === "fa" ? category.fa[0] : category.en[0];

  // TODO: change prop type later
  const currentCategoryProducts = products.productsData.filter(
    (product: any) => product.category.en[0] === category.en[0],
  );

  const categoryIconObject: Record<string, React.ReactElement> = {
    "laptop and computer": <LaptopMinimal />,
    "vacuum cleaner": <GiVacuumCleaner />,
    cosmetics: <GiLipstick />,
    fry: <GiSmallFire />,
    "phone and tablet": <Smartphone />,
  };

  const categoryName = category?.en?.[0] as string;
  const categoryIcon = categoryIconObject[categoryName];

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <MegaMenuTrigger icon={categoryIcon} text={categoryText} />
      </MenuTrigger>
      <MenuContent
        dir={currentLanguage === "fa" ? "rtl" : "ltr"}
        className="hidden lg:flex mt-10 w-[100vw] max-w-container flex-wrap justify-start gap-2 rounded-primary bg-white p-[30px] text-black shadow-none"
      >
        {/* TODO: change prop type later */}
        {currentCategoryProducts.map((item: any, idx: number) => {
          const itemName = item.name[currentLanguage];
          const [isLoading, setIsLoading] = useState(true);

          return (
            <div
              key={idx}
              className="flex max-w-[content] flex-col items-center gap-2 rounded-primary border-[10px] border-secondary p-3"
            >
              <div className="h-[100px] w-[100px]">
                {isLoading && (
                  <div className="rounded absolute inset-0 flex animate-pulse items-center justify-center bg-gray-100">
                    {/* TODO: change this */}
                    <AiOutlineLoading />
                  </div>
                )}
                <Image
                  width={100}
                  height={50}
                  alt={itemName}
                  src={item.images[0]}
                  onLoad={() => setIsLoading(false)}
                  className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
                />
              </div>
              <span className="min-w-[150px] max-w-[250px] font-bold ltr:text-left rtl:text-right">
                {itemName}
              </span>
            </div>
          );
        })}
      </MenuContent>
    </MenuRoot>
  );
}
