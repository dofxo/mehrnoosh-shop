"use client";

import Loader from "@/components/loader/Loader";
import { initializeProductsData } from "@/lib/features/productsData/productsSlice";
import { useAppDispatch } from "@/lib/hooks";
import axios from "axios";
import { useEffect, useState } from "react";

export default function InitProducts() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data: productsData } = await axios.get(`/api/products/`);

        dispatch(initializeProductsData(productsData));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return <></>;
}
