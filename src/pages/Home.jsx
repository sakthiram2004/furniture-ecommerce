import React from 'react'
import Navbar from '../components/navebar/NaveBar'
import CategorySlider from '../components/CategorySlider/CategorySlider'
import Banner from '../components/banner/Banner'
import ShowProducts from '../components/show-products/ShowProducts'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <CategorySlider/>
      <Banner/>
      <ShowProducts/>
      <Footer/>
    </div>
  )
}

export default Home