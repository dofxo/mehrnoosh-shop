"use client";

import { useAppSelector } from "@/lib/hooks";

const RateRows = ({
  comments,
}: {
  comments: {
    cons: string[];
    name: string;
    pros: string[];
    rating: string;
    comment: string;
    created_at: string;
  }[];
}) => {
  const ratings: { [key: number]: number } = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  // Calculate the count of each rating
  comments.forEach(({ rating }) => {
    ratings[+rating]++;
  });

  // Transform the ratings object into an array for rendering
  const ratingsArray = Object.entries(ratings).map(([num, count]) => ({
    num: +num,
    rating: Math.round((count * 100) / comments.length), // Calculate percentage
  }));

  const { languageData } = useAppSelector((state) => state.language);

  return (
    <div className="ratings mt-[20px] flex flex-col gap-[10px]">
      {ratingsArray.map((item, idx) => (
        <div key={idx} className="flex items-center gap-[50px] font-bold">
          <div className="flex items-center gap-2">
            <span className="flex h-[25px] w-[25px] items-end justify-center rounded-[50%] bg-[#E6F1FF] text-primary">
              {item.num}
            </span>
            <span>{languageData.productSingle.rate}</span>
          </div>
          <div
            id="progress-bar"
            className="relative h-[10px] w-full rounded-[20px] bg-secondary"
          >
            <div
              className="rating-progress absolute h-full rounded-[inherit] bg-primary"
              style={{ width: `${item.rating}%` }}
            />
          </div>

          <span>{item.rating}%</span>
        </div>
      ))}
    </div>
  );
};

export default RateRows;
