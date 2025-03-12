import type { CascadingMenuProps } from "./CascadingMenu.d"
import MegaMenuTrigger from "@/components/ui/mega-menu/mega-menu-trigger/MegaMenuTrigger";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { EllipsisVertical } from "lucide-react";

export default function MegaMenuCascadingMenu({ language }: CascadingMenuProps) {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <MegaMenuTrigger
          icon={<EllipsisVertical />}
          text={language["megaMenu"].cascadingMenu}
        />
      </MenuTrigger>
      <MenuContent>
        <span>some content here!</span>
      </MenuContent>
    </MenuRoot>
  );
}
