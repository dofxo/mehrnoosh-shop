"use client";

import { useAppSelector } from "@/lib/hooks";

const RatingStatics = ({
  totalRatingPercentage,
  totalComments,
}: {
  totalRatingPercentage: number;
  totalComments: number;
}) => {
  const { languageData } = useAppSelector((state) => state.language);

  return (
    <div className="flex flex-col gap-2">
      <span className="t flex items-center gap-1 text-[20px] font-bold">
        <span className="text-primary">{totalRatingPercentage}%</span>
        <span>{languageData.productSingle.product_satisfaction}</span>
      </span>
      <span className="flex items-center gap-1 text-[15px]">
        <span>{languageData.productSingle.statistic_from_this}</span>
        <span className="font-bold">{totalComments}</span>
        <span>{languageData.productSingle.from_comment}</span>
      </span>
    </div>
  );
};

export default RatingStatics;
