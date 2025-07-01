// ProductActions.tsx
"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { languageDataType } from "@/lib/features/language/languageSlice";
import { manageWishList } from "@/utils/wishList/manageWishList";
import { Eye, GitCompareArrows, Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

interface ProductActionsProps {
  languageData: languageDataType;
  discountAmount: number;
  productId: number;
  isInWishList?: boolean;
  onWishListChange?: () => void;
}

export default function ProductActions({
  languageData,
  discountAmount,
  productId,
  isInWishList = false,
  onWishListChange,
}: ProductActionsProps) {
  const [inWishList, setInWishList] = useState(isInWishList);

  useEffect(() => {
    setInWishList(isInWishList);
  }, [isInWishList]);

  const toggleWishList = () => {
    manageWishList(productId);
    setInWishList(!inWishList);
    onWishListChange?.();
  };

  return (
    <div className="mt-4 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-1">
        <TooltipProvider delayDuration={0}>
          {/* Quick Watch */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[100%] bg-gray-100 p-2 transition hover:bg-gray-hover hover:text-white">
                <Eye size={18} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-hover">
              <span>{languageData.shop.actions.quick_watch}</span>
            </TooltipContent>
          </Tooltip>

          {/* Add to favorite */}
          <Tooltip>
            <TooltipTrigger asChild onClick={toggleWishList}>
              <div
                className={`flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[100%] bg-gray-100 p-2 transition hover:bg-gray-hover hover:text-white ${
                  inWishList ? "text-red-500" : ""
                }`}
              >
                {inWishList ? <Heart size={18} color="red" /> : <Heart size={18} />}
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-hover">
              <span>{languageData.shop.actions.favorite}</span>
            </TooltipContent>
          </Tooltip>

          {/* Compare */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[100%] bg-gray-100 p-2 transition hover:bg-gray-hover hover:text-white">
                <GitCompareArrows size={18} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-hover">
              <span>{languageData.shop.actions.compare}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {discountAmount !== 100 && (
          <div className="mt-[2px] flex h-[35px] items-center justify-center rounded-primary bg-primary-700 px-[15px] py-[7px] font-semibold text-white shadow-products-action">
            <span className="mt-[3.3px]">{discountAmount}%</span>
          </div>
        )}
      </div>

      <div>
        <TooltipProvider delayDuration={0}>
          {/* Add to cart */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[100%] bg-gray-100 p-2 transition hover:bg-gray-hover hover:text-white">
                <ShoppingCart size={18} />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-hover">
              <span>{languageData.shop.actions.add_to_shopping_cart}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
