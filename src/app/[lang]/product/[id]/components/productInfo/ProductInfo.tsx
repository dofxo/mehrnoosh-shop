import ProductDetails from "./ProductDetails";
import ProductPrice from "./ProductPrice";
import ProductImages from "./productImage/ProductImages";

const ProductInfo = () => {
  return (
    <section className="flex justify-between gap-[20px] rounded-[25px] bg-white p-[30px]">
      <ProductImages />
      <ProductDetails />
      <ProductPrice />
    </section>
  );
};

export default ProductInfo;
