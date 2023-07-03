import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";

import "./sass/style.scss";
import { Land } from "./pages/Land.jsx";
import { Item } from "./pages/Item.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/:item/:id" element={<Item />} />
          <Route path="/:item" element={<Land />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
