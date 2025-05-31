export type PaginateProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

