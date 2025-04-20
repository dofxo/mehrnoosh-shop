import Image from "next/image";

const Title = ({
  title,
  subTitle,
  image,
  color,
}: {
  title: string;
  subTitle: string;
  image: string;
  color?: { title?: string; subTitle?: string; imageBackground?: string };
}) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className="logo padding-[15px] flex h-[60px] w-[60px] items-center justify-center rounded-[10px] bg-white"
        style={{ backgroundColor: color?.imageBackground ?? "" }}
      >
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          layout="responsive"
          className="max-w-[30px]"
        />
      </div>
      <div className="title">
        <h3
          className="text-[18px] font-bold text-primary"
          style={{ color: color?.title ?? "" }}
        >
          {title}
        </h3>
        <h5
          className="text-text-secondary"
          style={{ color: color?.subTitle ?? "" }}
        >
          {subTitle}
        </h5>
      </div>
    </div>
  );
};

export default Title;
