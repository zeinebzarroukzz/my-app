import React from "react";
import { useState } from "react";
import LoginSection from "../components/Login/Login";
import SignIn from "../components/Login/SignIn";

const Login = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleform = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      {currentForm === "login" ? (
        <LoginSection onFormSwitch={toggleform} />
      ) : (
        <SignIn onFormSwitch={toggleform} />
      )}
    </>
  );
};

export default Login;
