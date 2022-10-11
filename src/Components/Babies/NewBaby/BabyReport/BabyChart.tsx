import { useEffect, useRef, useState } from "react";
import React from "react";
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartDataset,
  registerables,
} from "chart.js";
Chart.register(...registerables);

type DataSetType = {
  Month?: string;
  Length?: string;
  L: string;
  M: string;
  S: string;
  "2nd (2.3rd)": string;
  "5th": string;
  "10th": string;
  "25th": string;
  "50th": string;
  "75th": string;
  "90th": string;
  "95th": string;
  "98th (97.7th)": string;
}[];

const colors = [
  "#abddf1",
  "#97d5ee",
  "#82ccea",
  "#6dc4e7",
  "#58bbe3",
  "#43b3e0",
  "#2999c6",
  "#2588b0",
  "#20779a",
  "#1c6684",
  "#17556e",
  "#124458",
];
const BabyChart = ({
  dataSet,
  name,
  originalDS,
}: {
  dataSet: DataSetType;
  name: string;
  originalDS: number[];
}) => {
  const datasets: ChartDataset[] = React.useMemo(
    () =>
      [
        "2nd (2.3rd)",
        "5th",
        "10th",
        "25th",
        "50th",
        "75th",
        "90th",
        "95th",
        "98th",
        "(97.7th)",
      ]
        .map((nth, key) => ({
          label: nth,
          borderColor: colors[key],
          data: dataSet.map((item) => Number(item[nth as keyof typeof item])),
        }))
        .concat([
          {
            label: "Baby",
            borderColor: "#ff9b9a",
            data: originalDS,
          },
        ]),
    [originalDS]
  );
  const ref = useRef<HTMLCanvasElement>(null);
  const labels = dataSet.map((item) =>
    item["Month" as keyof typeof item]
      ? item["Month" as keyof typeof item]
      : item["Length" as keyof typeof item]
  );
  const data: ChartData = {
    labels: labels,
    datasets,
  };

  useEffect(() => {
    const config: ChartConfiguration = {
      type: "line",
      data: data,
    };
    const chart = new Chart(ref.current!, config);
    return () => {
      chart.destroy();
    };
  }, []);
  return (
    <>
      <div className="text-center text-gray-700">{name} </div>
      <div className="relative w-full sm:w-[35rem] md:w-[40rem] lg:w-[50rem] mx-auto">
        <canvas ref={ref}></canvas>
      </div>
    </>
  );
};
export default BabyChart;
