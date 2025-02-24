import type { DropdownSearchProps } from "./DropdownSearch.d";

// TODO: change later
const items = [
  {
    name: "mobile",
  },
  { name: "tablet" },
];

export default function DropdownSearch({
  isSearchOpen,
  language,
}: DropdownSearchProps) {
  return (
    <div
      className={`${isSearchOpen ? "block" : "hidden"} absolute z-[2] mt-[10px] w-[98.5%] rounded-primary bg-white p-[25px]`}
    >
      <div className="rounded-primary bg-secondary p-[20px]">
        <h4 className="mb-[15px] font-bold">
          {language.header.frequentSearches}
        </h4>

        {/* items */}
        <div className="flex flex-row gap-2">
          {items.map((item, idx) => (
            // TODO: change to link later
            <div
              className="cursor-pointer rounded-primary bg-white px-[15px] py-[8px] font-medium transition hover:bg-primary hover:text-white"
              key={idx}
            >
              {language.productsNames[item.name]}
            </div>
          ))}
        </div>
      </div>

      {/* TODO: add search results component here */}
      <div></div>
    </div>
  );
}
