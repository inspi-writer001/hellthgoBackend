import React from "react";
import "../styles/Login.css";

import { useMoralis } from "react-moralis";

function InnerCompletion() {
  const {
    authenticate,
    logout,
    isAuthenticated,
    isUnauthenticated,
    authError,
    user,
  } = useMoralis();

  let number = -12;

  const changeWidth = () => {
    <button
      style={{
        flex: 1,
        color: "rgb(50, 162, 99)",
        borderRadius: "40px",
        "box-shadow": "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        padding: 20,
        border: "none",
        width: 10,
      }}
    >
      Hi, {user.get("username")}
    </button>;
  };
  return (
    <div>
      <div className="error-message">
        {authError && (
          <div className="sign-in-container">
            <p className="error-message">
              {authError.name}
              {authError.message}
            </p>

            <button
              className="login-button with-wallet"
              onClick={() => authenticate()}
              style={{ "margin-top": 0 }}
            >
              Login with wallet Address
            </button>
            <div>or</div>

            <button
              className="login-button with-wallet"
              onClick={(e) => {
                e.preventDefault();
                number = 20;
              }}
            >
              {/* <Link to="/Loginmail">Login with email</Link> */}
              Login with email
            </button>
          </div>
        )}
      </div>
      {isAuthenticated && (
        <div
          style={{
            width: "fit-content",
            display: "flex",
            "flex-direction": "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              flex: 1,
              color: "rgb(50, 162, 99)",
              borderRadius: "40px",
              "box-shadow": "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              padding: 20,
              border: "none",
              backgroundColor: "white",
            }}
            onClick={() => changeWidth}
          >
            Hi, {user.get("username")}
          </button>
          <div
            style={{
              padding: 20,
            }}
          >
            You are logged in
          </div>
          <div>
            <button className="login-button" onClick={() => logout()}>
              Logout
            </button>
          </div>
        </div>
      )}

      {isUnauthenticated && (
        <button
          className="login-button with-wallet"
          onClick={() => authenticate()}
          style={{}}
        >
          Login with wallet Address
        </button>
      )}
    </div>
  );
}

export default InnerCompletion;
