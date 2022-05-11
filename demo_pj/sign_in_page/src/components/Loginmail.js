import React, { useState } from "react";
import "../styles/Login.css";
import { useMoralis } from "react-moralis";

function Loginmail() {
  const { login } = useMoralis();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <div
        className="sign-up"
        style={{
          marginTop: 150,
        }}
      >
        <div
          style={{
            padding: 10,
          }}
        >
          <input
            placeholder="enter Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            style={{
              padding: 10,
            }}
          />
        </div>
        <div
          style={{
            padding: 10,
          }}
        >
          <input
            placeholder="enter Password"
            type="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            style={{
              padding: 10,
            }}
          />
        </div>
        <button className="login-button" onClick={login}>
          login
        </button>
      </div>
    </div>
  );
}

export default Loginmail;
