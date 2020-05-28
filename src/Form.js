import React, { useState, Fragment } from "react";

export const Form = (props) => {
  const [state, setState] = useState(props.initialData);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    const arrayName = e.target.attributes.belongsto.value;

    let array = state[arrayName];
    array.push(name);

    if (checked) {
      onChange({ target: { name: arrayName, value: array } });
      return;
    }

    array = array.filter((item) => item !== name);
    onChange({ target: { name: arrayName, value: array } });
    return;
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
          onCheckBoxChange,
        })}
      </form>
      <button onClick={onSubmit}>Submit me</button>
    </Fragment>
  );
};
