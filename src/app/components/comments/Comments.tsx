import Controls from "@/app/components/comments/Controls";
import CommentsSection from "@/app/components/comments/CommentsSection";

export interface IComment {
    comment: string,
    created_at: string,
    cons: string[],
    pros: string[],
    name: string,
    rating: string
}

const comments  = () => {
    return (
        <section className="container flex flex-col !my-10 md:flex-row items-center justify-between gap-5">
            <Controls />
            <CommentsSection/>
        </section>
    )
}
export default comments