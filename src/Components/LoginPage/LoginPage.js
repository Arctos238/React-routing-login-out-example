import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const loginHandler = () => {
    props.changeLoginHandler();
  };

  return (
    <>
      <div>LoginPage</div>
      <LoginForm changeLoginHandler={loginHandler}></LoginForm>
    </>
  );
};

export default LoginPage;
