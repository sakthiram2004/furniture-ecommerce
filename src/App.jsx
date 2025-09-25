import {React,useState} from 'react'
import NaveBar from './components/navebar/NaveBar'
import NavCategorySlider from './components/CategorySlider/CategorySlider'
import Banner from './components/banner/Banner'
import ShowProducts from './components/show-products/ShowProducts'
import Footer from './components/footer/Footer'
import ProductPage from './components/product-page/ProductPage'
import ProductList from './components/productlist/ProductList '
import ProfilePage from './components/profile/ProfilePage'
import FavoritesPage from './components/favor/FavoritesPage'
import CartPage from './components/cart/CartPage'
import CategorySlider from './components/CategorySlider/CategorySlider'
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import LoginPage from './components/auth/LoginPage'
import SignupPage from './components/auth/SignupPage'

const App = () => {
  return (
    <>
      {/* <NaveBar/>
      <NavCategorySlider/>
      <Banner/>
      <ShowProducts/>
      <ShowProducts/>
      <ShowProducts/>
      <Footer/>
      
      <ProductPage/> 
      <ProductList/>
      <ProfilePage/>
      <FavoritesPage/>
      <CartPage/>
      <CategorySlider/> */}
      
    <BrowserRouter basename="/furniture-ecommerce">
  <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<Products />} path="/category/:catname/:catid" />
    <Route element={<ProductDetails />} path="/product/:productid" />
    <Route element={<LoginPage />} path="/login" />
    <Route element={<SignupPage />} path="/signup" />
    <Route element={<ProfilePage />} path="/profile" />
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App