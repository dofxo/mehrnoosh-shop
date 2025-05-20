"use client";

import tailwindConfig from "../../../tailwind.config.ts";
import DiscountIndicator from "./DiscountIndicator";
import Divider from "./Divider.tsx";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image.js";
import Slider from "react-slick";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

const TicketShapedCard = ({ position }: { position: string }) => {
  const primaryColor = fullConfig.theme.colors.primary.DEFAULT;
  const bgColor = fullConfig.theme.colors.background.DEFAULT;

  const { languageData } = useAppSelector((store) => store.language);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      style={{ backgroundColor: position === "top" ? "#fff" : primaryColor }}
      className="relative grid grid-cols-2 overflow-hidden rounded-[25px] px-[40px] py-[25px]"
    >
      <DiscountIndicator primaryColor={primaryColor} position={position} />
      <Divider bgColor={bgColor} />

      {/*Description*/}
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

      {/*Products*/}
      <div className="products">
        <Slider {...settings}>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </Slider>
      </div>
    </section>
  );
};

export default TicketShapedCard;
