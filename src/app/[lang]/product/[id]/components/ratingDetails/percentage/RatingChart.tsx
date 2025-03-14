"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const RadialPercentageChart = ({
  totalRatingPercentage,
}: {
  totalRatingPercentage: number;
}) => {
  const data = {
    datasets: [
      {
        data: [totalRatingPercentage, 100 - totalRatingPercentage],
        backgroundColor: ["#0070FF", "#F2F6FB"],
        borderRadius: 20,
      },
    ],
  };

  const options = {
    cutout: "90%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative h-[120px] w-[120px]">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-[20px]">{totalRatingPercentage}%</span>
      </div>
    </div>
  );
};

export default RadialPercentageChart;
