import { Button } from "@/components/ui/button";
import BottomSection from "@/components/ui/footer/main-section/BottomSection";
import TopSection from "@/components/ui/footer/main-section/TopSection";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";

const MainSection = () => {
  return (
    <div className="main-section flex flex-col justify-between gap-5 md:flex-row">
      {/* right section */}
      <div className="flex min-h-[250px] w-full items-center justify-center rounded-[25px] bg-primary p-[20px] md:w-[30%]">
        <Image
          src="/images/logo.png"
          width={0}
          layout="responsive"
          height={0}
          alt="logo"
          className="max-w-[150px] rounded-[50%]"
        />
      </div>
      {/* middle section */}
      <div className="flex flex-col justify-between gap-5 rounded-[25px] bg-[#E4E9F2] p-[25px]">
        <TopSection />
        <BottomSection />
      </div>
      {/* left section */}
      <div className="flex w-full items-center justify-between gap-5 md:w-fit md:flex-col">
        <div className="flex items-center gap-4">
          <Image
            src="/images/landing/footer/enamad.png"
            width={0}
            height={0}
            layout="responsive"
            alt="logo"
            className="!w-[90px]"
          />
          <Image
            src="/images/landing/footer/samandehi.png"
            width={0}
            height={0}
            layout="responsive"
            alt="logo"
            className="!w-[90px]"
          />
        </div>
        <a href="tel:09123456789" className="flex items-center gap-4">
          <span className="text-[18px] font-bold text-text-primary">
            09123456789
          </span>
          <Button className="h-8 w-8 rounded-[50%] md:h-16 md:w-16">
            <FiPhoneCall className="!max-w-4 md:max-w-none" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default MainSection;
