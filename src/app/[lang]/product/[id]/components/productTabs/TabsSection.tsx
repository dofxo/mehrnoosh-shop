"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/lib/hooks";
import { FileText, MessageCircleMore, Store } from "lucide-react";

const TabsSection = () => {
  const { languageData } = useAppSelector((state) => state.language);

  const tabsData = [
    {
      value: languageData.productSingle.description,
      content: "tozihat",
      icon: <Store size={20} className="self-start" />,
    },
    {
      value: languageData.productSingle.completion_description,
      content: "tozihat takmili",
      icon: <FileText size={20} className="self-start" />,
    },
    {
      value: languageData.productSingle.comments,
      content: "nazarat",
      icon: <MessageCircleMore size={18} className="self-start" />,
    },
  ];

  return (
    <Tabs defaultValue={tabsData[0].value} dir="rtl">
      <TabsList className="flex items-center gap-5">
        {tabsData.map((tab, index) => (
          <TabsTrigger
            className="flex items-center gap-2 rounded-[15px] bg-white px-[20px] py-[15px] text-[16px] font-[500] text-text-primary"
            key={index}
            value={tab.value}
          >
            {tab.icon}
            <span> {tab.value}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsData.map((tab, index) => (
        <TabsContent key={index} value={tab.value} className="mt-[40px]">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsSection;
