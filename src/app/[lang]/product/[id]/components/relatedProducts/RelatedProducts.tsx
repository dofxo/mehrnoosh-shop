"use client";

import { IProduct } from "../../Product";
import { useAppSelector } from "@/lib/hooks";
import { Store } from "lucide-react";

const RelatedProducts = () => {
  const { languageData } = useAppSelector((state) => state.language);

  return (
    <section>
      <div className="flex items-center gap-2">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-primary text-[18px] text-white">
          <Store size={18} />
        </div>
        <h3 className="text-[20px] font-bold">
          {languageData.productSingle.related_products}
        </h3>
      </div>
    </section>
  );
};

export default RelatedProducts;
