import BannersOne from "../components/BannersOne";
import BannersTwo from "../components/BannersTwo";
import HeroSection from "../components/HeroSection";
import TopCategories from "../components/TopCategories";
import TicketShapedCard from "@/components/ticketShapedCard/TicketShapedCard";
import Comments from "@/app/components/comments/Comments";

export default async function Home() {
    return (
        <main className="container grid gap-[30px] py-[20px]">
            <HeroSection/>
            <TopCategories/>
            <BannersOne/>
            <TicketShapedCard position="top"/>
            <BannersTwo/>
            <Comments/>
            <TicketShapedCard position="bottom"/>
        </main>
    );
}
