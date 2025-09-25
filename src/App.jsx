import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import NaveBar from './components/navebar/NaveBar'
import NavCategorySlider from './components/CategorySlider/CategorySlider'
import Banner from './components/banner/Banner'
import ShowProducts from './components/show-products/ShowProducts'
import Footer from './components/footer/Footer'
import ProductPage from './components/product-page/ProductPage'
import ProductList from './components/productlist/ProductList'
import ProfilePage from './components/profile/ProfilePage'
import FavoritesPage from './components/favor/FavoritesPage'
import CartPage from './components/cart/CartPage'
import CategorySlider from './components/CategorySlider/CategorySlider'

// Pages
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import LoginPage from './components/auth/LoginPage'
import SignupPage from './components/auth/SignupPage'

const App = () => {
  return (
    <BrowserRouter basename="/furniture-ecommerce">
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
    </BrowserRouter>
  )
}

export default App
