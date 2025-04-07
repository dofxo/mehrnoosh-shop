import type { MegaMenuCategoryProps } from "./Category.d";
import MegaMenuTrigger from "@/components/ui/mega-menu/mega-menu-trigger/MegaMenuTrigger";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { Smartphone, LaptopMinimal } from "lucide-react";
import { GiLipstick, GiVacuumCleaner, GiSmallFire } from "react-icons/gi";

// TODO: change it to a component that renders each category
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

  console.log(currentCategoryProducts);

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
      <MenuContent dir={currentLanguage === "fa" ? "rtl" : "ltr"} className="mt-10 w-[100vw] max-w-container rounded-primary bg-white p-[30px] text-black shadow-none">
        {/* TODO: change prop type later */}
        {currentCategoryProducts.map((item: any) => {
          const itemName = item.name[currentLanguage];
          return <div>{itemName}</div>;
        })}
      </MenuContent>
    </MenuRoot>
  );
}
