"use client";

import { langType } from "@/app/[lang]/langs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/lib/hooks";
import { Captions, FileText, MessageCircleMore } from "lucide-react";

const TabsSection = ({
  description,
  properties,
  comments,
}: {
  description: { en: string; fa: string };
  properties: {
    color: {
      en: string[];
      fa: string[];
    };
    brand: {
      en: string;
      fa: string;
    };
  };
  comments: {
    cons: string[];
    name: string;
    pros: string[];
    rating: string;
    comment: string;
    created_at: string;
  }[];
}) => {
  const { languageData, currentLanguage } = useAppSelector(
    (state) => state.language,
  );

  const tabsData = [
    {
      value: languageData.productSingle.description,
      content: {
        body: (
          <p className="font-[500]">
            {description[currentLanguage as langType]}
          </p>
        ),
        title: languageData.productSingle.description,
        icon: <Captions size={20} />,
      },
      icon: <Captions size={20} className="self-start" />,
    },
    {
      value: languageData.productSingle.completion_description,
      content: {
        body: (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-[500]">
              <div className="flex w-[150px] items-center justify-center gap-2 rounded-[90px] bg-[#f2f6fc] p-[8px] text-[17px] font-bold text-text-primary">
                {languageData.productSingle.color}
              </div>
              {properties.color[currentLanguage as langType].join(", ")}
            </div>
            <div className="flex items-center gap-2 font-[500]">
              <div className="flex w-[150px] items-center justify-center gap-2 rounded-[90px] bg-[#E6F1FF] p-[8px] text-[17px] font-bold text-primary">
                {languageData.productSingle.brand}
              </div>
              {properties.brand[currentLanguage as langType]}
            </div>
          </div>
        ),
        title: languageData.productSingle.extra_details,
        icon: <FileText size={20} />,
      },
      icon: <FileText size={20} className="self-start" />,
    },
    {
      value: `${languageData.productSingle.comments} (${comments.length})`,
      content: {
        body: "",
        title: languageData.productSingle.comments,
        icon: <MessageCircleMore size={20} />,
      },
      icon: <MessageCircleMore size={18} className="self-start" />,
    },
  ];

  return (
    <Tabs defaultValue={tabsData[0].value} dir="rtl" className="w-full">
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
          <div className="mt-[30px] flex w-full flex-col gap-5 rounded-[20px] bg-white p-[20px] shadow-[0_2px_25px_rgba(41,41,94,0.08)]">
            <div className="flex items-center gap-5">
              <div className="primary-box-shadow flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-primary text-white">
                {tab.content.icon}
              </div>
              <h5 className="text-[18px] font-[600] text-text-primary">
                {tab.content.title}
              </h5>
            </div>
            {tab.content.body}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsSection;
