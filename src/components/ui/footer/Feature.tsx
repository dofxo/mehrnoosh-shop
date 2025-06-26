import Image from "next/image";

interface FeatureProps {
  title: string;
  subtitle: string;
  imgUrl: string;
}

const Feature = ({ title, subtitle, imgUrl }: FeatureProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="img flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-white">
        <Image src={imgUrl} width={30} height={30} alt={title} />
      </div>
      <div className="title flex flex-col gap-2">
        <h3 className="text-[16px] font-bold text-text-primary">{title}</h3>
        <p className="text-[15px] text-text-secondary">{subtitle}</p>
      </div>
    </div>
  );
};

export default Feature;
