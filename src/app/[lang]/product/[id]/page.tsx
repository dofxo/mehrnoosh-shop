import ProductPageClient from "./components/ProductPageClient";

export default async function product({ params }: { params: { id: string } }) {
  // extract id from param and call for product data
  const productId = await params.id;

  return <ProductPageClient productId={productId} />;
}
