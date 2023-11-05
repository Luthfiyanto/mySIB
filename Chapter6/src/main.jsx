import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CarsApp from "./CarsApp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterContextProvider from "./context/FilterContext.jsx";
import "./assets/css/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="home" element={<App />} />
        <Route
          path="cars"
          element={
            <FilterContextProvider>
              <CarsApp />
            </FilterContextProvider>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
