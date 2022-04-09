import React from "react";
import "../styles/Login.css";
import image from "./images/moralis-logo.png";
import { useMoralis } from "react-moralis";

function Completion() {
  const {
    authenticate,
    signup,
    logout,
    isAuthenticated,
    isUnauthenticated,
    authError,
  } = useMoralis();
  return (
    <div className="login-card">
      {/* <img
        className="logo"
        width={100}
        height={100}
        alt="moralis Logo"
        src={image}
      /> */}
      <div className="sign-in-container">
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
              >
                Login with wallet Address
              </button>
            </div>
          )}
        </div>
        {isAuthenticated && (
          <div>
            <div>You are logged in</div>
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
          >
            Login with wallet Address
          </button>
        )}
      </div>
    </div>
  );
}

export default Completion;
