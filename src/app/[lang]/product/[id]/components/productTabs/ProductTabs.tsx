import { IProduct } from "../../Product";
import TabsSection from "./TabsSection";

const ProductTabs = ({ productData }: { productData: IProduct }) => {
  const { description, properties } = productData;
  return (
    <section className="flex justify-center">
      <TabsSection description={description} properties={properties} />
    </section>
  );
};

export default ProductTabs;
