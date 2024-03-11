import "./App.sass"
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LayoutPaintPage from "./pages/LayoutPaintPage/LayoutPaintPage"
import BluesCluesPage from "./pages/BluesCluesPage/BluesCluesPage";
import ElinorWondersPage from "./pages/ElinorWondersPage/ElinorWondersPage"
import OpenSeasonPage from "./pages/OpenSeasonPage/OpenSeasonPage"
import EmMemoriaPage from "./pages/EmMemoriaPage/EmMemoriaPage"
import PizzaPanicPage from "./pages/PizzaPanicPage/PizzaPanicPage"
import NotFoundPage from "./pages/NotFoundPage/NotFound"

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bgpaint" element={<LayoutPaintPage />} />
        <Route path="/bgpaint/:imageId" element={<LayoutPaintPage />} />
        <Route path="/bluescluesandyou" element={<BluesCluesPage />} />
        <Route path="/bluescluesandyou/:imageId" element={<BluesCluesPage />} />
        <Route path="/elinorwonderswhy" element={<ElinorWondersPage />} />
        <Route path="/elinorwonderswhy/:imageId" element={<ElinorWondersPage />} />
        <Route path="/openseason" element={<OpenSeasonPage />} />
        <Route path="/openseason/:imageId" element={<OpenSeasonPage />} />
        <Route path="/thesis-em-memoria" element={<EmMemoriaPage />} />
        <Route path="/thesis-em-memoria/:imageId" element={<EmMemoriaPage />} />
        <Route path="/pizza-panic-group-film" element={<PizzaPanicPage />} />
        {/* <Route path="/design" element={<DesignPage />} /> */}
        {/* <Route path="/resume" element={<ResumePage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
