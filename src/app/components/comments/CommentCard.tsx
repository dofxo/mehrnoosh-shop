import {IComment} from "@/app/components/comments/Comments";
import {RatingGroup} from "@chakra-ui/react"
import {StarIcon} from "lucide-react";
import {useAppSelector} from "@/lib/hooks";

const CommentsCard = ({comment}: { comment: IComment }) => {
    const {currentLanguage} = useAppSelector((state) => state.language);
    return <div
        className='p-[30px] pt-[40px] overflow-hidden relative rounded-[25px] gap-10 !shadow-[0px_2px_15px_#9b9a9a3d] h-[245px] flex flex-col'>
        <div
            className="w-2 h-16 shadow-[0px_5px_15px_#0070FF] bg-primary rounded-[20px] absolute right-[-4px] top-[20px]"></div>
        <div className="flex flex-col gap-1 ">
            <span className="text-[18px] font-[600]">{comment.name}</span>
            <RatingGroup.Root colorPalette="orange" style={{direction: currentLanguage === 'fa' ? "rtl" : "ltr"}}
                              readOnly count={5}
                              defaultValue={+comment.rating} size="md">
                <RatingGroup.HiddenInput/>
                <RatingGroup.Control style={{direction: currentLanguage === 'fa' ? "rtl" : "ltr"}}>
                    {Array.from({length: 5}).map((_, index) => (<RatingGroup.Item key={index} index={index + 1}>
                        <RatingGroup.ItemIndicator icon={<StarIcon/>}/>
                    </RatingGroup.Item>))}
                </RatingGroup.Control>
            </RatingGroup.Root>
        </div>
        <span className="text-[18px] font-[600]">{comment.comment}</span>
    </div>
}
export default CommentsCard;