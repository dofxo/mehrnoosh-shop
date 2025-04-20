import ProductDetails from "./ProductDetails";
import ProductPrice from "./ProductPrice";
import ProductImages from "./productImage/ProductImages";

const ProductInfo = () => {
  return (
    <section className="flex flex-col justify-between gap-[20px] rounded-[25px] bg-white p-[30px] xl:flex-row">
      <div className="flex gap-[20px] max-[930px]:flex-col">
        <ProductImages />
        <ProductDetails />
      </div>

      <ProductPrice />
    </section>
  );
};

export default ProductInfo;
