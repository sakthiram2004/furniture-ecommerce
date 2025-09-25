import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowProducts.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";import {baseurl} from "./../../configfile.js"

const screenWidth = window.innerWidth;

const ShowProducts = () => {
  const [productList, setProductList] = useState([]);
  const currentRef = useRef(null);
  const navigate = useNavigate();

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${baseurl}api/user/productvariant/all`);
        const data = await response.json();

        if (Array.isArray(data.data)) {
          // Fetch images for each product variant
          const productsWithImages = await Promise.all(
            data.data.map(async (product) => {
              try {
                const imgResponse = await fetch(
                  `${baseurl}api/user/productvariant/image/variant/${product.id}`
                );
                const imgData = await imgResponse.json();

                if (Array.isArray(imgData.data) && imgData.data.length > 0) {
                  const mainImg = imgData.data.find((img) => img.main);
                  product.mainImageUrl = mainImg ? mainImg.imageUrl : imgData.data[0].imageUrl;
                } else {
                  product.mainImageUrl = "https://via.placeholder.com/200";
                }
              } catch (err) {
                console.error(`Error fetching images for product ${product.id}:`, err);
                product.mainImageUrl = "https://via.placeholder.com/200";
              }
              return product;
            })
          );

          setProductList(productsWithImages);
        } else {
          console.error("Unexpected response:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Scroll handler
  const scroll = (element, direction) => {
    element.scrollBy({
      left: direction === "RIGHT" ? (screenWidth - 300) : (-screenWidth + 300),
      behavior: "smooth"
    });
  };

  return (
    <div className="product-display-container">
      <div className="product-title-bar">
        <h2 className="product-title">New Products</h2>
        <h5 className="view-all">View All</h5>
      </div>

      {/* Arrows */}
      <IoIosArrowBack 
        className="product-back-arrow" 
        onClick={() => scroll(currentRef.current, "LEFT")} 
      />
      <IoIosArrowForward 
        className="product-right-arrow" 
        onClick={() => scroll(currentRef.current, "RIGHT")} 
      />

      {/* Products */}
      <div className="product-slider-wrapper" ref={currentRef}>
        {productList.map((item) => (
          <div 
            className="product-card" 
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img 
              src={item.mainImageUrl} 
              alt={item.name} 
              className="product-image" 
            />
            <h4 className="product-name">{item.name}</h4>
            <h5 className="product-price">
              ₹{item.discountPrice ?? item.regularPrice}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;
