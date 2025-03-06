"use client";

import { RatingGroup, Textarea } from "@chakra-ui/react";
import { Star } from "lucide-react";
import { useState } from "react";

const CommentsContent = ({ languageData }: { languageData: any }) => {
  const [rateValue, setRateValue] = useState(3);

  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-[20px] rounded-[20px] bg-secondary p-[30px]">
        <h3 className="text-[18px] font-[600]">
          {languageData.productSingle.write_your_comment}
        </h3>

        <div className="flex items-center justify-between rounded-[10px] bg-white p-[15px]">
          <span className="font-[500]">
            {languageData.productSingle.your_rate} *
          </span>
          <RatingGroup.Root
            className="rounded-[90px] bg-secondary px-[15px] py-[12px]"
            count={5}
            defaultValue={0}
            size="sm"
            onValueChange={(e) => setRateValue(e.value)}
          >
            <RatingGroup.HiddenInput />
            <RatingGroup.Control>
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingGroup.Item key={index} index={index + 1}>
                  <RatingGroup.ItemIndicator icon={<Star />} />
                </RatingGroup.Item>
              ))}
            </RatingGroup.Control>
          </RatingGroup.Root>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-[500]">
            {languageData.productSingle.your_comment} *
          </span>
          <Textarea className="flex items-center justify-between rounded-[10px] border-none bg-white p-[15px] text-[17px] font-bold outline-none focus:border-none" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CommentsContent;
