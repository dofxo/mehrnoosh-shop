"use client";

import { IProduct } from "../../../Product";
import CommentsContent from "./CommentsContent";
import CompletionDescriptionContent from "./CompletionDescriptionContent";
import DescriptionContent from "./DescriptionContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/lib/hooks";
import { Captions, FileText, MessageCircleMore } from "lucide-react";

const TabsSection = () => {
  const { description, properties, comments }: IProduct = useAppSelector(
    (state: any) => state.productSingle.productData,
  );
  const { languageData, currentLanguage } = useAppSelector(
    (state) => state.language,
  );

  const tabsData = [
    {
      value: languageData.productSingle.description,
      content: {
        body: (
          <DescriptionContent
            description={description}
            currentLanguage={currentLanguage}
          />
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
          <CompletionDescriptionContent
            currentLanguage={currentLanguage}
            properties={properties}
            languageData={languageData}
          />
        ),
        title: languageData.productSingle.extra_details,
        icon: <FileText size={20} />,
      },
      icon: <FileText size={20} className="self-start" />,
    },
    {
      value: `${languageData.productSingle.comments} (${comments.length})`,
      content: {
        body: (
          <CommentsContent
            languageData={languageData}
            currentLanguage={currentLanguage}
          />
        ),
        title: languageData.productSingle.comments,
        icon: <MessageCircleMore size={20} />,
      },
      icon: <MessageCircleMore size={18} className="self-start" />,
    },
  ];

  return (
    <Tabs defaultValue={tabsData[0].value} dir="rtl" className="tablist w-full">
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
