import React, { useState, Fragment } from "react";

export const Person = (props) => {
  const [state, setState] = useState(props.initState);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    props.handleSubmit(state);
  };

  return (
    <Fragment>
      <div data-test="person-container">
        {props.children({ state, onChange })}
      </div>
      <button onClick={onSubmit}></button>
    </Fragment>
  );
};
