import type { LaptopAndComputerProps } from "./LaptopAndComputer.d";
import MegaMenuTrigger from "@/components/ui/mega-menu/mega-menu-trigger/MegaMenuTrigger";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { Computer } from "lucide-react";

export default function MegaMenuLaptopAndComputer({ language }: LaptopAndComputerProps) {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <MegaMenuTrigger
          icon={<Computer />}
          text={language["megaMenu"].laptop_and_computer}
        />
      </MenuTrigger>
      <MenuContent>
        <span>some content here!</span>
      </MenuContent>
    </MenuRoot>
  );
}
