import React from "react";
import { shallow } from "enzyme";

import { Person } from "./Person";

describe("Person.js", () => {
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
});
