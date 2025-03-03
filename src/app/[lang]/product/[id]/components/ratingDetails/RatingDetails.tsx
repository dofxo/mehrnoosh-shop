import { IProduct } from "../../Product";
import RadialPercentageChart from "./RatingChart";
import RatingStatics from "./RatingStatics";

const RatingDetails = ({ productData }: { productData: IProduct }) => {
  const { comments } = productData;

  const totalRatingPercentage =
    ((comments.reduce((total, comment) => total + +comment.rating, 0) /
      comments.length) *
      100) /
    5;

  return (
    <section className="flex gap-5">
      {/* details */}
      <div className="w-[60%] rounded-[30px] bg-white p-[30px]"></div>
      {/* percentage */}
      <div className="flex w-[40%] items-center justify-start gap-[50px] rounded-[30px] bg-white p-[30px]">
        <RadialPercentageChart totalRatingPercentage={totalRatingPercentage} />
        <RatingStatics
          totalComments={comments.length}
          totalRatingPercentage={totalRatingPercentage}
        />
      </div>
    </section>
  );
};

export default RatingDetails;
