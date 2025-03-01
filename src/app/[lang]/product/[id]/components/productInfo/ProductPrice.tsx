"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/lib/hooks";
import { CircleCheck, ShoppingCart, Truck } from "lucide-react";
import { useState } from "react";

const ProductPrice = ({
  price,
  discount_price,
}: {
  price: string;
  discount_price: string;
}) => {
  const { languageData } = useAppSelector((state) => state.language);
  const [itemCount, setItemCount] = useState<number>(0);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Ensure the value is a number and not negative
    const numericValue = Math.max(0, Number(newValue));
    setItemCount(numericValue);
  };

  // Handle increment
  const increment = () => {
    setItemCount((prev) => prev + 1);
  };

  // Handle decrement
  const decrement = () => {
    setItemCount((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="flex h-fit min-w-[310px] flex-col gap-4 rounded-[20px] bg-background p-[25px]">
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

      {/* add to shopping cart */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-[10px] border bg-white px-2 py-1">
          <span onClick={decrement} className="cursor-pointer">
            -
          </span>
          <Input
            type="number"
            className="border-none p-[0] text-center shadow-none"
            value={itemCount}
            onChange={handleChange}
            min={0}
          />
          <span onClick={increment} className="cursor-pointer">
            +
          </span>
        </div>

        <Button className="flex w-full items-center p-6 text-[18px] font-[400]">
          <ShoppingCart color="white" />
          <span>{languageData.productSingle.add_to_shopping_cart}</span>
        </Button>
      </div>
      {/* add to shopping cart end */}

      {/* product promotion */}
      <div className="mt-[20px] flex flex-col gap-3 font-[600]">
        <div className="flex items-center gap-2">
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-primary">
            <CircleCheck color="white" size={20} />
          </div>
          <span>{languageData.productSingle.return_policy}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-white">
            <Truck color="#3B5573" size={20} />
          </div>

          <span>{languageData.productSingle.authenticity_guarantee}</span>
        </div>
      </div>
      {/* product promotion end */}
    </div>
  );
};

export default ProductPrice;
