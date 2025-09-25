import React from 'react'
import Navbar from '../components/navebar/NaveBar'
import ProductPage from '../components/product-page/ProductPage'
import Footer from '../components/footer/Footer'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
      const {productid} = useParams();
  return (
      
    <div>
      <Navbar/>
      <ProductPage id={productid}/>
      <Footer/>
    </div>
  )
}

export default ProductDetails