import React from "react";
import { mount } from "enzyme";
import { ToDoItemLabel } from "../ToDoItemLabel.logic";

describe("<ToDoItemLabel />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ToDoItemLabel todoId="111" label="A label" isEditEnabled={false} />
    );
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
    describe("Editable", () => {
      beforeEach(() => {
        const label = wrapper.find("label");
        label.simulate("click");
      });

      test("the editable label should replace the normal label when the label is clicked", () => {
        const textField = wrapper.find("TextField");
        const value = textField.find("input[type='text']").prop("value");

        expect(textField).toHaveLength(1);
        expect(value).toBe("A label");
        expect(wrapper.find("label")).toHaveLength(0);
      });

      test("the normal label should replace the editable label when the editable label looses focus", () => {
        let textField = wrapper.find("TextField");
        const input = textField.find("input[type='text']");
        input.simulate("blur");
        textField = wrapper.find("TextField");
        const label = wrapper.find("label");

        expect(textField).toHaveLength(0);
        expect(label).toHaveLength(1);
        expect(label.text()).toBe("A label");
      });
    });
  });
});
