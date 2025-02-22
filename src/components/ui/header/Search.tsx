import { useAppSelector } from "@/lib/hooks";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleOpen = () => setIsSearchOpen(true);
  const language = useAppSelector((state) => state.language.languageData);

  const handleClose = (e: any) => {
    e.stopPropagation();
    setIsSearchOpen(false);
  };

  return (
    <div className="w-[55%] p-[10px]">
      <motion.div
        animate={{ width: isSearchOpen ? "100%" : "50%" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="flex flex-row items-center justify-start">
          <input
            className="w-full border-none p-[20px] font-medium outline-none placeholder:text-text-primary ltr:rounded-bl-primary ltr:rounded-tl-primary rtl:rounded-br-primary rtl:rounded-tr-primary"
            placeholder={language.header.searchPlaceholder}
            onClick={handleOpen}
          />
          <div className="flex flex-row items-center justify-center gap-2 bg-white p-[20px] ltr:rounded-br-primary ltr:rounded-tr-primary rtl:rounded-bl-primary rtl:rounded-tl-primary">
            {isSearchOpen && (
              <div
                className="flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-[100%] bg-secondary transition hover:bg-primary hover:text-[#fff]"
                onClick={handleClose}
              >
                <HighlightOffOutlinedIcon sx={{ width: 15, height: 15 }} />
              </div>
            )}

            <div className="cursor-pointer transition hover:text-primary">
              <SearchOutlinedIcon />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
