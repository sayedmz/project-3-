import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./all.min.css";
import App from "./App";
import { BrowserRouter as Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Routes>
      <App />
    </Routes>
  </>
);
