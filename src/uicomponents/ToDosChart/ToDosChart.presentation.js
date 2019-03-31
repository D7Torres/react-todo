import React from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import css from "./ToDosChart.module.css";
const tooltipPresentation = (label, x, y) => (
  <div className={css.tooltip}>
    <div className={css.tooltipLabel}>{label}</div>
    <div>
      <span>Urgency: </span>
      <span className={css.tooltipCoordinate}>{x}</span>
      <span>Importance: </span>
      <span className={css.tooltipCoordinate}>{y}</span>
    </div>
  </div>
);

const ToDosChartPresentation = ({ chartData, tooltip }) => (
  <div className={css.chart}>
    <ResponsiveScatterPlot
      tooltip={tooltip}
      data={chartData}
      margin={{
        top: 60,
        right: 90,
        bottom: 70,
        left: 90
      }}
      xScale={{
        type: "linear",
        min: 0,
        max: 5
      }}
      yScale={{
        type: "linear",
        min: 0,
        max: 5
      }}
      colors="set1"
      symbolSize={20}
      enableGridX={false}
      enableGridY={false}
      axisBottom={{
        orient: "bottom",
        legend: "- Urgency +",
        legendPosition: "middle",
        legendOffset: 40,
        tickValues: [0, 1, 2, 3, 4, 5]
      }}
      axisLeft={{
        orient: "left",
        legend: "-  Importance  +",
        legendPosition: "middle",
        legendOffset: -50,
        tickValues: [0, 1, 2, 3, 4, 5]
      }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      theme={{
        axis: {
          legend: {
            text: { fill: "white", fontSize: 16 }
          },
          ticks: { text: { fill: "white", fontSize: 12 } }
        }
      }}
    />
  </div>
);

export { ToDosChartPresentation, tooltipPresentation };
