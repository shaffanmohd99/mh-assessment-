import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData, options }) => {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Number of comment per post",
            },
            legend: {
              display: false,
            },
          },
          ...options,
        }}
      />
    </div>
  );
};
