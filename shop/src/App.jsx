import React from "react";
import Navbar from "./Components/Navbar/Index";
import Footer from "./Components/Footer/Index";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Index";
import ProductDetail from "./Pages/ProductDetail/Index";
import NotFound from "./Pages/NotFound/Index";
import Auth from "./Pages/Auth/Index";
import ProductCards from "./Pages/ProductCards/Index";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { CssBaseline } from "@mui/material";
export default function App() {
  const {token , user}=useSelector(state=>state.authSlice)
  return (
    <>
    <CssBaseline/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route
          path="/auth"
          element={token ? <Navigate to={"/"} /> : <Auth />}
        />
        <Route
          path="/productCards"
          element={!token ? <Navigate to={"/auth"} /> : <ProductCards />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster/>
    </>
  );
}
