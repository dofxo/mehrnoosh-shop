import Image from "next/image";
import { HeaderProps } from "../Header.types";
import Logo from "../../../../../public/images/text-logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export default function DesktopHeader({ language }: HeaderProps) {
  return (
    <section className="w-full bg-secondary p-[15px]">
      <div className="container">
        <div className="flex flex-row justify-center items-center">
          <div className="w-[20%] max-w-[200px] p-[10px]">
            <Image src={Logo} width={175} height={63} alt="logo" />
          </div>
          {/* search */}
          <div className="w-[55%] p-[10px]">
            <div className="w-full">
              <div className="w-1/2">
                {/* TODO: consider using a library */}

                <div className="flex flex-row items-center justify-start ">
                  <input
                    className="placeholder:text-text-primary font-medium border-none outline-none p-[20px] rtl:rounded-tr-primary rtl:rounded-br-primary ltr:rounded-tl-primary ltr:rounded-bl-primary"
                    placeholder={language.header.searchPlaceholder}
                  />
                  <div className="bg-white h-full p-[20px] ltr:rounded-tr-primary ltr:rounded-br-primary rtl:rounded-tl-primary rtl:rounded-bl-primary">
                    <SearchOutlinedIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[25%] ">
            <div className="flex flex-row gap-1 items-center justify-end">
              <NotificationsOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
