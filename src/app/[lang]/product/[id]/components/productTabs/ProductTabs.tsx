import { IProduct } from "../../Product";
import TabsSection from "./tabsSection/TabsSection";

const ProductTabs = ({ productData }: { productData: IProduct }) => {
  const { description, properties, comments } = productData;
  return (
    <section className="flex justify-center">
      <TabsSection
        description={description}
        properties={properties}
        comments={comments}
      />
    </section>
  );
};

export default ProductTabs;
