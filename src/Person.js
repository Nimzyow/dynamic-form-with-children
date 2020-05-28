import React, { useState } from "react";

export const Person = (props) => {
  const [state, setState] = useState(props.initState);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div data-test="person-container">
      {props.children({ state, onChange })}
    </div>
  );
};
