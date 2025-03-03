"use client";

import { useAppSelector } from "@/lib/hooks";

const Title = () => {
  const { languageData } = useAppSelector((state) => state.language);

  return (
    <div className="primary-box-shadow absolute top-[-20px] rounded-[90px] bg-primary px-[20px] py-[8px] font-bold text-white">
      {languageData.productSingle.rating_details}
    </div>
  );
};

export default Title;
