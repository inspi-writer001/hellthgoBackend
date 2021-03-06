import { useState } from "react";
import "../styles/Login.css";
import { useMoralis } from "react-moralis";

function Signup() {
  const { signup } = useMoralis();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="">
      <div
        className="sign-up"
        style={{
          marginTop: 10,
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
        <button
          className="login-button"
          onClick={() => signup(email, password)}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Signup;
