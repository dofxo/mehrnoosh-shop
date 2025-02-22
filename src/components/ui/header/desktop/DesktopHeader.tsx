"use client";

import Logo from "../../../../../public/images/text-logo.png";
import ChangeLanguage from "@/components/ChangeLanguage";
import { useAppSelector } from "@/lib/hooks";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function DesktopHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleOpen = () => setIsSearchOpen(true);
  const language = useAppSelector((state) => state.language.languageData);

  const handleClose = (e: any) => {
    e.stopPropagation();
    setIsSearchOpen(false);
  };

  return (
    <section className="w-full bg-secondary p-[15px]">
      <div className="container">
        <div className="flex flex-row items-center justify-center">
          <div className="w-[20%] max-w-[200px] p-[10px]">
            <Image src={Logo} width={175} height={63} alt="logo" />
          </div>
          {/* search */}
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
                      <HighlightOffOutlinedIcon
                        sx={{ width: 15, height: 15 }}
                      />
                    </div>
                  )}

                  <div className="cursor-pointer transition hover:text-primary">
                    <SearchOutlinedIcon />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-[25%]">
            <div className="flex flex-row items-center justify-end gap-1">
              <div className="cursor-pointer transition hover:text-primary">
                <NotificationsOutlinedIcon />
              </div>
              <div className="cursor-pointer transition hover:text-primary">
                <FavoriteBorderOutlinedIcon />
              </div>

              <ChangeLanguage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
