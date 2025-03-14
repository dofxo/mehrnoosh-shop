"use client";

import { langType } from "@/app/[lang]/langs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppSelector } from "@/lib/hooks";
import { ClipboardCopy, GitCompareArrows, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ActionButtons = () => {
  const productShareLink = `${process.env.NEXT_PUBLIC_BASE_URL}${usePathname()}`;

  const [shareLinkCopied, setCopiedLinkStatus] = useState(false);
  const { currentLanguage, languageData } = useAppSelector(
    (state) => state.language,
  );

  const socialsShare = [
    {
      icon: "/images/productSingle/whatsapp.png",
      shareLink: `whatsapp://send?text=${productShareLink}`,
    },
    {
      icon: "/images/productSingle/telegram.png",
      shareLink: `https://telegram.me/share/url?${productShareLink}`,
    },
  ];

  const actionButtonIcons = [
    {
      icon: (
        <Dialog>
          <DialogTrigger>
            <Share2 size={20} />
          </DialogTrigger>
          <DialogContent
            onCloseAutoFocus={() => {
              setCopiedLinkStatus(false);
            }}
            className="shadcn-modal w-fit max-w-[unset] !rounded-[30px] bg-gray-300"
          >
            <DialogDescription className="mt-[50px] flex flex-col gap-[20px] text-[16px]">
              <div className="flex items-center gap-5">
                <div className="flex w-[120px] items-center justify-center rounded-[20px] bg-[#6D90B9] p-[7px] text-[15px] font-[500] text-white">
                  {languageData.productSingle.share}
                </div>
                <p className="font-[500] text-black">
                  {name[currentLanguage as langType]}
                </p>
              </div>
              <div className="socials-share flex items-center gap-3">
                {socialsShare.map((item, idx) => (
                  <a
                    target="_blank"
                    href={item.shareLink}
                    key={idx}
                    className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[50%] bg-[#f2f6fc] text-[#37506F]"
                  >
                    <Image
                      className="w-[25px]"
                      src={item.icon}
                      alt="social-icon"
                      width={0}
                      height={0}
                      layout="responsive"
                    />
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 self-end rounded-[15px] bg-white p-[10px] text-black">
                {productShareLink}
                <div
                  className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[50%] bg-primary p-1.5 transition"
                  onClick={() => {
                    navigator.clipboard.writeText(productShareLink);
                    setCopiedLinkStatus(true);

                    setTimeout(() => {
                      setCopiedLinkStatus(false);
                    }, 1500);
                  }}
                  style={{ backgroundColor: shareLinkCopied ? "green" : "" }}
                >
                  <ClipboardCopy size={16} className="text-white" />
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      ),
      tooltipContent: languageData.productSingle.share,
    },
    {
      icon: <Heart size={20} />,
      tooltipContent: languageData.productSingle.like,
    },
    {
      icon: <GitCompareArrows size={20} />,
      tooltipContent: languageData.productSingle.compare,
    },
  ];

  return (
    <div id="action-buttons" className="flex items-center gap-2">
      {actionButtonIcons.map((item, idx) => (
        <TooltipProvider key={idx} delayDuration={0}>
          <Tooltip>
            <TooltipTrigger className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[50%] bg-white transition hover:bg-primary hover:text-white">
              {item.icon}
            </TooltipTrigger>
            <TooltipContent
              className="p-[7px 0] flex w-[120px] items-center justify-center rounded-[20px] bg-[#6D90B9] text-[15px] font-[500]"
              align="start"
            >
              {item.tooltipContent}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default ActionButtons;
