"use client";

import Sort from "@/app/[lang]/shop/components/sort/sort";
import { useAppSelector } from "@/lib/hooks";

export default function Home() {
  const products = useAppSelector((state) => state.productsData.productsData);

  const productsAmount = products?.length;
  return (
    <main className="container !mt-[100px] flex flex-row py-[20px]">
      <div className="w-[20%]">filter comes ehre</div>
      <div className="w-[80%]">
        <Sort productsAmount={productsAmount} />
      </div>
    </main>
  );
}
