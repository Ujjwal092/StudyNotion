import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from "react-hot-toast";

//store creation
const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Provider Redux store ko pure React app me accessible bana deta hai. mtlb any comp can use useSelector/Dispatch */}
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
