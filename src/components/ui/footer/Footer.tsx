import FooterTitle from "./FooterTitle";

const Footer = () => {
  return (
    <footer className="container !mt-[30px] flex flex-col gap-5">
      <div className="some-features relative flex justify-evenly rounded-[24px] border-2 !border-background p-[25px]">
        <FooterTitle />
      </div>
    </footer>
  );
};

export default Footer;
