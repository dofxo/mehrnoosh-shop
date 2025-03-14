import { IProduct } from "../../Product";
import { langType } from "@/app/[lang]/langs";
import Image from "next/image";

const ProductCard = ({
  productData,
  currentLanguage,
  languageData,
}: {
  productData: IProduct;
  currentLanguage: string;
  languageData: any;
}) => {
  return (
    <div className="flex max-w-[295px] flex-col items-center gap-10 rounded-[30px] bg-white p-[20px] shadow-[0_10px_50px_rgba(1,1,2,0.08)]">
      <Image
        src={productData.images[0]}
        alt={productData.name[currentLanguage as langType]}
        width={0}
        height={0}
        layout="responsive"
        className="!max-w-[205px]"
      />
      <p className="text-[16px] font-[500]">
        {" "}
        {productData.name[currentLanguage as langType]}
      </p>

      <div className="flex items-center">
        <div className="price flex flex-col">
          <span className="flex items-center gap-2 text-[15px] text-[#324A66]">
            <span className="line-through">
              {Number(productData.price).toLocaleString("en")}
            </span>
            <span>{languageData.productSingle.tooman}</span>
          </span>
          <span className="flex items-center gap-2 text-[18px] font-[700] text-text-primary">
            <span className="text-primary">
              {Number(productData.discount_price).toLocaleString("en")}
            </span>
            <span>{languageData.productSingle.tooman}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
