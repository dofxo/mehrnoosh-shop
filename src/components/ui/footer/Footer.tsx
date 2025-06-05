import FooterTitle from "./FooterTitle";
import Features from "@/components/ui/footer/Features";
import Location from "@/components/ui/footer/Location";
import MainSection from "@/components/ui/footer/main-section/MainSection";

const Footer = () => {
  return (
    <footer className="container !mt-[30px] flex flex-col gap-10 pb-20 md:p-0">
      <div className="some-features relative rounded-[24px] border-2 border-[#E4E9F2] p-[25px]">
        <FooterTitle />
        <Features />
      </div>
      <MainSection />
      <Location />
    </footer>
  );
};

export default Footer;
