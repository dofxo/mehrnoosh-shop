import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import ProductPrice from "./ProductPrice";

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
