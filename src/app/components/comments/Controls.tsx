"use client"

import {useAppSelector} from "@/lib/hooks";

const Controls = () => {
    const {languageData} = useAppSelector((state) => state.language);
    return (
        <div className="relative bg-primary rounded-[25px] p-[30px] w-[30%] flex items-center flex-col gap-12"
             id="controls">
            <span
                className="text-[20px] rounded-[0px_0px_0px_20px] bg-background flex items-center justify-center absolute top-0 right-0 py-[15px] px-[20px]"> {languageData.landing.comments.customers_comments}</span>
            <div className="arrows"></div>
            <span className="text-white text-[19px]"> {languageData.landing.comments.section_details}</span>
        </div>
    )
}
export default Controls
