import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Pizza from "../components/Pizza";
import Pasta from "../components/Pasta";
import Wraps from "../components/Wraps";
import Desserts from "../components/Desserts";
import Drinks from "../components/Drinks";
import Basket from "../components/Basket";

function MainContainer() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/pasta" element={<Pasta />} />
        <Route path="/wraps" element={<Wraps />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
  );
}

export default MainContainer;
