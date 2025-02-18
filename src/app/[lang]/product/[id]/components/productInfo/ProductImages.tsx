import { Badge } from "@/components/ui/badge";
import {
  FavoriteBorderRounded,
  ShareRounded,
  CompareArrowsRounded,
} from "@mui/icons-material/";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

  return (
    <div className="flex flex-col gap-[10px]">
      <div id="images" className={`${sectionsClassName}`}>
        <div className="p-[20px 30px 0 30px] flex gap-[50px] items-center">
          <div id="action-buttons" className="flex gap-2 items-center">
            {actionButtonIcons.map((item, idx) => (
              <TooltipProvider key={idx} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger className="bg-white w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition hover:text-white">
                    {item.icon}
                  </TooltipTrigger>
                  <TooltipContent
                    className="rounded-[20px] text-[15px] bg-[#6D90B9] w-[120px] p-[7px 0] flex justify-center items-center"
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
      </div>
      <div id="sold_amount" className={`${sectionsClassName}`}></div>
    </div>
  );
};

export default ProductImages;
