import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./Theme";
import Navbar from "./Components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth";
import NotFound from "./Pages/NotFound";
export default function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{ backgroundColor: "background.default", minHeight: "70vh" }}
        component={"main"}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/cart"
            element={token ? <Cart /> : <Navigate to={"/auth"} />}
          />
          <Route
            path="/products/:categoryId/:categoryName"
            element={<Products />}
          />
          <Route
            path="/product-details/:id/:name"
            element={<ProductDetails />}
          />
          <Route
            path="/auth"
            element={!token ? <Navigate to={"/profile"} /> : <Auth />}
          />
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to={"/auth"} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
