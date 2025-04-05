import { langType } from "../../langs";
import { IProduct } from "../../product/[id]/Product";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hooks";
import { X } from "lucide-react";
import Image from "next/image";

const WishListProduct = ({ productData }: { productData: IProduct }) => {
  const { languageData, currentLanguage } = useAppSelector(
    (state) => state.language,
  );

  return (
    <div className="flex items-center justify-between gap-3 border-b border-background px-[10px] py-[25px] max-[800px]:flex-col">
      <div className="flex min-h-[30px] min-w-[30px] cursor-pointer items-center justify-center rounded-[50%] bg-[#ffd0d0] max-[800px]:self-start">
        <X color="red" size={15} />
      </div>
      <div className="min-h-[60px] min-w-[60px] items-center justify-center !rounded-[50%] bg-white shadow-[0_2px_25px_#29295e14] max-[800px]:flex min-[800px]:hidden">
        <Image
          src={productData.images[0]}
          width={0}
          height={0}
          layout="responsive"
          alt={productData.name[currentLanguage as langType]}
          className="!w-[35px]"
        />
      </div>

      <div className="flex items-center gap-5 max-[800px]:flex-col">
        <h3 className="font-bold">
          {productData.name[currentLanguage as langType]}
        </h3>

        <div className="flex min-h-[60px] min-w-[60px] items-center justify-center !rounded-[50%] bg-white shadow-[0_2px_25px_#29295e14] max-[800px]:hidden">
          <Image
            src={productData.images[0]}
            width={0}
            height={0}
            layout="responsive"
            alt={productData.name[currentLanguage as langType]}
            className="!w-[35px]"
          />
        </div>

        <div className="price mr-[30px] flex flex-col">
          <span className="flex items-center gap-2 text-[15px] text-[#324A66]">
            <span className="line-through">
              {Number(productData.price).toLocaleString("en")}
            </span>
            <span>{languageData.productSingle.tooman}</span>
          </span>
          <span className="flex items-center gap-2 text-[20px] font-[700] text-text-primary">
            <span className="text-primary">
              {Number(productData.discount_price).toLocaleString("en")}
            </span>
            <span>{languageData.productSingle.tooman}</span>
          </span>
        </div>
      </div>

      <Button className="flex !w-[160px] w-full items-center rounded-[15px] p-[10px] text-[18px] font-[400]">
        <span>{languageData.productSingle.add_to_shopping_cart}</span>
      </Button>
    </div>
  );
};

export default WishListProduct;
