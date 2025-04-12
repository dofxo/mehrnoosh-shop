import Image from "next/image";

const BannersTwo = () => {
  return (
    <section className="flex flex-wrap gap-7 md:grid md:grid-cols-2">
      <Image
        src="/images/banners/bannerTwo-1.jpg"
        alt="banner"
        width={0}
        height={0}
        layout="responsive"
        className="rounded-[20px]"
      />
      <Image
        src="/images/banners/bannerTwo-2.jpg"
        alt="banner"
        width={0}
        height={0}
        layout="responsive"
        className="rounded-[20px]"
      />
    </section>
  );
};

export default BannersTwo;
