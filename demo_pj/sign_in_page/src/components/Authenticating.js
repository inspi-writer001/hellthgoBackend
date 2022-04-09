import React from "react";
import { useMoralis } from "react-moralis";

function Authenticating() {
  const { authenticate, isUnauthenticated } = useMoralis();
  return (
    <div>
      <div className="login-card">Authenticating</div>
      {isUnauthenticated && (
        <button
          className="login-button with-wallet"
          onClick={() => authenticate()}
        >
          Login with wallet Address
        </button>
      )}
    </div>
  );
}

export default Authenticating;
