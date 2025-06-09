import Controls from "@/app/components/comments/Controls";

const comments  = () => {
    return (
        <section classname="container flex items-center justify-between gap-5">
            <Controls />
            <div classname="" id="comments"></div>
        </section>
    )
}
export default comments