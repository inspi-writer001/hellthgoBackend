import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import { applicationId, serverUr } from "./environment/envs.js";
import App from "./App";
import { MoralisProvider } from "react-moralis";
//import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <MoralisProvider
    appId="xFkIO4dV2c5OadSDtErbCqONs9xaygKlbezZxgFJ"
    serverUrl="https://bjzxb8bjqhnz.usemoralis.com:2053/server"
  >
    <React.StrictMode>
      <App />
      {console.log(`Hello ${process.env}`)}
    </React.StrictMode>
  </MoralisProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
