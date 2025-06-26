"use client";

import { IProduct } from "@/app/[lang]/product/[id]/Product";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { languageDataType } from "@/lib/features/language/languageSlice";
import { Eye, GitCompareArrows, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductListProps {
  products: IProduct[];
  currentLanguage: "en" | "fa";
  languageData: languageDataType;
}

export default function ProductList({
  products,
  currentLanguage,
  languageData,
}: ProductListProps) {
  return (
    <section className="mt-10 grid grid-cols-3 gap-8">
      {products.map((item, idx) => (
        <div className="rounded-primary bg-white px-5 py-4" key={idx}>
{/* Image and product name */}
<Link
  href={`/product/${item.id}`}
  className="flex flex-col items-center justify-center gap-2"
>
  <div className="h-[214px] w-[214px] flex items-center justify-center">
    <Image
      alt={item.name[currentLanguage]}
      src={item.images[0]}
      width={214}
      height={214}
      className="object-contain"
    />
  </div>
  <span className="font-semibold text-center">{item.name[currentLanguage]}</span>
</Link>

          {/* product price */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-col font-semibold">
              {Number(item.discount_price) !== 0 && (
                <span className="text-[15px] text-muted-foreground line-through">
                  {Number(item.price).toLocaleString()}
                </span>
              )}
              <div className="flex flex-row gap-1 text-[18px] font-bold">
                <span className="text-primary-700">
                  {Number(item.discount_price) === 0
                    ? Number(item.price).toLocaleString()
                    : Number(item.discount_price).toLocaleString()}
                </span>
                <span className="text-black">
                  {languageData.productSingle.tooman}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="h-[30px] w-[1px] bg-gray-200"></div>
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="flex items-center justify-center">
                  3 {languageData.shop.from} 5
                </span>
                <div className="flex h-[30px] w-[30px] flex-row items-center justify-center rounded-[100%] bg-yellow-100 p-2">
                  <Star color="orange" />
                </div>
              </div>
            </div>
          </div>

          {/* Product actions */}

          {/* "favorite": "favorite", */}
          {/* "compare": "compare", */}
          {/* "quick_watch": "quick watch", */}
          {/* "add_to_shopping_cart": "add to cart" */}
          <div className="mt-4 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-1">
              <TooltipProvider delayDuration={0}>
                {/* quick watch */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[100%] bg-gray-100 p-2 transition hover:bg-gray-hover hover:text-white">
                      <Eye size={16} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-hover">
                    <span>{languageData.shop.actions.quick_watch}</span>
                  </TooltipContent>
                </Tooltip>

                {/* Add to favorite */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[100%] bg-gray-100 p-2 transition hover:bg-gray-hover hover:text-white">
                      <Heart size={16} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-hover">
                    <span>{languageData.shop.actions.favorite}</span>
                  </TooltipContent>
                </Tooltip>

                {/* Compare */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[100%] bg-gray-100 p-2 transition hover:bg-gray-hover hover:text-white">
                      <GitCompareArrows size={16} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-hover">
                    <span>{languageData.shop.actions.compare}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div></div>
          </div>
        </div>
      ))}
    </section>
  );
}
