import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Stateprovider } from "./utils/stateProvider";
import reducer, { intialState } from "./utils/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Stateprovider intialState={intialState} reducer={reducer}>
      <App />
    </Stateprovider>
  </React.StrictMode>
);
