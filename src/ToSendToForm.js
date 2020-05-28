import React, { Fragment } from "react";
import { Form } from "./Form";
import "./App.css";
export const ToSendToForm = () => {
  const handleSubmit = (state) => {
    console.log("IM FROM TOSENDTOFORM", state);
  };
  return (
    <div className="App">
      <Form
        initialData={{
          username: "",
          email: "",
          password: "",
          password2: "",
        }}
        handleSubmit={handleSubmit}
      >
        {({ state, onChange }) => {
          const { username, email, password, password2 } = state;
          return (
            <Fragment>
              <label>Username</label>
              <input
                name="username"
                type="text"
                onChange={onChange}
                value={username || ""}
              />
              <label>Email</label>
              <input
                name="email"
                type="email"
                onChange={onChange}
                value={email || ""}
              />
              <label>Password</label>
              <input
                name="password"
                type="text"
                onChange={onChange}
                value={password || ""}
              />
              <label>Confirm password</label>
              <input
                name="password2"
                type="text"
                onChange={onChange}
                value={password2 || ""}
              />
            </Fragment>
          );
        }}
      </Form>
    </div>
  );
};
