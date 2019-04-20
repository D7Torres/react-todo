import React from "react";
import { mount } from "enzyme";
import { contextEmpty } from "../../../contexts/testData/ToDosContext";
let { ToDoList } = require("../ToDoList.logic");

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

    describe("When there are no todos", () => {
      beforeAll(() => {
        jest.doMock("../../../contexts/ToDosContext", () => ({
          ToDosContext: {
            Consumer: props => props.children(contextEmpty)
          }
        }));
        jest.resetModules();
        ToDoList = require("../ToDoList.logic").ToDoList;
      });

      test("a list is not rendered", () => {
        expect(wrapper.exists("ul")).toBe(false);
      });

      test("a message is shown", () => {
        const message = wrapper.text();

        expect(message).toContain("to add a To-Do");
      });
    });
  });
});
