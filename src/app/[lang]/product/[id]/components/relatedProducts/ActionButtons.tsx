"use client";

import { IProduct } from "../../Product";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppSelector } from "@/lib/hooks";
import { Eye, GitCompareArrows, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const ActionButtons = ({ productData }: { productData: IProduct }) => {
  const { currentLanguage, languageData } = useAppSelector(
    (state) => state.language,
  );
  const router = useRouter();

  const actionButtonIcons = [
    {
      icon: (
        <Eye
          size={15}
          onClick={() => router.push(`/product/${productData.id}`)}
        />
      ),
      tooltipContent: languageData.productSingle.view_product,
    },

    {
      icon: <Heart size={15} />,
      tooltipContent: languageData.productSingle.like,
    },
    {
      icon: <GitCompareArrows size={15} />,
      tooltipContent: languageData.productSingle.compare,
    },
    {
      isNotActionButton: true,
      tooltipContent: 43,
    },

    {
      icon: <ShoppingCart size={15} />,
      tooltipContent: languageData.productSingle.add_to_shopping_cart,
    },
  ];

  return (
    <div id="action-buttons" className="flex items-center gap-2">
      {actionButtonIcons.map((item, idx) => {
        if (!item.isNotActionButton) {
          return (
            <TooltipProvider key={idx} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[50%] bg-secondary transition hover:bg-primary hover:text-white">
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
          );
        } else {
          return (
            <div
              key={idx}
              className={`flex h-[35px] items-center justify-center gap-1 rounded-[90px] bg-primary px-[15px] py-[7px] text-[16px] font-bold text-white ${currentLanguage === "fa" ? "ml-[30px]" : "mr-[30px]"}`}
            >
              <span>%</span> <span>{item.tooltipContent}</span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ActionButtons;
