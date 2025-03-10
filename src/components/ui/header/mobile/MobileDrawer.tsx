"use client";

import Logo from "../../../../../public/images/text-logo.png";
import DirectionWrapper from "@/components/ui/direction";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarMenuItems from "@/components/ui/sidebar/sidebar";
import { useAppSelector } from "@/lib/hooks";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function MobileDrawer() {
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage,
  );

  return (
    <DirectionWrapper>
      <Sheet>
        <SheetTrigger>
          <div className="cursor-pointer rounded-primary bg-white p-4 transition hover:bg-primary hover:text-white">
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent
          className="flex flex-col"
          side={currentLanguage === "en" ? "left" : "right"}
        >
          <div className="mt-8 flex items-center justify-center !overflow-hidden">
            <Image src={Logo} width={250} height={63} alt="logo" />
          </div>

          <SidebarMenuItems />
        </SheetContent>
      </Sheet>
    </DirectionWrapper>
  );
}
