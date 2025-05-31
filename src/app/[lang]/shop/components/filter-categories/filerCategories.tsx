"use client";

import { getCategories } from "@/helpers/getCategories";
import { useAppSelector } from "@/lib/hooks";

export default function FilterCategories() {
  const products = useAppSelector((state) => state.productsData);
  const categories = getCategories(products);

  return (
    <div className="flex flex-col gap-2 bg-white p-[20px] rounded-primary">
      {categories.map((item) => (
        <div key={item.id}>test</div>
      ))}
    </div>
  );
}
