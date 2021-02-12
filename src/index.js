import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./null.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import state from './data/state.js'

ReactDOM.render(<App state={state}/>, document.getElementById("root"));

reportWebVitals();
