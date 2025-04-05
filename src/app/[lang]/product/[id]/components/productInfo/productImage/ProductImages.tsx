"use client";

import { IProduct } from "../../../Product";
import ActionButtons from "./ActionButtons";
import { Badge } from "@/components/ui/badge";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const ProductImages = () => {
  const { images, quantity, sold_amount, price, discount_price } =
    useAppSelector((state) => state.productSingle.productData as IProduct);

  const sectionsClassName = "bg-background rounded-[25px] p-[30px]";

  const discountPercentage = Math.round(100 - (+discount_price * 100) / +price);
  const soldPercentage = Math.round((+sold_amount * 100) / +quantity);

  const { currentLanguage, languageData } = useAppSelector(
    (state) => state.language,
  );

  const topSliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const bottomSliderSettings = {
    className: "center",
    infinite: false,
    centerPadding: "0",
    slidesToShow: 3.5,
    speed: 500,
    focusOnSelect: true,
    swipeToSlide: true,
  };

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);

  return (
    <div className="flex flex-col gap-[10px]">
      <div
        id="images"
        className={`${sectionsClassName} flex flex-col gap-[20px]`}
      >
        <div className="p-[20px 30px 0 30px] flex items-center justify-between gap-[50px]">
          <ActionButtons />

          {+discount_price > 0 && (
            <Badge
              variant="default"
              className="primary-box-shadow h-[35px] rounded-[90px] px-[15px] py-[6px] text-[15px] max-[930px]:h-[50px]"
            >
              {discountPercentage}% {languageData.productSingle.discount}
            </Badge>
          )}
        </div>
        <div className="w-[310px] rounded-[25px] bg-white p-[15px] max-[930px]:w-full">
          <Slider
            {...topSliderSettings}
            asNavFor={nav2 ?? undefined} // Link to the bottom slider
            ref={sliderRef1}
          >
            {images.map((imgSrc, idx) => (
              <Image
                src={imgSrc}
                width={0}
                height={0}
                alt="picture"
                key={idx}
                layout="responsive"
              />
            ))}
          </Slider>
        </div>
        <div className="bottom-slider w-[310px] rounded-[25px] bg-white p-[15px] max-[930px]:w-full">
          <Slider
            {...bottomSliderSettings}
            asNavFor={nav1 ?? undefined} // Link to the top slider
            ref={sliderRef2}
          >
            {
              // change direction of the images due to page direction.
              currentLanguage === "fa"
                ? [...images]
                    .reverse()
                    .map((imgSrc, idx) => (
                      <Image
                        src={imgSrc}
                        width={0}
                        height={0}
                        alt="picture"
                        key={idx}
                        layout="responsive"
                        className="cursor-pointer rounded-[8px]"
                      />
                    ))
                : images.map((imgSrc, idx) => (
                    <Image
                      src={imgSrc}
                      width={0}
                      height={0}
                      alt="picture"
                      key={idx}
                      layout="responsive"
                      className="cursor-pointer rounded-[8px]"
                    />
                  ))
            }
          </Slider>
        </div>
      </div>
      <div
        id="sold_amount"
        className={`${sectionsClassName} flex flex-col gap-[20px]`}
      >
        <div
          id="progress-bar"
          className="primary-box-shadow relative h-[10px] rounded-[20px] bg-white"
        >
          <div
            className="absolute h-full rounded-[inherit] bg-primary"
            style={{ width: `${soldPercentage}%` }}
          />
        </div>

        <span className="font-[500]">
          {Math.round(soldPercentage)}% {languageData.productSingle.amount_sold}
        </span>
      </div>
    </div>
  );
};

export default ProductImages;
