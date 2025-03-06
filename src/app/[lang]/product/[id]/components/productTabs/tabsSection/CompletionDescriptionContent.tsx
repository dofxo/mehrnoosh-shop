import { langType } from "@/app/[lang]/langs";

const CompletionDescriptionContent = ({
  currentLanguage,
  languageData,
  properties,
}: {
  currentLanguage: string;
  languageData: any;
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
}) => {
  return (
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
  );
};

export default CompletionDescriptionContent;
