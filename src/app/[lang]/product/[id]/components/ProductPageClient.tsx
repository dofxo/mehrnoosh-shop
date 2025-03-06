"use client";

import ProductCons from "./productCons/ProductCons";
import ProductInfo from "./productInfo/ProductInfo";
import ProductTabs from "./productTabs/ProductTabs";
import RatingDetails from "./ratingDetails/RatingDetails";
import Loader from "@/components/Loader";
import { initializeProductData } from "@/lib/features/productSingle/productSingleSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect, useState } from "react";

export default function ProductPageClient({
  productId,
}: {
  productId: string;
}) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/products/${productId}`);
      const product = await response.json();
      const productData = product[0];

      if (productData && Object.keys(productData).length > 0) {
        dispatch(initializeProductData(productData));
        setIsLoading(false);
      }
    })();
  }, [dispatch, productId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="container flex flex-col gap-[65px] py-[20px]">
      <ProductInfo />
      <ProductCons />
      <RatingDetails />
      <ProductTabs />
    </main>
  );
}
