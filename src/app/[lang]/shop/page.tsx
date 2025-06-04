"use client";

import FilterCategories from "@/app/[lang]/shop/components/filter-categories/filerCategories";
import Paginate from "@/app/[lang]/shop/components/pagination/ShopPagination";
import Sort from "@/app/[lang]/shop/components/sort/sort";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const products = useAppSelector((state) => state.productsData.productsData);
  const [currentFilter, setCurrentFilter] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;
  const totalPages = products?.length
    ? Math.ceil(products.length / productsPerPage)
    : 1;

  const handleCurrentFilterChange = (value: string) => {
    setCurrentFilter(value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage,
  );

  return (
    <main className="container !mt-[100px] flex flex-row gap-8 py-[20px]">
      <div className="flex w-[20%] flex-col gap-2">
        <FilterCategories />
      </div>
      <div className="w-[80%]">
        <Sort
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          handleCurrentFilterChange={handleCurrentFilterChange}
          productsAmount={products?.length}
        />

        {/* Product List */}
        <section className="mt-10 grid grid-cols-3 gap-4">
          {paginatedProducts?.map((item, idx) => (
            <div
              className="flex flex-col items-center justify-center gap-2 rounded-primary bg-white px-5 py-4"
              key={idx}
            >
              <Image
                alt={item.name.fa}
                src={item.images[0]}
                width={214}
                height={214}
                className="py-5"
              />
              <span>{item.name.fa}</span>
            </div>
          ))}
        </section>
        {/* Pagination */}
        {products?.length > productsPerPage && (
          <Paginate
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </main>
  );
}
