export type SortProps = {
  productsAmount: number | undefined;
  currentFilter: string;
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
  handleCurrentFilterChange: (value: string) => void;
  startIndex: number;
  endIndex: number;
};
