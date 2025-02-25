"use client";

import { useAppSelector } from "@/lib/hooks";
import {
  StarBorderRounded,
  CommentRounded,
  ArticleRounded,
} from "@mui/icons-material/";

const ProductDetails = ({
  name,
  comments,
  rating,
  properties,
}: {
  name: { en: string; fa: string };
  comments: {
    cons: string[];
    name: string;
    pros: string[];
    rating: string;
    comment: string;
    created_at: string;
  }[];
  properties: {
    color: {
      en: string[];
      fa: string[];
    };
    brand: {
      en: string;
      fa: string;
    };
  };
  rating: string[];
}) => {
  const { currentLanguage, languageData } = useAppSelector(
    (state) => state.language,
  );

  const scoreAverage = (
    rating
      .map(Number) // Convert each string to a number
      .reduce((p, c) => p + c, 0) / rating.length
  ).toFixed(1);

  const propertiesToUse = [
    ...properties.color[currentLanguage as "fa" | "en"],
    properties.brand[currentLanguage as "fa" | "en"],
  ];

  return (
    <div className="p-[20px]">
      {/* product title */}
      <h2 className="text-[20px] font-bold">
        {name[currentLanguage as "en" | "fa"]}
      </h2>
      <h5 className="py-[15px] font-[500] text-[#6D90B9]">
        {currentLanguage === "fa" && name.en}
      </h5>
      {/* product title end */}

      {/* rate and comment info */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#ffa5001f] text-[10px] text-orange-400">
            <StarBorderRounded fontSize="small" />
          </div>
          <span className="flex items-center gap-1 font-[500]">
            {languageData.productSingle.rating}: <span>{scoreAverage}</span>
            <span>{languageData.productSingle.of}</span> <span>5</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#E6F1FF] text-[10px] text-[#0070FF]">
            <CommentRounded fontSize="small" className="!w-[16px]" />
          </div>
          <span className="flex items-center gap-1 font-[500]">
            {comments.length} {languageData.productSingle.comment}
          </span>
        </div>
      </div>
      {/* rate and comment info end */}

      {/* product properties */}
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div className="primary-box-shadow flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-primary text-white">
            <ArticleRounded className="!w-[20px]" />
          </div>
          <h5 className="text-[18px] font-[600]">
            {languageData.productSingle.properties}
          </h5>
        </div>
        <div className="flex items-center gap-2">
          {propertiesToUse.map((item, idx) => (
            <div
              className="rounded-[90px] bg-[#f2f6fc] px-[15px] py-[6px] font-[500]"
              key={idx}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {/* product properties end */}
    </div>
  );
};

export default ProductDetails;
