import type { MegaMenuCategoryProps } from "./Category.d";
import MegaMenuTrigger from "@/components/ui/mega-menu/mega-menu-trigger/MegaMenuTrigger";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { List, Smartphone, LaptopMinimal } from "lucide-react";
import { GiLipstick, GiVacuumCleaner,GiSmallFire } from "react-icons/gi";

// TODO: change it to a component that renders each category
export default function MegaMenuCategory({
  currentLanguage,
  category,
}: MegaMenuCategoryProps) {
  const categoryText =
    currentLanguage === "fa" ? category.fa[0] : category.en[0];

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
      <MenuContent className="w-[100vw] max-w-container rounded-primary bg-secondary p-[30px] text-black shadow-none">
        <span>some content here!</span>
      </MenuContent>
    </MenuRoot>
  );
}
