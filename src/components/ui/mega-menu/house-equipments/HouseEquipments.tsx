import type { HouseEquipmentProps } from "./HouseEquipments.d";
import MegaMenuTrigger from "@/components/ui/mega-menu/mega-menu-trigger/MegaMenuTrigger";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { Refrigerator } from "lucide-react";

export default function MegaMenuHouseEquipments({
  language,
}: HouseEquipmentProps) {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <MegaMenuTrigger
          icon={<Refrigerator />}
          text={language["megaMenu"].houseEquipments}
        />
      </MenuTrigger>
      <MenuContent>
        <span>some content here!</span>
      </MenuContent>
    </MenuRoot>
  );
}
