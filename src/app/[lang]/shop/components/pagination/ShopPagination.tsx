"use client";

import type { PaginateProps } from "./ShopPagination.d";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppSelector } from "@/lib/hooks";

export default function Paginate({
  currentPage,
  totalPages,
  onPageChange,
}: PaginateProps) {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage,
  );

  const isFa = currentLanguage === "fa";

  return (
    <Pagination>
      <PaginationContent dir="ltr">
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text={isFa ? "قبلی" : "Previous"}
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(currentPage - 1);
              }}
            />
          </PaginationItem>
        )}

        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              isActive={index + 1 === currentPage}
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(index + 1);
              }}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href="#"
              text={isFa ? "بعدی" : "Next"}
              onClick={(e) => {
                e.preventDefault();
                handlePageClick(currentPage + 1);
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
