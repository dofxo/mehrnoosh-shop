"use client";

import { IProduct } from "../../Product";
import RadialPercentageChart from "./percentage/RatingChart";
import RatingStatics from "./percentage/RatingStatics";
import RateRows from "./progress/RateRows";
import Title from "./progress/Title";
import { useAppSelector } from "@/lib/hooks";

const RatingDetails = () => {
  const { comments }: IProduct = useAppSelector(
    (state: any) => state.productSingle.productData,
  );

  const totalRatingPercentage =
    Math.round(
      ((comments.reduce((total, comment) => total + +comment.rating, 0) /
        comments.length) *
        100) /
        5,
    ) || 0;

  return (
    <section className="flex gap-5 max-[930px]:flex-col">
      {/* details */}
      <div className="relative w-[60%] rounded-[30px] bg-white p-[30px] max-[930px]:w-full">
        <Title />
        <RateRows comments={comments} />
      </div>
      {/* percentage */}
      <div className="flex w-[40%] items-center justify-start gap-2 rounded-[30px] bg-white p-[30px] max-[930px]:w-full min-[500px]:gap-[50px]">
        <RadialPercentageChart totalRatingPercentage={totalRatingPercentage} />
        <RatingStatics
          totalComments={comments.length}
          totalRatingPercentage={totalRatingPercentage}
        />
      </div>
    </section>
  );
};

export default RatingDetails;
