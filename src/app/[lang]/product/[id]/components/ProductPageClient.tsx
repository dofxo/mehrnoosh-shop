"use client";

import { initializeProductsData } from "@/lib/features/productsData/productsSlice";
import ProductCons from "./productCons/ProductCons";
import ProductInfo from "./productInfo/ProductInfo";
import ProductTabs from "./productTabs/ProductTabs";
import RatingDetails from "./ratingDetails/RatingDetails";
import RelatedProducts from "./relatedProducts/RelatedProducts";
import Loader from "@/components/loader/Loader";
import { initializeProductData } from "@/lib/features/productSingle/productSingleSlice";
import { useAppDispatch } from "@/lib/hooks";
import axios from "axios";
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
      try {
        const { data: product } = await axios.get(`/api/products/${productId}`);
        const productData = product[0];

        if (productData && Object.keys(productData).length > 0) {
          dispatch(initializeProductData(productData));
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
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
      <RelatedProducts />
    </main>
  );
}
