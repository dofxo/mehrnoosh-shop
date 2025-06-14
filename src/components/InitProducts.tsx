"use client";

import Loader from "@/components/loader/Loader";
import { initializeProductsData } from "@/lib/features/productsData/productsSlice";
import { useAppDispatch } from "@/lib/hooks";
import axios from "axios";
import { useEffect, useState } from "react";

export default function InitProducts({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: productsData } = await axios.get(`/api/products/`);
        dispatch(initializeProductsData(productsData));
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
}
