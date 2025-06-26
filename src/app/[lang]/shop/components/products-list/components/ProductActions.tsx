"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { languageDataType } from "@/lib/features/language/languageSlice";
import { Eye, GitCompareArrows, Heart } from "lucide-react";

interface ProductActionsProps {
	languageData: languageDataType;
	discountAmount:number;
}

export default function ProductActions({ languageData,discountAmount }: ProductActionsProps) {
	console.log(discountAmount)
  return (
    <div className="mt-4 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-1">
        <TooltipProvider delayDuration={0}>
          {/* quick watch */}
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
            <TooltipTrigger asChild>
              <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[100%] bg-gray-100 p-2 transition hover:bg-gray-hover hover:text-white">
                <Heart size={18} />
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

				<div className="flex items-center justify-center font-semibold shadow-products-action mt-[2px] bg-primary-700 text-white rounded-primary h-[35px] px-[15px] py-[7px]"><span className="mt-[3.3px]" >{discountAmount}%</span></div>
				)}
      </div>
      <div></div>
    </div>
  );
}
