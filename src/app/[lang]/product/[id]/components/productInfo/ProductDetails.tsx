"use client";

import { useAppSelector } from "@/lib/hooks";

const ProductDetails = ({ name }: { name: { en: string; fa: string } }) => {
  const { currentLanguage } = useAppSelector((state) => state.language);

  return (
    <div className="p-[20px]">
      <h2 className="text-[20px] font-bold">
        {name[currentLanguage as "en" | "fa"]}
      </h2>
      <h5 className="py-[15px] font-[500] text-[#6D90B9]">
        {currentLanguage === "fa" && name.en}
      </h5>
    </div>
  );
};

export default ProductDetails;
