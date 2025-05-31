"use client";

import Logo from "../../../../../public/images/text-logo.png";
import DesktopHeaderEnd from "./DesktopHeaderEnd";
import Search from "@/components/ui/header/search/Search";
import Image from "next/image";
import Link from "next/link";

export default function DesktopHeader() {
  return (
    <section className="hidden w-full bg-secondary p-[15px] lg:block">
      <div className="container">
        <div className="flex flex-row items-center justify-center">
          <Link href="/" className="w-[20%] max-w-[200px] p-[10px]">
            <Image src={Logo} width={175} height={63} alt="logo" />
          </Link>
          <Search />
          <DesktopHeaderEnd />
        </div>
      </div>
    </section>
  );
}
