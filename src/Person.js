import React from "react";

export const Person = (props) => {
  return <div data-test="person-container">{props.children({})}</div>;
};
