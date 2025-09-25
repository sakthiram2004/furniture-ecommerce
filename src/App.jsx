import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import NaveBar from "./components/navebar/NaveBar.jsx"
import NavCategorySlider from "./components/CategorySlider/CategorySlider.jsx"
import Footer from "./components/footer/Footer.jsx"
import ProfilePage from "./components/profile/ProfilePage.jsx"
import FavoritesPage from "./components/favor/FavoritesPage.jsx"
import CartPage from "./components/cart/CartPage.jsx"

// Pages
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import LoginPage from "./components/auth/LoginPage"
import SignupPage from "./components/auth/SignupPage"

const App = () => {
  return (
    <BrowserRouter basename="/furniture-ecommerce">
    

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:catname/:catid" element={<Products />} />
        <Route path="/product/:productid" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
