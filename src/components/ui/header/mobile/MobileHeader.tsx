"use client";

import MobileDrawer from "@/components/ui/header/mobile/MobileDrawer";
import Search from "@/components/ui/header/search/Search";

export default function MobileHeader() {
  return (
    <section className="block w-full bg-secondary lg:hidden">
      <div className="container">
        <div className="flex flex-row items-center justify-between">
          <div className="flex w-[20%] max-w-[200px] flex-row items-center justify-between gap-1 p-[10px]">
            <MobileDrawer />
          </div>
          <Search />
        </div>
      </div>
    </section>
  );
}
