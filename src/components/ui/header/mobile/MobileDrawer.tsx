"use client";

import Logo from "../../../../../public/images/text-logo.png";
import DirectionWrapper from "@/components/ui/direction";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Image from "next/image";

export default function MobileDrawer() {
  return (
    <DirectionWrapper>
      <Sheet>
        <SheetTrigger>
          <div className="cursor-pointer rounded-primary bg-white p-4 transition hover:bg-primary hover:text-white">
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent>
          <div className="mt-8 flex items-center justify-center">
            <Image src={Logo} width={250} height={63} alt="logo" />
          </div>
        </SheetContent>
      </Sheet>
    </DirectionWrapper>
  );
}
