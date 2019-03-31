import React from "react";
import { mount } from "enzyme";
import { ToDosChart } from "..";
import { tooltip } from "../ToDosChart.logic";

jest.mock("../../../contexts/ToDosContext");

describe("<ToDosChart />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ToDosChart />);
  });

  describe("Render", () => {
    test("it does not crash", () => {
      expect(wrapper.find("div").length).toBeGreaterThan(0);
    });

    test("the chart is rendered", () => {
      expect(wrapper.find("ResponsiveScatterPlot")).toHaveLength(1);
    });

    test("the todos data is formatted and passed to the ResponsiveScatterPlot component", () => {
      const expectedData = [
        { id: "1 My todo 1", data: [{ x: 3, y: 4 }] },
        { id: "2 My todo 2", data: [{ x: 0, y: 1 }] },
        { id: "3 My todo 3", data: [{ x: 5, y: 2 }] }
      ];

      expect(wrapper.find("ResponsiveScatterPlot").prop("data")).toEqual(
        expectedData
      );
    });

    test("the tooltip function renders correcly", () => {
      // tooltip function is called with the id of the point and a '.0' at the end by the chart library
      const tooltipWrapper = mount(
        tooltip({ id: "123 My Little Todo.0", x: 3, y: 5 })
      );
      const label = tooltipWrapper.find(`.tooltipLabel`).text();
      const x = tooltipWrapper
        .find(`.tooltipCoordinate`)
        .at(0)
        .text();
      const y = tooltipWrapper
        .find(`.tooltipCoordinate`)
        .at(1)
        .text();

      expect(label).toBe("My Little Todo");
      expect(x).toBe("3");
      expect(y).toBe("5");
    });
  });
});
