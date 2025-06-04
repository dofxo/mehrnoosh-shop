"use client";

import { useAppSelector } from "@/lib/hooks";

const FooterTitle = () => {
  const { languageData } = useAppSelector((state) => state.language);
  return (
    <div className="section-title absolute right-10 top-[-20px] rounded-[90px] bg-[#F2F6FC] px-[24px] py-[12px] text-[16px] font-bold">
      {languageData.landing.footer_section_title}
    </div>
  );
};

export default FooterTitle;
