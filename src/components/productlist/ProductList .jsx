import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { NavLink } from "react-router-dom";

const ProductList = ({ name, id }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // start loading
      setError(null);   // reset error
      try {
        const response = await fetch(`http://localhost:8081/api/user/productvariant/category/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false); // stop loading
      }
    };

    if (id) {
      fetchProducts();
    }
  }, [id]);

  if (loading) {
    return <p className="loading-message">Loading products...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (products.length === 0) {
    return <p className="no-products-message">No products found for this category.</p>;
  }

  return (
    <div className="product-list-page">
      <h2 className="page-title">{name || "Products"}</h2>
      <div className="product-grid">
        {products.map((item) => (
          <NavLink key={item.id} to={`/product/${item.id}`}>
            <div className="product-card">
              <div className="product-card-image">
                <img 
                  src={item.imageUrl || "https://via.placeholder.com/200"} 
                  alt={item.name} 
                />
              </div>
              <h3 className="product-card-title">{item.name}</h3>
              <p className="product-card-price">
                {item.discountPrice ? (
                  <>
                    <span className="regular-price">₹{item.regularPrice}</span>{" "}
                    <span className="discount-price">₹{item.discountPrice}</span>
                  </>
                ) : (
                  <>₹{item.regularPrice || 0}</>
                )}
              </p>
              <div className="product-card-actions">
                <button className="btn add-to-cart">Add to Cart</button>
                <button className="btn buy-now">Buy Now</button>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
