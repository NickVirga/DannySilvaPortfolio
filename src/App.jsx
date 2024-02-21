import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedPage from "./pages/ProtectedPage/ProtectedPage";

import imageData from "./assets/data/images.json";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
