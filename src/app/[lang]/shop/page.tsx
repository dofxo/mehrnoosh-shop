"use client";

import FilterCategories from "@/app/[lang]/shop/components/filter-categories/filerCategories";
import Sort from "@/app/[lang]/shop/components/sort/sort";
import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";
import Paginate from "@/app/[lang]/shop/components/pagination/ShopPagination";

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
    currentPage * productsPerPage
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
        {paginatedProducts?.map((item, idx) => (
          <div key={idx}>{item.name.fa}</div>
        ))}

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
