import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import { Navbar } from "../Components/Navbar";
import Product from "../Components/Product";

export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
      </Routes>
    </div>
  );
};
