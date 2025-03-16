"use client";

import DropdownSearch from "@/components/ui/header/search/DropdownSearch";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAppSelector } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Search as SearchIcon, CircleX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleOpen = () => setIsSearchOpen(true);
  const language = useAppSelector((state) => state.language.languageData);

  const searchRef = useRef<HTMLDivElement | null>(null);

  const isLg = useMediaQuery("(min-width: 970px)");

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSearchOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full p-[5px] lg:w-[55%]" ref={searchRef}>
      <motion.div
        {...(isLg && {
          animate: { width: isSearchOpen ? "100%" : "50%" },
          transition: { duration: 0.2, ease: "easeInOut" },
        })}
        className="overflow-hidden"
      >
        <div className="flex flex-row items-center justify-start">
          <input
            className="bg-white w-full border-none p-[20px] font-medium outline-none placeholder:text-text-secondary ltr:rounded-bl-primary ltr:rounded-tl-primary rtl:rounded-br-primary rtl:rounded-tr-primary"
            placeholder={language.header.search_placeholder}
            onClick={handleOpen}
          />
          <div className="flex flex-row items-center justify-center gap-2 bg-white p-[20px] ltr:rounded-br-primary ltr:rounded-tr-primary rtl:rounded-bl-primary rtl:rounded-tl-primary">
            {isSearchOpen && (
              <div
                className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-[100%] bg-secondary transition hover:bg-primary hover:text-[#fff]"
                onClick={handleClose}
              >
                <CircleX style={{ width: "17px", height: "17px" }} />
              </div>
            )}
            <div className="cursor-pointer transition hover:text-primary">
              <SearchIcon />
            </div>
          </div>
        </div>

        {/* Dropdown */}
        <DropdownSearch language={language} isSearchOpen={isSearchOpen} />
      </motion.div>
    </div>
  );
}
