import { useState } from "react";
import "../styles/Login.css";
import { useMoralis } from "react-moralis";
import Login from "./Login";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Completion from "./Completion";
// import { Button, Input } from "@chakra-ui/react";
// import { Container, Heading } from "@chakra-ui/layout";

function Signup() {
  const { signup } = useMoralis();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <div className="sign-up">
        <input
          placeholder="enter Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          placeholder="enter Password"
          type="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
        <button
          className="login-button"
          onClick={() => signup(email, password)}
        >
          Sign up
        </button>
        {/* 
        <Router>
          <Link to="completion">already have an account?</Link>
          <Route exact path="/" component={Completion} />
        </Router> */}
      </div>
    </div>
  );
}

export default Signup;
