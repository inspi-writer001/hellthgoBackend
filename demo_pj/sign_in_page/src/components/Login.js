import React from "react";
import "../styles/Login.css";
import { useMoralis } from "react-moralis";
import Authenticating from "./Authenticating";
import Completion from "./Completion";
import Signup from "./Signup";

function Login() {
  const {
    authenticate,
    signup,
    isAuthenticating,
    isUnauthenticated,
    authError,
  } = useMoralis();

  return (
    <div className="login-container">
      <div className="login-card">
        {isUnauthenticated && <Signup />}
        {isAuthenticating && <Authenticating />}
        <Completion />
      </div>
    </div>
  );
}

export default Login;
