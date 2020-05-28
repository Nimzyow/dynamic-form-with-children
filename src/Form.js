import React, { useState, useEffect, Fragment } from "react";

export const Form = (props) => {
  const [state, setState] = useState(props.initialData);

  useEffect(() => {
    console.log("STATE IS?", state);
  }, [state]);

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
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "30px",
        }}
      >
        {props.children({
          state,
          onChange,
        })}
      </form>
      <button onClick={onSubmit}>Submit me</button>
    </Fragment>
  );
};
