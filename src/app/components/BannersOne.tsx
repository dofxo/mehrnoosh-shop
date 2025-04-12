import Image from "next/image";

const BannersOne = () => {
  return (
    <div className="flex flex-wrap gap-7 md:grid md:grid-cols-2">
      <Image
        src="/images/banners/bannerOne-1.jpg"
        alt="banner"
        width={0}
        height={0}
        layout="responsive"
        className="rounded-[20px]"
      />
      <Image
        src="/images/banners/bannerOne-2.jpg"
        alt="banner"
        width={0}
        height={0}
        layout="responsive"
        className="rounded-[20px]"
      />
    </div>
  );
};

export default BannersOne;
