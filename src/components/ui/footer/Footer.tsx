import FooterTitle from "./FooterTitle";
import Features from "@/components/ui/footer/Features";

const Footer = () => {
  return (
    <footer className="container !mt-[30px] flex flex-col gap-5 pb-20 md:p-0">
      <div className="some-features relative rounded-[24px] border-2 border-[#E4E9F2] p-[25px]">
        <FooterTitle />
        <Features />
      </div>
    </footer>
  );
};

export default Footer;
