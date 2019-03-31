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

    test("the todos data is formatted and passed to the ResponsiveScatterPlot component, filtering out the completed ones", () => {
      const expectedData = [
        { id: "2 My todo 2", data: [{ x: 0, y: 1 }] },
        { id: "3 My todo 3", data: [{ x: 5, y: 2 }] }
      ];

      expect(wrapper.find("ResponsiveScatterPlot").prop("data")).toEqual(
        expectedData
      );
    });

    describe("tooltip", () => {
      const chartData = [
        { id: "123 My Little Todo", data: [{ x: 3, y: 5 }] },
        { id: "456 My Little Todo 2", data: [{ x: 4, y: 2 }] },
        { id: "777 My Little Todo 3", data: [{ x: 4, y: 2 }] },
        { id: "888 My Little Todo 4", data: [{ x: 4, y: 2 }] }
      ];

      test("the tooltip function renders correcly", () => {
        const tooltipWrapper = mount(tooltip({ x: 3, y: 5 }, chartData));
        const label = tooltipWrapper.find(".tooltipLabel").text();
        const x = tooltipWrapper
          .find(".tooltipCoordinate")
          .at(0)
          .text();
        const y = tooltipWrapper
          .find(".tooltipCoordinate")
          .at(1)
          .text();

        expect(label).toBe("My Little Todo");
        expect(x).toBe("3");
        expect(y).toBe("5");
      });

      test("the tooltip renders all the todos that fall in the same position", () => {
        const tooltipWrapper = mount(tooltip({ x: 4, y: 2 }, chartData));

        const labels = tooltipWrapper.find(".tooltipLabel");
        const x = tooltipWrapper
          .find(".tooltipCoordinate")
          .at(0)
          .text();
        const y = tooltipWrapper
          .find(".tooltipCoordinate")
          .at(1)
          .text();

        expect(labels.at(0).text()).toBe("My Little Todo 2");
        expect(labels.at(1).text()).toBe("My Little Todo 3");
        expect(labels.at(2).text()).toBe("My Little Todo 4");
        expect(x).toBe("4");
        expect(y).toBe("2");
      });
    });
  });
});
