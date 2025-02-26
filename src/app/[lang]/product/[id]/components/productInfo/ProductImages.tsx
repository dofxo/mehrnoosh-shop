"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppSelector } from "@/lib/hooks";
import {
  FavoriteBorderRounded,
  ShareRounded,
  CompareArrowsRounded,
  ContentCopyRounded,
  WhatsApp,
  Telegram,
} from "@mui/icons-material/";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const ProductImages = ({
  images,
  quantity,
  sold_amount,
  name,
  discount_price,
  price,
}: {
  images: string[];
  quantity: string;
  sold_amount: string;
  discount_price: string;
  price: string;
  name: { en: string; fa: string };
}) => {
  const sectionsClassName = "bg-[var(--background)] rounded-[25px] p-[30px]";

  const discountPercentage = Math.round(100 - (+discount_price * 100) / +price);
  const soldPercentage = (+sold_amount * 100) / +quantity;

  const productShareLink = `${process.env.NEXT_PUBLIC_BASE_URL}${usePathname()}`;
  const { currentLanguage, languageData } = useAppSelector(
    (state) => state.language,
  );

  const [shareLinkCopied, setCopiedLinkStatus] = useState(false);

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

  const socialsShare = [
    {
      icon: <WhatsApp />,
      shareLink: `whatsapp://send?text=${productShareLink}`,
    },
    {
      icon: <Telegram />,
      shareLink: `https://telegram.me/share/url?${productShareLink}`,
    },
  ];

  const actionButtonIcons = [
    {
      icon: (
        <Dialog>
          <DialogTrigger>
            <ShareRounded fontSize="small" />
          </DialogTrigger>
          <DialogContent
            onCloseAutoFocus={() => {
              setCopiedLinkStatus(false);
            }}
            className="shadcn-modal w-fit max-w-[unset] !rounded-[30px] bg-gray-300"
          >
            <DialogDescription className="mt-[50px] flex flex-col gap-[20px] text-[16px]">
              <div className="flex items-center gap-5">
                <div className="flex w-[120px] items-center justify-center rounded-[20px] bg-[#6D90B9] p-[7px] text-[15px] font-[500] text-white">
                  {languageData.productSingle.share}
                </div>
                <p className="font-[500] text-black">
                  {name[currentLanguage as "en" | "fa"]}
                </p>
              </div>
              <div className="socials-share flex items-center gap-3">
                {socialsShare.map((item, idx) => (
                  <a
                    target="_blank"
                    href={item.shareLink}
                    key={idx}
                    className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[50%] bg-[#f2f6fc] text-[#37506F]"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 self-end rounded-[15px] bg-white p-[10px] text-black">
                {productShareLink}
                <div
                  className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[50%] bg-primary p-1.5 transition"
                  onClick={() => {
                    navigator.clipboard.writeText(productShareLink);
                    setCopiedLinkStatus(true);

                    setTimeout(() => {
                      setCopiedLinkStatus(false);
                    }, 1500);
                  }}
                  style={{ backgroundColor: shareLinkCopied ? "green" : "" }}
                >
                  <ContentCopyRounded className="!text-[16px] text-white" />
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      ),
      tooltipContent: languageData.productSingle.share,
    },
    {
      icon: <FavoriteBorderRounded fontSize="small" />,
      tooltipContent: languageData.productSingle.like,
    },
    {
      icon: <CompareArrowsRounded fontSize="small" />,
      tooltipContent: languageData.productSingle.compare,
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
        <div className="p-[20px 30px 0 30px] flex items-center justify-between gap-[50px]">
          <div id="action-buttons" className="flex items-center gap-2">
            {actionButtonIcons.map((item, idx) => (
              <TooltipProvider key={idx} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[50%] bg-white transition hover:bg-primary hover:text-white">
                    {item.icon}
                  </TooltipTrigger>
                  <TooltipContent
                    className="p-[7px 0] flex w-[120px] items-center justify-center rounded-[20px] bg-[#6D90B9] text-[15px] font-[500]"
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
              className="primary-box-shadow p-[6px 15px] h-[35px] rounded-[90px] text-[15px]"
            >
              {discountPercentage}% {languageData.productSingle.discount}
            </Badge>
          )}
        </div>
        <div className="w-[310px] rounded-[25px] bg-white p-[15px]">
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
        <div className="bottom-slider w-[310px] rounded-[25px] bg-white p-[15px]">
          <Slider
            {...bottomSliderSettings}
            asNavFor={nav1 ?? undefined} // Link to the top slider
            ref={sliderRef2}
          >
            {
              // change direction of the images due to page direction.
              currentLanguage === "fa"
                ? images
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
          {soldPercentage}% {languageData.productSingle.amount_sold}
        </span>
      </div>
    </div>
  );
};

export default ProductImages;
