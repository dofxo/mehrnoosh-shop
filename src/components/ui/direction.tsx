import { useAppSelector } from "@/lib/hooks";
import { Direction } from "radix-ui";

export default function DirectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage,
  );

  return (
    <Direction.Provider dir={currentLanguage === "fa" ? "rtl" : "ltr"}>
      {children}
    </Direction.Provider>
  );
}
