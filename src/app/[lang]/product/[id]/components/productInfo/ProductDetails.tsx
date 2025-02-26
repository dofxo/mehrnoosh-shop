"use client";

import { useAppSelector } from "@/lib/hooks";
import moment from "jalali-moment";
import {
  CalendarRange,
  Captions,
  List,
  MessageSquareText,
  ShoppingCart,
  Star,
} from "lucide-react";

const ProductDetails = ({
  name,
  comments,
  rating,
  properties,
  category,
  description,
  sold_amount,
  created_at,
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
  sold_amount: string;
  created_at: string;
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
  description: { en: string; fa: string };
  category: { en: string[]; fa: string[] };
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

  const categories = category[currentLanguage as "fa" | "en"].reduce(
    (p, c, index) => {
      return index > 0 ? p + `, ${c}` : p + c;
    },
    "",
  );

  const date =
    currentLanguage === "fa"
      ? moment(created_at).locale("fa").format(`YYYY/DD/MM`)
      : moment(created_at).format(`YYYY/DD/MM`);

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
            <Star size={15} />
          </div>
          <span className="flex items-center gap-1 font-[500]">
            {languageData.productSingle.rating}: <span>{scoreAverage}</span>
            <span>{languageData.productSingle.of}</span> <span>5</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#E6F1FF] text-[10px] text-[#0070FF]">
            <MessageSquareText size={15} />
          </div>
          <span className="flex items-center gap-1 font-[500]">
            <span>{comments.length}</span>
            <span>{languageData.productSingle.comment}</span>
          </span>
        </div>
      </div>
      {/* rate and comment info end */}

      {/* product properties */}
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div className="primary-box-shadow flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-primary text-white">
            <Captions size={25} />
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

      {/* category */}
      <div className="mt-[20px] flex items-center gap-2">
        <div className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-secondary text-[#3B5573]">
          <List size={20} />
        </div>
        <div className="">
          <span className="font-bold">
            {languageData.productSingle.category} :{" "}
            <span className="font-[500]">{categories}</span>
          </span>
        </div>
      </div>
      {/* category end */}

      {/* description */}
      <div className="mt-[30px] flex flex-col gap-5 rounded-[20px] p-[20px] shadow-[0_2px_25px_rgba(41,41,94,0.08)]">
        <div className="flex items-center gap-5">
          <div className="primary-box-shadow flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-primary text-white">
            <Captions size={25} />
          </div>
          <h5 className="text-[18px] font-[600]">
            {languageData.productSingle.description}
          </h5>
        </div>

        <p className="font-[500]">
          {description[currentLanguage as "fa" | "en"]}
        </p>
      </div>
      {/* description end */}

      {/* under description */}
      <div className="mt-[20px] flex items-center gap-2 font-[500]">
        <div className="flex items-center gap-2 rounded-[10px] bg-[#E6F1FF] px-[15px] py-[8px] text-[#0070FF]">
          <ShoppingCart size={20} />
          <span className="flex items-center gap-1">
            <span className="font-[500]">{sold_amount}</span>
            <span>{languageData.productSingle.sell}</span>
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-[10px] bg-[#f2f6fc] px-[15px] py-[8px]">
          <CalendarRange size={20} />
          <span className="flex items-center gap-1">
            <span>
              {languageData.productSingle.update}: {date}
            </span>
          </span>
        </div>
      </div>
      {/* under description end */}
    </div>
  );
};

export default ProductDetails;
