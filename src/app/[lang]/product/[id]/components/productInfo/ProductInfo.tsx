import { IProduct } from "../../product";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import ProductPrice from "./ProductPrice";

const ProductInfo = ({ productData }: { productData: IProduct }) => {
  const { images, quantity, sold_amount, price, discount_price, name } =
    productData;
  return (
    <div className="rounded-[25px] p-[30px] bg-white flex gap-[20px] justify-between">
      <ProductImages
        images={images}
        quantity={quantity}
        sold_amount={sold_amount}
        name={name}
        price={price}
        discount_price={discount_price}
      />
      <ProductDetails />
      <ProductPrice />
    </div>
  );
};

export default ProductInfo;
