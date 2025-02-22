"use client";

import Logo from "../../../../../public/images/logo.png";
import Search from "@/components/ui/header/Search";
import Image from "next/image";

export default function MobileHeader() {
  return (
    <section className="lg:hidden block w-full bg-secondary">
      <div className="container">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[20%] max-w-[200px] p-[10px]">
            <Image src={Logo} width={63} height={63} alt="logo" />
          </div>
          <Search />
        </div>
      </div>
    </section>
  );
}
