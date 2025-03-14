import ProductPageClient from "./components/ProductPageClient";

export default async function Product({ params }: { params: any }) {
  const productId = params.id;

  return <ProductPageClient productId={productId} />;
}
