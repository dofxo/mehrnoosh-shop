"use client";

import { useAppSelector } from "@/lib/hooks";

const WhishList = () => {
  const language = useAppSelector((state) => state.language.languageData);

  return (
    <section className="container !mt-[20px] rounded-[25px] bg-white p-[30px]">
      <h1 className="text-2xl font-bold text-text-primary">
        {language.whishlist.title}
      </h1>

      <div className="list-of-products"></div>
    </section>
  );
};

export default WhishList;
