import type { MegaMenuCategoryProps } from "./Category.d";
import MegaMenuTrigger from "@/components/ui/mega-menu/mega-menu-trigger/MegaMenuTrigger";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { List } from "lucide-react";

// TODO: change it to a component that renders each category
export default function MegaMenuCategory({ language }: MegaMenuCategoryProps) {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <MegaMenuTrigger icon={<List />} text={language["megaMenu"].category} />
      </MenuTrigger>
      <MenuContent className="w-[100vw] max-w-container rounded-primary bg-secondary p-[30px] text-black shadow-none">
        <span>some content here!</span>
      </MenuContent>
    </MenuRoot>
  );
}
