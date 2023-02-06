import { useEffect, useRef } from "react";
import React from "react";
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartDataset,
  registerables,
} from "chart.js";
Chart.register(...registerables);

export type DataSetType = {
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
  childOwnDataSet,
}: {
  dataSet: DataSetType;
  name: { name: string; x: string; y: string };
  childOwnDataSet: number[][];
}) => {
  let flatChildDataSet = Array(dataSet.length);
  childOwnDataSet.forEach((item) => {
    flatChildDataSet[item[0]] = item[1];
  });
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
        "98th (97.7th)",
      ]
        .map((nth, key) => ({
          label: nth,
          borderColor: colors[key],
          backgroundColor: colors[key],
          data: dataSet.map((item) => Number(item[nth as keyof typeof item])),
          order: 4,
        }))
        .concat([
          {
            label: "Baby",
            borderColor: "#ff7370",
            backgroundColor: "#ff7370",
            data: flatChildDataSet,
            order: 0,
          },
        ]),
    [childOwnDataSet, dataSet]
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
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              color: "#2999c6",
              display: true,
              text: name.x,
            },
          },
          y: {
            title: {
              color: "#2999c6",
              display: true,
              text: name.y,
            },
          },
        },
      },
    };
    const chart = new Chart(ref.current!, config);
    return () => {
      chart.destroy();
    };
  }, [dataSet, childOwnDataSet]);
  return (
    <>
      <div className="relative w-full lg:w-[60rem]">
        <canvas ref={ref}></canvas>
      </div>
    </>
  );
};
export default BabyChart;
