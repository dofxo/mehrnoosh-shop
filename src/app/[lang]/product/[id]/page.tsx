import ProductInfo from "./components/productInfo/ProductInfo";

export default async function Product({ params }: { params: { id: string } }) {
  // extract id from param and call for product data
  const productId = await params.id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${productId}`,
  );

  const product = await response.json();

  // extract first item from the response array
  const productData = product[0];

  return (
    <div className="container">
      <ProductInfo productData={productData} />
    </div>
  );
}


