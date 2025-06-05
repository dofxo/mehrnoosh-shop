"use client";

import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";

const BottomSection = () => {
  const { languageData } = useAppSelector((state) => state.language);

  const itemsDetails = [
    {
      imgUrl: "/images/landing/footer/ticket.png",
      title: languageData.landing.footer_category_links.ticket,
    },
    {
      imgUrl: "/images/landing/footer/order.png",
      title: languageData.landing.footer_category_links.order_product,
    },
    {
      imgUrl: "/images/landing/footer/free-send.png",
      title: languageData.landing.footer_category_links.free_shipping,
    },
    {
      imgUrl: "/images/landing/footer/operator.png",
      title: languageData.landing.footer_category_links.operator,
    },
  ];
  return (
    <div className="icons flex items-center justify-between gap-5 rounded-[25px] bg-white p-[25px]">
      {itemsDetails.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-3">
          <div className="img flex h-[40px] w-[50px] items-center justify-center rounded-[50%] bg-white">
            <Image
              src={item.imgUrl}
              width={0}
              height={0}
              layout="responsive"
              alt={item.title}
            />
          </div>
          <h3 className="text-[13px] font-bold text-text-primary md:text-[16px]">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default BottomSection;
