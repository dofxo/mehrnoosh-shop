"use client";

import tailwindConfig from "../../tailwind.config.ts";
import { useAppSelector } from "@/lib/hooks";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

const TicketShapedCard = ({ position }: { position: string }) => {
  const primaryColor = fullConfig.theme.colors.primary.DEFAULT;

  const { currentLanguage, languageData } = useAppSelector(
    (store) => store.language,
  );

  return (
    <section
      style={{ backgroundColor: position === "top" ? "#fff" : primaryColor }}
      className="rounded-[25px] p-[10px]"
    >
      <div className="description">
        <div className="title">
          <h3>
            {position === "top"
              ? languageData.landing.firsts_in_iran
              : languageData.landing.best_products_in_iran}
          </h3>
          {position === "top"
            ? languageData.landing.ask_best_from_us
            : languageData.landing.discount_only_today}
          <h4></h4>
        </div>
      </div>
      <div className="products"></div>
    </section>
  );
};

export default TicketShapedCard;
