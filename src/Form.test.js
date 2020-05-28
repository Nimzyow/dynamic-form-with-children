import React from "react";
import { shallow } from "enzyme";

import { Form } from "./Form";

describe("Form.js", () => {
  let onSubmitSpy = jest.fn();
  let defaultData = {
    initialData: {},
    handleSubmit: onSubmitSpy,
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders form container to page", () => {
    const wrapper = shallow(<Form {...defaultData}>{() => {}}</Form>);
    const formContainer = wrapper.find("form");
    expect(formContainer.length).toBe(1);
  });
  it("can render children", () => {
    const wrapper = shallow(
      <Form {...defaultData}>
        {() => {
          return (
            <input data-test="test" type="text" name="username" value="">
              Meow
            </input>
          );
        }}
      </Form>
    );
    const inputElement = wrapper.find('[data-test="test"]');
    expect(inputElement.length).toBe(1);
    expect(inputElement.text()).toBe("Meow");
  });
  it("input text triggers onChange event", () => {
    const wrapper = shallow(
      <Form
        initialData={{
          username: "",
        }}
        handleSubmit={onSubmitSpy}
      >
        {({ state, onChange }) => {
          return (
            <input
              data-test="input-element"
              name="username"
              type="text"
              value={state.username || "Hi"}
              onChange={onChange}
            />
          );
        }}
      </Form>
    );
    let inputElement = wrapper.find('[data-test="input-element"]');

    inputElement.simulate("change", {
      target: { name: "username", value: "CHANGING THIS" },
    });

    inputElement = wrapper.find('[data-test="input-element"]');

    expect(inputElement.prop("value")).toBe("CHANGING THIS");
  });

  it("onSubmit sends the changed state", () => {
    const wrapper = shallow(
      <Form initialData={{ username: "" }} handleSubmit={onSubmitSpy}>
        {({ state, onChange }) => {
          return (
            <input
              data-test="input-element"
              name="username"
              type="text"
              value={state.username || "Meow"}
              onChange={onChange}
            />
          );
        }}
      </Form>
    );
    const inputElement = wrapper.find('[data-test="input-element"]');

    inputElement.simulate("change", {
      target: { name: "username", value: "CHANGING THIS" },
    });

    const buttonElement = wrapper.find("button");

    buttonElement.simulate("click");

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy).toHaveBeenCalledWith({ username: "CHANGING THIS" });
  });

  it("onChange changes value of dropdown option", () => {
    const select = ["one", "two", "three"];

    const wrapper = shallow(
      <Form initialData={{ optionSelected: "one" }}>
        {({ state, onChange }) => {
          return (
            <select
              data-test="select-test"
              value={state.optionSelected}
              name="selection"
              onChange={onChange}
            >
              {select.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          );
        }}
      </Form>
    );
    let selectElement = wrapper.find('[data-test="select-test"]');

    selectElement.simulate("change", {
      target: { name: "optionSelected", value: select[1] },
    });

    selectElement = wrapper.find('[data-test="select-test"]');

    expect(selectElement.prop("value")).toBe("two");
  });
  it("checkbox form triggers onCheckBoxChange", () => {
    const wrapper = shallow(
      <Form initialData={{ tags: [] }} handleSubmit={onSubmitSpy}>
        {({ state, onCheckBoxChange }) => {
          return (
            <input
              data-test="test"
              name="tags"
              value="Fantasy"
              onChange={onCheckBoxChange}
              belongsto="tags"
            />
          );
        }}
      </Form>
    );

    const checkboxElement = wrapper.find('[data-test="test"]');

    checkboxElement.simulate("change", {
      target: {
        name: "Fantasy",
        checked: true,
        attributes: { belongsto: { value: "tags" } },
      },
    });

    const buttonElement = wrapper.find("button");

    buttonElement.simulate("click");

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy).toHaveBeenCalledWith({ tags: ["Fantasy"] });
  });
  it("checkbox clicked twice will result in nothing being sent", () => {
    const wrapper = shallow(
      <Form initialData={{ tags: [] }} handleSubmit={onSubmitSpy}>
        {({ state, onCheckBoxChange }) => {
          return (
            <input
              data-test="test"
              name="tags"
              value="Fantasy"
              onChange={onCheckBoxChange}
              belongsto="tags"
            />
          );
        }}
      </Form>
    );

    const checkboxElement = wrapper.find('[data-test="test"]');

    checkboxElement.simulate("change", {
      target: {
        name: "Fantasy",
        checked: true,
        attributes: { belongsto: { value: "tags" } },
      },
    });

    checkboxElement.simulate("change", {
      target: {
        name: "Fantasy",
        checked: false,
        attributes: { belongsto: { value: "tags" } },
      },
    });

    const buttonElement = wrapper.find("button");

    buttonElement.simulate("click");

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy).toHaveBeenCalledWith({ tags: [] });
  });
});
