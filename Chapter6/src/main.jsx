import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cars from "./Cars.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="home" element={<App />} />
        <Route path="cars" element={<Cars />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
