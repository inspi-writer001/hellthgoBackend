import React from "react";
import "../styles/Login.css";


import { useMoralis } from "react-moralis";

import InnerCompletion from "./InnerCompletion";

function Completion() {
  return (
    <div>
      {/* <div style={{ "z-index": number }}><Loginmail /></div> */}
      <InnerCompletion />
    </div>
  );
}

export default Completion;
