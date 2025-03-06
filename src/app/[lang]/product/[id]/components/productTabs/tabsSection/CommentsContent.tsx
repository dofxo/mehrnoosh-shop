"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RatingGroup, Textarea } from "@chakra-ui/react";
import { Frown, Plus, Smile, Star } from "lucide-react";
import { useRef, useState } from "react";

const CommentsContent = ({
  languageData,
  currentLanguage,
}: {
  languageData: any;
  currentLanguage: string;
}) => {
  const [rateValue, setRateValue] = useState(3);

  const [cons, setCons] = useState<string[]>([]);
  const [pros, setPros] = useState<string[]>([]);

  const prosRef = useRef<HTMLInputElement>(null);
  const consRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div
      className="grid grid-cols-2 gap-5"
      style={{ direction: currentLanguage === "fa" ? "rtl" : "ltr" }}
    >
      {/* writing comment section */}
      <form
        ref={formRef}
        className="flex flex-col gap-[20px] rounded-[20px] bg-secondary p-[30px]"
        onClick={(e) => e.preventDefault()}
      >
        <h3 className="text-[18px] font-[600]">
          {languageData.productSingle.write_your_comment}
        </h3>

        <div className="flex flex-col gap-1">
          <span className="font-[500]">
            {languageData.productSingle.your_name}
          </span>
          <Input className="flex items-center justify-between rounded-[10px] border-none bg-white p-1 p-[20px] !text-[15px] font-bold shadow-none outline-none focus:border-none" />
          <span className="self-start font-[500] text-gray-400">
            {languageData.productSingle.leave_empty}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-[500]">
            {languageData.productSingle.your_comment} *
          </span>
          <Textarea className="flex items-center justify-between rounded-[10px] border-none bg-white p-[15px] text-[17px] font-bold outline-none focus:border-none" />
        </div>

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

        <div className="pros-and-cons mt-[20px] grid grid-cols-2 gap-5">
          {[
            {
              title: {
                text: languageData.productSingle.pros,
                color: "var(--primary)",
                icon: <Smile size={20} />,
              },
              placeHolder: languageData.productSingle.pro,
              data: pros,
              onClick: () => {
                const value = prosRef.current?.value.trim();
                if (prosRef.current?.value) {
                  setPros((prev) => [...prev, value as string]);
                  prosRef.current.value = "";
                }
              },
              inputRef: prosRef,
            },
            {
              title: {
                text: languageData.productSingle.cons,
                color: "orange",
                icon: <Frown size={20} />,
              },
              data: cons,
              placeHolder: languageData.productSingle.con,
              onClick: () => {
                const value = consRef.current?.value.trim();
                if (consRef.current?.value) {
                  setCons((prev) => [...prev, value as string]);
                  consRef.current.value = "";
                }
              },
              inputRef: consRef,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-5 rounded-[10px] bg-white p-[20px]"
            >
              <h3
                className="flex items-start gap-2 font-bold"
                style={{
                  color: item.title.color,
                }}
              >
                {item.title.icon}
                <span>{item.title.text}</span>
              </h3>
              <Input
                ref={item.inputRef}
                className="border-none bg-secondary text-text-primary"
                placeholder={item.placeHolder}
              />
              <ul>
                {item.data.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <Button
                className="flex w-fit items-center gap-2 self-end text-[18px] text-primary"
                variant="ghost"
              >
                <Plus />
                <span className="self-start" onClick={item.onClick}>
                  {languageData.productSingle.add}
                </span>
              </Button>
            </div>
          ))}

          <Button
            onClick={() => {
              // reset form
              formRef.current?.reset();
            }}
            className="w-fit text-[18px] font-bold"
          >
            {languageData.productSingle.submit}
          </Button>
        </div>
      </form>
      {/* writing comment section end*/}
      {/* showing comment section */}
      <div></div>
      {/* showing comment section end*/}
    </div>
  );
};

export default CommentsContent;
