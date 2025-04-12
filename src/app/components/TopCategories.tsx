"use client";

import Title from "@/components/Title";
import { useAppSelector } from "@/lib/hooks";

const TopCategories = () => {
  const { languageData, currentLanguage } = useAppSelector(
    (store) => store.language,
  );
  return (
    <section className="rounded-[25px] bg-white p-[30px]">
      <Title
        title={languageData.landing.top_categories}
        subTitle={
          currentLanguage === "fa"
            ? "List of top categories"
            : "برترین دسته بندی ها"
        }
        image="/images/landing/square-ellipsis.png"
        color={{ imageBackground: "#f2f6fc" }}
      />
    </section>
  );
};

export default TopCategories;
