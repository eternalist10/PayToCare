import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider, useContract } from "@thirdweb-dev/react";

import App from "./app";
import "./index.css";
import { StateContextProvider } from "./context/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    activeChain="goerli"
    desiredChainId={ChainId.Goerli}
    clientId="1ce5ff4cc7ce8141f1d410325b5f9232"
  >
    <Router>
      <StateContextProvider>
        <App></App>
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
