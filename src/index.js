import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { persistor, profileResult } from "./redux/profile";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={profileResult}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
