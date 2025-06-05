"use client";

import { useAppSelector } from "@/lib/hooks";
import { GoLocation } from "react-icons/go";

const Location = () => {
  const { languageData } = useAppSelector((state) => state.language);
  return (
    <div className="location flex items-center gap-2">
      <div className="rounded-[50%] bg-primary p-[10px] text-white">
        <GoLocation size={25} />
      </div>
      <span className="text-text-primary md:text-[20px]">
        {languageData.landing.footer_address}
      </span>
    </div>
  );
};

export default Location;
