import axios from "axios";
import HomePage from "./pages/HomePage/HomePage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/add-product" element={<AddProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
