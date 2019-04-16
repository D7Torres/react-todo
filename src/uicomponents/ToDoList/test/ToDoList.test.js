import React from "react";
import { mount } from "enzyme";
import { ToDoList } from "../ToDoList.logic";
import { context } from "../../../contexts/ToDosContext";

jest.mock("../../../contexts/ToDosContext");

describe("<ToDoList />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ToDoList />);
  });

  describe("Render", () => {
    test("it does not crash", () => {
      expect(wrapper.find("ul").length).toBeGreaterThan(0);
    });

    test("the list of todos in the context is rendered", () => {
      const items = wrapper.find("ul").find("li");

      expect(items.length).toBe(3);
      expect(items.at(0).text()).toContain("My todo 1");
      expect(items.at(1).text()).toContain("My todo 2");
      expect(items.at(2).text()).toContain("My todo 3");
    });
  });
});
