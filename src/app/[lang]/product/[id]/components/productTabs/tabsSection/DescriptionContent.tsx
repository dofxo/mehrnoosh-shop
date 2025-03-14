import { langType } from "@/app/[lang]/langs";

const DescriptionContent = ({
  description,
  currentLanguage,
}: {
  description: { en: string; fa: string };
  currentLanguage: string;
}) => {
  return (
    <p className="font-[500]">{description[currentLanguage as langType]}</p>
  );
};

export default DescriptionContent;
