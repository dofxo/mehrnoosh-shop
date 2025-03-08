"use client";

import CustomFlowbiteTheme from "@/components/ui/custom-flowbite-theme";
import { SidebarMenuItem } from "@/components/ui/sidebar/navbarData";
import { sidebarNavData } from "@/configs/navData";
import { useAppSelector } from "@/lib/hooks";
import { Sidebar } from "flowbite-react";

export default function SidebarMenuItems() {
  const currentLanguage = useAppSelector(
    (state) => state.language.currentLanguage,
  ) as "en" | "fa";

  const renderMenuItems = (items: SidebarMenuItem) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <Sidebar.Collapse key={item.id} label={item.label[currentLanguage]}>
            {renderMenuItems(item.children)}
          </Sidebar.Collapse>
        );
      } else {
        return (
          <Sidebar.Item key={item.id} href={item.link || "#"}>
            {item.label[currentLanguage]}
          </Sidebar.Item>
        );
      }
    });
  };

  return (
    <CustomFlowbiteTheme>
      <Sidebar
        className="mt-5 flex h-full items-center justify-start overflow-x-hidden bg-white"
        aria-label="Sidebar with multi-level dropdown"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {renderMenuItems(sidebarNavData)}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </CustomFlowbiteTheme>
  );
}
