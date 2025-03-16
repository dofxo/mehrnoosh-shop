"use client";

import { IProduct } from "../../../Product";
import { langType } from "@/app/[lang]/langs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/lib/hooks";
import { RatingGroup, Textarea } from "@chakra-ui/react";
import axios from "axios";
import moment from "jalali-moment";
import { Check, Frown, Loader2, Plus, Smile, Star, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const CommentsContent = ({
  languageData,
  currentLanguage,
}: {
  languageData: any;
  currentLanguage: string;
}) => {
  const [rateValue, setRateValue] = useState(3);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [productComments, setProductComments] = useState<any[]>();

  const [cons, setCons] = useState<string[]>([]);
  const [pros, setPros] = useState<string[]>([]);

  const prosRef = useRef<HTMLInputElement>(null);
  const consRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const [productCommentsLength, setProductCommentsLength] = useState(0);

  const { comments, name, id }: IProduct = useAppSelector(
    (state: any) => state.productSingle.productData,
  );

  useEffect(() => {
    setProductCommentsLength(comments.length);
  }, [comments.length]);

  useEffect(() => {
    setProductComments(comments);
  }, [comments]);

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
          <Input
            ref={nameRef}
            name="name"
            className="flex items-center justify-between rounded-[10px] border-none bg-white p-1 p-[20px] !text-[15px] font-bold shadow-none outline-none focus:border-none"
          />
          <span className="self-start font-[500] text-gray-400">
            {languageData.productSingle.leave_empty}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-[500]">
            {languageData.productSingle.your_comment} *
          </span>
          <Textarea
            ref={commentRef}
            name="comment"
            className="flex items-center justify-between rounded-[10px] border-none bg-white p-[15px] text-[17px] font-bold outline-none focus:border-none"
          />
        </div>

        <div className="flex items-center justify-between rounded-[10px] bg-white p-[15px]">
          <span className="font-[500]">
            {languageData.productSingle.your_rate} *
          </span>
          <RatingGroup.Root
            className="your-rate rounded-[90px] bg-secondary px-[15px] py-[12px]"
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
                color: "#0070FF",
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
                  <li key={idx} className="flex gap-2">
                    <span className="font-bold">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
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
            disabled={buttonIsLoading}
            onClick={async () => {
              setButtonIsLoading(true);
              try {
                const dataToPost = {
                  name: nameRef.current?.value,
                  comment: commentRef.current?.value,
                  pros,
                  cons,
                  rating: String(rateValue),
                  created_at: new Date().toString(),
                };

                if (dataToPost.name === "") {
                  dataToPost.name =
                    currentLanguage === "fa" ? "ناشناس" : "anonymous";
                }

                if (dataToPost.comment === "") {
                  toast.error(
                    languageData.productSingle.write_your_comment_first,
                  );
                  return;
                }

                setProductCommentsLength((prev) => prev + 1);

                const {
                  data: { body: product },
                } = await axios.post(`/api/products/${id}`, dataToPost);

                setProductComments((prev: any) => [product, ...prev]);

                // reset form
                formRef.current?.reset();

                // reset pros and cons array
                setPros([]);
                setCons([]);
              } catch (error) {
                console.error(error);
              } finally {
                setButtonIsLoading(false);
              }
            }}
            className="w-fit text-[18px] font-bold"
          >
            {buttonIsLoading && <Loader2 className="animate-spin" />}
            {languageData.productSingle.submit}
          </Button>
        </div>
      </form>
      {/* writing comment section end*/}
      {/* showing comment section */}
      <div className="flex flex-col gap-5">
        <h3 className="text-[20px] font-bold">
          {productCommentsLength} {languageData.productSingle.comment_for}{" "}
          <span className="font-[400]">
            {name[currentLanguage as langType]}
          </span>
        </h3>

        <div className="comments flex max-h-[680px] flex-col gap-5 overflow-y-scroll bg-white p-2">
          {productComments?.map((item, idx) => (
            <div
              key={idx}
              className="flex min-h-fit flex-col gap-2 rounded-[15px] bg-white p-[20px] shadow-[0_2px_25px_rgba(41,41,94,0.08)]"
            >
              <span className="flex items-center gap-5">
                <span className="font-bold">{item.name}</span>
                <span className="text-[18px]">
                  {currentLanguage === "fa"
                    ? moment(item.created_at).locale("fa").format(`YYYY/MM/DD`)
                    : moment(item.created_at).format(`YYYY/DD/MM`)}
                </span>
              </span>
              <div className="flex flex-col gap-5 rounded-[15px] bg-secondary p-[16px]">
                <RatingGroup.Root
                  value={+item.rating}
                  count={5}
                  colorPalette="yellow"
                  readOnly
                  className="w-fit"
                >
                  <RatingGroup.HiddenInput />
                  <RatingGroup.Control>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingGroup.Item key={index} index={index + 1}>
                        <RatingGroup.ItemIndicator />
                      </RatingGroup.Item>
                    ))}
                  </RatingGroup.Control>
                </RatingGroup.Root>
                <span>{item.comment}</span>
              </div>
              {/* pros and cons */}
              {item.pros.length ? (
                <div className="flex flex-col gap-5 rounded-[15px] border border-[#dfe8f5e3] p-[15px]">
                  <span className="text-[17px] font-[500]">
                    {languageData.productSingle.pros}:
                  </span>

                  <div className="flex gap-2">
                    {item.pros.map((item: any, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check color="#0070FF" size={18} />
                        <span className="text-[15px] text-[400]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {item.cons.length ? (
                <div className="flex flex-col gap-5 rounded-[15px] border border-[#dfe8f5e3] p-[15px]">
                  <span className="text-[17px] font-[500]">
                    {languageData.productSingle.cons}:
                  </span>

                  <div className="flex gap-2">
                    {item.cons.map((item: any, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <X color="orange" size={18} />
                        <span className="text-[15px] text-[400]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      {/* showing comment section end*/}
    </div>
  );
};

export default CommentsContent;
