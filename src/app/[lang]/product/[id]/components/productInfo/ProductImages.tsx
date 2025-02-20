"use client";

import { Badge } from "@/components/ui/badge";
import {
  FavoriteBorderRounded,
  ShareRounded,
  CompareArrowsRounded,
} from "@mui/icons-material/";

import Slider from "react-slick";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProductImages = ({
  images,
  quantity,
  sold_amount,
  discount_price,
  price,
}: {
  images: string[];
  quantity: string;
  sold_amount: string;
  discount_price: string;
  price: string;
}) => {
  const sectionsClassName = "bg-[var(--background)] rounded-[25px] p-[30px]";

  const discountPercentage = Math.round(100 - (+discount_price * 100) / +price);
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
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    swipeToSlide: true,
  };

  //TODO: replace all texts with lang file

  const actionButtonIcons = [
    {
      icon: <ShareRounded fontSize="small" />,
      tooltipContent: "اشتراک گذاری",
    },
    {
      icon: <FavoriteBorderRounded fontSize="small" />,
      tooltipContent: "علاقه مندی",
    },
    {
      icon: <CompareArrowsRounded fontSize="small" />,
      tooltipContent: "مقایسه",
    },
  ];

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
        <div className="p-[20px 30px 0 30px] flex gap-[50px] items-center justify-between">
          <div id="action-buttons" className="flex gap-2 items-center">
            {actionButtonIcons.map((item, idx) => (
              <TooltipProvider key={idx} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger className="bg-white w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition hover:text-white">
                    {item.icon}
                  </TooltipTrigger>
                  <TooltipContent
                    className="rounded-[20px] font-[500] text-[15px] bg-[#6D90B9] w-[120px] p-[7px 0] flex justify-center items-center"
                    align="start"
                  >
                    {item.tooltipContent}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          {+discount_price > 0 && (
            <Badge
              variant="default"
              className="primary-box-shadow text-[15px] p-[6px 15px] rounded-[90px] h-[35px]"
            >
              {discountPercentage}% تخفیف
            </Badge>
          )}
        </div>
        <div className="bg-white rounded-[25px] p-[15px] w-[310px]">
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
        <div className="bottom-slider bg-white rounded-[25px] p-[15px] w-[310px]">
          <Slider
            {...bottomSliderSettings}
            asNavFor={nav1 ?? undefined} // Link to the top slider
            ref={sliderRef2}
          >
            {images.reverse().map((imgSrc, idx) => (
              <Image
                src={imgSrc}
                width={0}
                height={0}
                alt="picture"
                key={idx}
                layout="responsive"
                className="rounded-[8px] cursor-pointer"
              />
            ))}
          </Slider>
        </div>
      </div>
      <div id="sold_amount" className={`${sectionsClassName}`}></div>
    </div>
  );
};

export default ProductImages;
