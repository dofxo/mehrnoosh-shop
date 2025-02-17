import { Badge } from "@/components/ui/badge";

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

  return (
    <div className="flex flex-col gap-[10px]">
      <div id="images" className={`${sectionsClassName}`}>
        <div className="p-[20px 30px 0 30px]">
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
