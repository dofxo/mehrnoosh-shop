"use client";

import tailwindConfig from "../../tailwind.config.ts";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image.js";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

const TicketShapedCard = ({ position }: { position: string }) => {
  const primaryColor = fullConfig.theme.colors.primary.DEFAULT;
  const bgColor = fullConfig.theme.colors.background.DEFAULT;

  const { languageData } = useAppSelector((store) => store.language);

  return (
    <section
      style={{ backgroundColor: position === "top" ? "#fff" : primaryColor }}
      className="relative overflow-hidden rounded-[25px] px-[40px] py-[25px]"
    >
      <div
        className="bottom-right-border absolute bottom-[20px] right-[-1.5px] h-[35px] w-[5px] rounded-[20px]"
        style={{
          backgroundColor: position === "top" ? primaryColor : "#fff",
          boxShadow: `0px 5px 15px ${primaryColor}`,
        }}
      />
      <div className="divier absolute bottom-0 right-[40%] top-0 w-[50px]">
        <div
          className="absolute top-[-25px] z-10 h-[50px] w-[50px] rounded-[50%]"
          style={{ backgroundColor: bgColor }}
        />
        <div
          className="absolute bottom-[-25px] z-10 h-[50px] w-[50px] rounded-[50%]"
          style={{ backgroundColor: bgColor }}
        />
        <div className="absolute bottom-0 left-0 top-0 w-[25px] border-r border-dashed" />
      </div>
      <div className="description flex flex-col gap-[30px]">
        <div className="title flex items-center gap-5">
          <div className="image flex items-center justify-center rounded-[50%] bg-white p-2">
            <Image
              width={0}
              height={0}
              src={
                position === "top"
                  ? "/images/landing/phone-category.webp"
                  : "/images/landing/fry-category.webp"
              }
              layout="responsive"
              alt="ticket-thumbnail"
              className="max-w-[50px]"
            />
          </div>
          <div className="title-text">
            <h3
              className="text-[20px] font-bold"
              style={{ color: position === "bottom" ? "#fff" : "" }}
            >
              {position === "top"
                ? languageData.landing.firsts_in_iran
                : languageData.landing.best_products_in_iran}
            </h3>
            <h4 style={{ color: position === "bottom" ? "#fff" : "" }}>
              {position === "top"
                ? languageData.landing.ask_best_from_us
                : languageData.landing.discount_only_today}
            </h4>
          </div>
        </div>
        <span
          className="font-bold"
          style={{ color: position === "bottom" ? "#fff" : primaryColor }}
        >
          {languageData.landing.up_to_90_discount}
        </span>
      </div>
      <div className="products"></div>
    </section>
  );
};

export default TicketShapedCard;
