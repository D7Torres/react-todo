import React from "react";
import { mount } from "enzyme";
import { ToDoItemLabel } from "../ToDoItemLabel.logic";

describe("<ToDoItemLabel />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ToDoItemLabel label="A label" isEditEnabled={false} />);
  });

  describe("Render", () => {
    test("it does not crash", () => {
      expect(wrapper.find("label").length).toBeGreaterThan(0);
    });

    test("the label renders", () => {
      expect(wrapper.find("label").text()).toBe("A label");
    });

    test("the label is crossed when the isCross prop is true", () => {
      wrapper.setProps({
        isCrossed: true
      });
      expect(wrapper.find("label").prop("className")).toBe("crossed");
    });
  });

  describe("Behaviour", () => {
    test("should render the editable label when the label is clicked", () => {
      const label = wrapper.find("label");
      label.simulate("click");
      const textField = wrapper.find("TextField");
      const value = textField.find("input[type='text']").prop("value");

      expect(textField).toHaveLength(1);
      expect(value).toBe("A label");
    });
  });
});
