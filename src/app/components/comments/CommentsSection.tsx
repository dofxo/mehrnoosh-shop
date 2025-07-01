"use client";

import {useAppSelector} from "@/lib/hooks";
import {useEffect, useRef, useState} from "react";
import {IProduct} from "@/app/[lang]/product/[id]/Product";
import {IComment} from "@/app/components/comments/Comments";
import CommentsLoader from "@/app/components/comments/CommentsLoader";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import CommentsCard from "@/app/components/comments/CommentCard";


const CommentsSection = () => {
    const {productsData} = useAppSelector((state) => state.productsData);
    const {languageData} = useAppSelector((state) => state.language);
    const [comments, setComments] = useState<IComment[] | null>(null)

    useEffect(() => {
        const convertedComments: IComment[] = []
        const comments = productsData?.map((product: IProduct) => {
            if (product.comments.length > 0) return product.comments
        }).filter(Boolean)
        if (!comments) return

        comments.forEach((comment) => {
            if (!comment) return
            comment.forEach(comment => convertedComments.push(comment))
        })

        setComments(convertedComments)
    }, [productsData])

    // return loader if comments are not loaded yet
    if (!comments) return <CommentsLoader/>

    // return no comments text if there is none
    if (comments.length === 0) return <div className="flex justify-center w-full"><span
        className="text-yellow-600 text-xl font-bold">{languageData.landing.comments.no_comments}</span></div>

    return <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        navigation={{
            nextEl: ".button-next", prevEl: ".button-prev",
        }}
        breakpoints={{1190: {slidesPerView: 3}, 670: {slidesPerView: 2}, 360: {slidesPerView: 1}}}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
        }}
        modules={[Autoplay, Navigation]}
        className="h-full w-full"

    >
        {comments.map((comment, idx) => (<SwiperSlide key={idx} className='p-5'>
            <CommentsCard comment={comment}/>
        </SwiperSlide>))}
    </Swiper>
}
export default CommentsSection;