import { IProduct } from "../../Product";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import ProductPrice from "./ProductPrice";

const ProductInfo = ({ productData }: { productData: IProduct }) => {
  const {
    images,
    quantity,
    sold_amount,
    price,
    discount_price,
    name,
    comments,
    rating,
    properties,
    category,
  } = productData;
  return (
    <div className="flex justify-between gap-[20px] rounded-[25px] bg-white p-[30px]">
      <ProductImages
        images={images}
        quantity={quantity}
        sold_amount={sold_amount}
        name={name}
        price={price}
        discount_price={discount_price}
      />
      <ProductDetails
        name={name}
        comments={comments}
        rating={rating}
        properties={properties}
        category={category}
      />
      <ProductPrice />
    </div>
  );
};

export default ProductInfo;
