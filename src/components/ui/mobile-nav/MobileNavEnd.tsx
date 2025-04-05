"use client";

import ChangeLanguage from "@/components/ChangeLanguage";
import { useAppSelector } from "@/lib/hooks";
import { motion } from "framer-motion";
import { House, Heart } from "lucide-react";

export default function MobileNavEnd() {
  const language = useAppSelector((state) => state.language.languageData);
  const { currentLanguage } = useAppSelector((state) => state.language);

  // TODO: add links
  const endData = [
    {
      name: language.mobileNav.home,
      icon: <House />,
      href: "/",
    },
    {
      name: language.mobileNav.favorite,
      icon: <Heart />,
      href: `/${currentLanguage}/wishlist`,
    },
    {
      name: language.mobileNav.language,
      icon: <ChangeLanguage />,
    },
  ];

  const containerVariants = {
    initial: {},
    hover: {
      y: -5,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className="flex flex-row ltr:mr-4 rtl:ml-4">
      {endData.map((item, idx) => (
        <motion.a
          key={idx}
          href={item.href ?? null}
          variants={containerVariants}
          initial="initial"
          whileHover="hover"
          className="group relative flex cursor-pointer flex-col items-center justify-center px-3 py-1"
        >
          <div className="rounded-primary p-1 group-hover:bg-primary-100 group-hover:text-primary-700">
            <div className="flex items-center justify-center transition">
              {item.icon}
            </div>
          </div>
          <motion.span
            variants={textVariants}
            className="absolute text-sm font-semibold"
            style={{ top: "100%", marginTop: "4px" }}
          >
            {item.name}
          </motion.span>
        </motion.a>
      ))}
    </div>
  );
}
