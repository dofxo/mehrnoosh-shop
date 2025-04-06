"use client";

import CustomFlowbiteTheme from "@/components/ui/custom-flowbite-theme";
import { getCategories } from "@/helpers/getCategories";
import { CategoryType } from "@/helpers/getCategories";
import { useAppSelector } from "@/lib/hooks";
import { Sidebar } from "flowbite-react";
import { Smartphone, LaptopMinimal } from "lucide-react";
import { GiLipstick, GiVacuumCleaner, GiSmallFire } from "react-icons/gi";

export default function SidebarMenuItems() {
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage,
  ) as "en" | "fa";

  const products = useAppSelector((state) => state.productSingle);
  const categories = getCategories(products);

  const categoryIconObject: Record<string, React.ElementType> = {
    "laptop and computer": LaptopMinimal,
    "vacuum cleaner": GiVacuumCleaner,
    cosmetics: GiLipstick,
    fry: GiSmallFire,
    "phone and tablet": Smartphone,
  };

  const renderMenuItems = (items: CategoryType[]) => {
    return items.map((category, idx) => {
      const categoryName = category?.en?.[0] as string;
      const Icon = categoryIconObject[categoryName];

      const categoryText =
        currentLanguage === "fa" ? category.fa[0] : category.en[0];

      // TODO: change the link later
      // wrap around Link component
      return (
        <Sidebar.Item icon={Icon} key={idx} href="#">
          {categoryText}
        </Sidebar.Item>
      );
    });
  };

  return (
    <CustomFlowbiteTheme>
      <Sidebar
        className="mt-5 flex h-full items-center justify-start overflow-x-hidden"
        aria-label="Sidebar with multi-level dropdown"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>{renderMenuItems(categories)}</Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </CustomFlowbiteTheme>
  );
}
