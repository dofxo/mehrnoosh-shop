"use client";

import { useAppSelector } from "@/lib/hooks";

const ProductPrice = ({
  price,
  discount_price,
}: {
  price: string;
  discount_price: string;
}) => {
  const { languageData } = useAppSelector((state) => state.language);

  return (
    <div className="h-fit min-w-[310px] rounded-[20px] bg-background p-[25px]">
      {/* price */}
      <div className="price flex flex-col">
        <span className="flex items-center gap-2 text-[15px] text-[#324A66]">
          <span className="line-through">
            {Number(price).toLocaleString("en")}
          </span>
          <span>{languageData.productSingle.tooman}</span>
        </span>
        <span className="flex items-center gap-2 text-[20px] font-[700] text-text-primary">
          <span className="text-primary">
            {Number(discount_price).toLocaleString("en")}
          </span>
          <span>{languageData.productSingle.tooman}</span>
        </span>
      </div>
      {/* price end */}
    </div>
  );
};

export default ProductPrice;
