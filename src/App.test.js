import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });
  describe("Render", () => {
    test("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    test("the todo list is rendered and the chart is not", () => {
      expect(wrapper.find("ToDoList")).toHaveLength(1);
      expect(wrapper.find("ToDosChart")).toHaveLength(0);
    });
  });

  describe("Behaviour", () => {
    describe("Clicking in the chart tab", () => {
      let tab;

      beforeEach(() => {
        tab = wrapper.find("Tab[label='Chart']");
        tab.simulate("click");
      });

      test("the chart is rendered and the todo list is not", () => {
        expect(wrapper.find("ToDosChart")).toHaveLength(1);
        expect(wrapper.find("ToDoList")).toHaveLength(0);
      });

      describe("Clicking in the ToDos tab to go back", () => {
        beforeEach(() => {
          tab = wrapper.find("Tab[label='To Dos']");
          tab.simulate("click");
        });

        test("the todo list is rendered and the chart is not", () => {
          expect(wrapper.find("ToDoList")).toHaveLength(1);
          expect(wrapper.find("ToDosChart")).toHaveLength(0);
        });
      });
    });
  });
});
