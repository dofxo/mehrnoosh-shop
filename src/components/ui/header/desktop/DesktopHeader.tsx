"use client";

import Logo from "../../../../../public/images/text-logo.png";
import DesktopHeaderEnd from "./DesktopHeaderEnd";
import Search from "@/components/ui/header/Search";
import Image from "next/image";

export default function DesktopHeader() {
  return (
    <section className="w-full bg-secondary p-[15px]">
      <div className="container">
        <div className="flex flex-row items-center justify-center">
          <div className="w-[20%] max-w-[200px] p-[10px]">
            <Image src={Logo} width={175} height={63} alt="logo" />
          </div>
          <Search />
          <DesktopHeaderEnd />
        </div>
      </div>
    </section>
  );
}
