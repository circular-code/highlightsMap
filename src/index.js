import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.unregister();
//   navigator.serviceWorker
//     .register("./sw.js", { scope: "../" })
//     .then(function() {
//       console.log("Service Worker Registered");
//     })
//     .catch(function(err) {
//       console.log("Service Worker Failed to Register", err);
//     });
// }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
