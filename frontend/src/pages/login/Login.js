import React from "react";
import LoginForm from "./LoginForm";

const Login = ({ isLoggedUser }) => {

  return (
    <>
      <LoginForm isLoggedUser={isLoggedUser} />
    </>
  );
};

export default Login;
