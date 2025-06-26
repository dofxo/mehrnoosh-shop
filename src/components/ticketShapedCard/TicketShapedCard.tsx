"use client";

import tailwindConfig from "../../../tailwind.config";
import DiscountIndicator from "./DiscountIndicator";
import Divider from "./Divider";
import { getCategoryData } from "@/helpers/getCategoryData";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image.js";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

const TicketShapedCard = ({ position }: { position: string }) => {
  const primaryColor = fullConfig.theme.colors.primary.DEFAULT;
  const bgColor = fullConfig.theme.colors.background.DEFAULT;

  const { languageData, currentLanguage } = useAppSelector(
    (store) => store.language,
  );

  const categoryData = useRef<any[]>([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // decide on section position to show related data
  const category =
    position === "top"
      ? currentLanguage === "fa"
        ? "موبایل و تبلت"
        : "phone and tablet"
      : currentLanguage === "fa"
        ? "سرخ کن"
        : "fry";

  // get data of the categories
  getCategoryData(category).then((data) => (categoryData.current = data));

  return (
    <section
      id="ticket-shaped-card"
      style={{
        backgroundColor: position === "top" ? "#fff" : primaryColor,
        direction: "rtl",
      }}
      className={`relative flex grid-cols-2 flex-col gap-5 overflow-hidden rounded-[25px] px-[40px] py-[25px] lg:grid lg:gap-0 ${position === "top" ? "top-pos" : "bottom-pos"}`}
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
        {categoryData.current.length > 0 ? (
          <Slider {...settings}>
            {categoryData.current.map((item, idx) => (
              <Link
                href={`/product/${item.id}`}
                className="group !flex !items-center !justify-center rounded-[50%] p-[10px]"
                key={idx}
              >
                <img
                  className={`w-[100px] p-[10px] transition group-hover:scale-110 ${position === "bottom" ? "rounded-[50%]" : ""}`}
                  src={item.images[0]}
                />
              </Link>
            ))}
          </Slider>
        ) : (
          <span className="small-loader" />
        )}
      </div>
    </section>
  );
};

export default TicketShapedCard;
