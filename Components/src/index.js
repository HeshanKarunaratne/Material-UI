import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
ReactDOM.render(
  <React.Fragment>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);
registerServiceWorker();
