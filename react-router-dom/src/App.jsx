import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Product />}>
            <Route path=":productId" element={<ProductDetails />} />
          </Route>
          
          <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={() => <h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
