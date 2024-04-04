import { BrowserRouter, Routes, Route } from "react-router-dom";
import header from "../src/components/header/header.js";
import React from "react";
import "./App.scss";
import Header from "../src/components/header/header.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>{/* <Route path="/recommendations" element={} /> */}</Routes>
      <Routes>{/* <Route path="/movies" element={} /> */}</Routes>
      <Routes>{/* <Route path="/showtimesCinemas" element={} /> */}</Routes>
    </BrowserRouter>
  );
}

export default App;
