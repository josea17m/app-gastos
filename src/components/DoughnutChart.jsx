/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const DoughnutChart = ({ budget, spent }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data.datasets[0].data = [budget, spent];
      chartRef.current.update();
    } else {
      const ctx = document.getElementById("myChart").getContext("2d");
      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Budget", "Spent"],
          datasets: [
            {
              label: "Budget vs Spent",
              data: [budget, spent],
              backgroundColor: ["#083C74", "#99f6e4"],
            },
          ],
        },
      });
    }
  }, [budget, spent]);

  return <canvas data-aos-duration="500" data-aos="zoom-in" id="myChart" className="w-dvw h-full"></canvas>;
};

export default DoughnutChart;
