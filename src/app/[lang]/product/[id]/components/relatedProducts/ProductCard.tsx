import { IProduct } from "../../Product";
import { langType } from "@/app/[lang]/langs";

const ProductCard = ({
  productData,
  languageData,
  currentLanguage,
}: {
  productData: IProduct;
  languageData: any;
  currentLanguage: string;
}) => {
  return <div>{productData.name[currentLanguage as langType]}</div>;
};

export default ProductCard;
