"use client";

import { useAppSelector } from "@/lib/hooks";

const FooterTitle = () => {
  const { languageData, currentLanguage } = useAppSelector(
    (state) => state.language,
  );
  return (
    <div
      className={`section-title absolute ${currentLanguage === "fa" ? "right-10" : "left-10"} top-[-20px] rounded-[90px] bg-[#E4E9F2] px-[24px] py-[12px] text-[16px] font-bold`}
    >
      {languageData.landing.footer_section_title}
    </div>
  );
};

export default FooterTitle;
