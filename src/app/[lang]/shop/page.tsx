"use client";

import FilterCategories from "@/app/[lang]/shop/components/filter-categories/filerCategories";
import Paginate from "@/app/[lang]/shop/components/pagination/ShopPagination";
import ProductList from "@/app/[lang]/shop/components/products-list/ProductsList";
import Sort from "@/app/[lang]/shop/components/sort/sort";
import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";

export default function Home() {
  const products = useAppSelector((state) => state.productsData.productsData);
  const [currentFilter, setCurrentFilter] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage,
  ) as "en" | "fa";

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

  const startIndex = (currentPage - 1) * productsPerPage + 1;
  const endIndex = Math.min(
    currentPage * productsPerPage,
    products?.length || 0,
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
          startIndex={startIndex}
          endIndex={endIndex}
        />

        {/* Product List */}
        <ProductList
          products={paginatedProducts ?? []}
          currentLanguage={currentLanguage}
        />

        {/* Pagination */}
        {products?.length && products?.length > productsPerPage && (
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
