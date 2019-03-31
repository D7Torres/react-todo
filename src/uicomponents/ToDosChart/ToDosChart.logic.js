import React from "react";
import {
  ToDosChartPresentation,
  tooltipPresentation
} from "./ToDosChart.presentation";
import { ToDosContext } from "../../contexts/ToDosContext";

const todos2ChartData = todos => {
  return Object.values(todos)
    .filter(({ isDone }) => !isDone)
    .map(({ id, label, urgency, importance }) => {
      return {
        id: `${id} ${label}`,
        data: [{ x: urgency, y: importance }]
      };
    });
};

const tooltip = ({ x, y }, chartData) => {
  const ids = chartData
    .filter(point => point.data[0].x === x && point.data[0].y === y)
    .map(({ id }) => id);

  return tooltipPresentation(ids, x, y);
};

const ToDosChart = () => (
  <ToDosContext.Consumer>
    {({ todos }) => {
      const chartData = todos2ChartData(todos);

      return (
        <ToDosChartPresentation
          tooltip={pointObject => tooltip(pointObject, chartData)}
          chartData={chartData}
        />
      );
    }}
  </ToDosContext.Consumer>
);

export { ToDosChart, tooltip };
