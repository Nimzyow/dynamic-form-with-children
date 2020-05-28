import React from "react";
import { shallow } from "enzyme";

import { Person } from "./Person";

describe("Person.js", () => {
  let onSubmitSpy = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders person component correctly", () => {
    const wrapper = shallow(<Person>{() => {}}</Person>);
    const personContainer = wrapper.find('[data-test="person-container"]');
    expect(personContainer.length).toBe(1);
  });
  it("renders children properly", () => {
    const wrapper = shallow(
      <Person>
        {() => {
          return <div data-test="test">Hello</div>;
        }}
      </Person>
    );
    const testContainer = wrapper.find('[data-test="test"]');

    expect(testContainer.length).toBe(1);
  });
  it("onChange changes value of name", () => {
    const wrapper = shallow(
      <Person initState={{ name: "" }}>
        {({ state, onChange }) => {
          return (
            <input
              data-test="text-test"
              type="text"
              name="name"
              value={state.name || ""}
              onChange={onChange}
            />
          );
        }}
      </Person>
    );

    let inputElement = wrapper.find('[data-test="text-test"]');

    inputElement.simulate("change", {
      target: { name: "name", value: "CHANGING THIS" },
    });

    inputElement = wrapper.find('[data-test="text-test"]');

    expect(inputElement.prop("value")).toBe("CHANGING THIS");
  });
  it("onSubmit returns state", () => {
    const wrapper = shallow(
      <Person initState={{ name: "" }} handleSubmit={onSubmitSpy}>
        {({ state, onChange }) => {
          return (
            <input
              data-test="text-test"
              type="text"
              name="name"
              value={state.name || ""}
              onChange={onChange}
            />
          );
        }}
      </Person>
    );

    const inputElement = wrapper.find('[data-test="text-test"]');

    inputElement.simulate("change", {
      target: { name: "name", value: "CHANGING THIS" },
    });

    const buttonElement = wrapper.find("button");

    buttonElement.simulate("click");

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy).toHaveBeenCalledWith({ name: "CHANGING THIS" });
  });
});
