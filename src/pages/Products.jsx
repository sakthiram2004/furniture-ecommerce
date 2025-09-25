import {React} from 'react'
import Navbar from '../components/navebar/NaveBar'
import CategorySlider from '../components/CategorySlider/CategorySlider'
import ProductList from '../components/productlist/ProductList '
import Footer from '../components/footer/Footer'
import { useParams } from 'react-router-dom'

const Products = () => {
         const { catName,catid } = useParams();
  return (
    <div>
      <Navbar/>
      <CategorySlider/>
      <ProductList name={catName} id={catid}/>
      <Footer/>
    </div>
  )
}

export default Products