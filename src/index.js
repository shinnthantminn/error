import App from "./App";
import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { Store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
