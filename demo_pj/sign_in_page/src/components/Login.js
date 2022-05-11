import React from "react";
import "../styles/Login.css";
import { useMoralis } from "react-moralis";
import Authenticating from "./Authenticating";
import Completion from "./Completion";
import Signup from "./Signup";
import Loginmail from "./Loginmail";

function Login() {
  const { isAuthenticating, isUnauthenticated } = useMoralis();

  return (
    <div className="login-container">
      <div className="login-card">
        {isUnauthenticated && <Signup />}
        {isAuthenticating && <Authenticating />}

        <Completion />
      </div>
      <div className="login-card">
        <Loginmail />
      </div>
    </div>
  );
}

export default Login;
