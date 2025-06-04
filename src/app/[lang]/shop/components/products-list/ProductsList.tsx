"use client";

import { IProduct } from "@/app/[lang]/product/[id]/Product";
import Image from "next/image";

interface ProductListProps {
  products: IProduct[];
  currentLanguage: "en" | "fa";
}

export default function ProductList({
  products,
  currentLanguage,
}: ProductListProps) {
  return (
    <section className="mt-10 grid grid-cols-3 gap-4">
      {products.map((item, idx) => (
        <div
          className="flex flex-col items-center justify-center gap-2 rounded-primary bg-white px-5 py-4"
          key={idx}
        >
          <Image
            alt={item.name[currentLanguage]}
            src={item.images[0]}
            width={214}
            height={214}
            className="py-5"
          />
          <span>{item.name[currentLanguage]}</span>
        </div>
      ))}
    </section>
  );
}
