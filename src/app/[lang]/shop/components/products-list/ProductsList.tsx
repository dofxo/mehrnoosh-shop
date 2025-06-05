"use client";

import { IProduct } from "@/app/[lang]/product/[id]/Product";
import { languageDataType } from "@/lib/features/language/languageSlice";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductListProps {
  products: IProduct[];
  currentLanguage: "en" | "fa";
  languageData: languageDataType;
}

export default function ProductList({
  products,
  currentLanguage,
  languageData,
}: ProductListProps) {
  // TODO: wrap each item in a link to their product page
  return (
    <section className="mt-10 grid grid-cols-3 gap-8">
      {products.map((item, idx) => (
        <div className="rounded-primary bg-white px-5 py-4" key={idx}>
          <Link
            className="flex flex-col items-center justify-center gap-2"
            href={`/product/${item.id}`}
          >
            <Image
              alt={item.name[currentLanguage]}
              src={item.images[0]}
              width={214}
              height={214}
              className="py-5"
            />
            <span className="font-semibold">{item.name[currentLanguage]}</span>
          </Link>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col font-semibold">
              {Number(item.discount_price) !== 0 && (
                <span className="text-[15px] text-muted-foreground line-through">
                  {Number(item.price).toLocaleString()}
                </span>
              )}
              <div className="flex flex-row gap-1 text-[18px] font-bold">
                <span className="text-primary-700">
                  {Number(item.discount_price) === 0
                    ? Number(item.price).toLocaleString()
                    : Number(item.discount_price).toLocaleString()}
                </span>
                <span className="text-black">
                  {languageData.productSingle.tooman}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="h-[30px] w-[1px] bg-gray-200"></div>
              <div className="flex flex-row items-center justify-center gap-2">
                <span className="flex items-center justify-center">
                  3 {languageData.shop.from} 5
                </span>
                <div className="flex h-[30px] w-[30px] flex-row items-center justify-center rounded-[100%] bg-yellow-100 p-2">
                  <Star color="orange" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
