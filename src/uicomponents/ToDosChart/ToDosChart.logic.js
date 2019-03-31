import React from "react";
import {
  ToDosChartPresentation,
  tooltipPresentation
} from "./ToDosChart.presentation";
import { ToDosContext } from "../../contexts/ToDosContext";

const todos2ChartData = todos => {
  return Object.values(todos).map(({ id, label, urgency, importance }) => {
    return {
      id: `${id} ${label}`,
      data: [{ x: urgency, y: importance }]
    };
  });
};

const tooltip = ({ id, x, y }) => {
  const label = id.substring(id.indexOf(" ") + 1, id.lastIndexOf("."));
  return tooltipPresentation(label, x, y);
};

const ToDosChart = () => (
  <ToDosContext.Consumer>
    {({ todos }) => (
      <ToDosChartPresentation
        tooltip={tooltip}
        chartData={todos2ChartData(todos)}
      />
    )}
  </ToDosContext.Consumer>
);

export { ToDosChart, tooltip };
