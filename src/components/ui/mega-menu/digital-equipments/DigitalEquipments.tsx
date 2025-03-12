import type { DigitalEquipmentsProps } from "./DigitalEquipments.d";
import MegaMenuTrigger from "@/components/ui/mega-menu/mega-menu-trigger/MegaMenuTrigger";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { Laptop } from "lucide-react";

export default function MegaMenuDigitalEquipments({ language }: DigitalEquipmentsProps) {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <MegaMenuTrigger
          icon={<Laptop />}
          text={language["megaMenu"].digitalEquipments}
        />
      </MenuTrigger>
      <MenuContent>
        <span>some content here!</span>
      </MenuContent>
    </MenuRoot>
  );
}
