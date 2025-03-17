import { IProduct } from "../../Product";
import ActionButtons from "./ActionButtons";
import { langType } from "@/app/[lang]/langs";
import { Star } from "lucide-react";
import Image from "next/image";

const ProductCard = ({
  productData,
  languageData,
  currentLanguage,
}: {
  productData: IProduct;
  languageData: any;
  currentLanguage: string;
}) => {
  const scoreAverage =
    productData.comments.reduce(
      (total, comment) => total + +comment.rating,
      0,
    ) / productData.comments.length;
  return (
    <div className="flex w-[295px] flex-col items-center gap-[20px] rounded-[30px] bg-white p-[20px] shadow-[0_10px_50px_rgba(1,1,2,0.08)]">
      <Image
        width={0}
        height={0}
        layout="responsive"
        alt={productData.name[currentLanguage as langType]}
        src={productData.images[0]}
        className="!max-w-[205]"
      />
      <p className="text-[18px] font-[500]">
        {productData.name[currentLanguage as langType]}
      </p>

      <div className="flex w-full items-center justify-between gap-[10px]">
        <div className="price flex flex-col">
          <span className="flex items-center gap-2 text-[15px] text-[#324A66]">
            <span className="line-through">
              {Number(productData.price).toLocaleString("en")}
            </span>
            <span>{languageData.productSingle.tooman}</span>
          </span>
          <span className="flex items-center gap-2 text-[17px] font-[700] text-text-primary">
            <span className="text-primary">
              {Number(productData.discount_price).toLocaleString("en")}
            </span>
            <span>{languageData.productSingle.tooman}</span>
          </span>
        </div>
        <div
          className={`flex items-center gap-2 ${currentLanguage === "fa" ? "border-r" : "border-l"} ${currentLanguage === "fa" ? "pr-[20px]" : "pl-[20px]"}`}
        >
          <span className="flex items-center gap-1 font-[500]">
            <span>{scoreAverage || 0}</span>
            <span>{languageData.productSingle.of}</span> <span>5</span>
          </span>

          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#ffa5001f] text-[10px] text-orange-400">
            <Star size={15} />
          </div>
        </div>
      </div>
      <ActionButtons productData={productData} />
    </div>
  );
};

export default ProductCard;
