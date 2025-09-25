import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const response = await fetch(
          `http://localhost:8081/api/user/productvariant/${id}`
        );
        const data = await response.json();
        if (data.data) setProduct(data.data);

        const imageresponse = await fetch(
          `http://localhost:8081/api/user/productvariant/image/variant/${id}`
        );
        const imagedata = await imageresponse.json();
        if (Array.isArray(imagedata.data)) {
          setImages(imagedata.data);
          const mainImg = imagedata.data.find((img) => img.main);
          setCurrentImage(mainImg?.imageUrl || imagedata.data[0]?.imageUrl || null);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAction = (action) => {
    const isLoggedIn = localStorage.getItem("jwt");
    if (!isLoggedIn) {
      navigate("/login"); // redirect to login page
      return;
    }
    // Implement Add to Cart or Buy Now logic here
    console.log(`${action} successful`);
  };

  return (
    <div className="product-page">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          {currentImage && (
            <div className="current-product-image-box">
              <img src={currentImage} alt="Current Product" />
            </div>
          )}
          {images.length > 0 && (
            <ul className="product-image-list">
              {images.map((item) => (
                <li
                  key={item.id}
                  className={`product-images ${currentImage === item.imageUrl ? 'active' : ''}`}
                  onClick={() => setCurrentImage(item.imageUrl)}
                >
                  <img src={item.imageUrl} alt={`Thumbnail ${item.id}`} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="product-details">
          <h2 className="product-title">{product?.name || ''}</h2>
          <p className="product-description">{product?.description || ''}</p>
          <p className="product-field"><strong>Color:</strong> {product?.color}</p>
          <p className="product-field"><strong>Wood:</strong> {product?.wood}</p>

          <h3 className="price">
            {product?.discountPrice ? (
              <>
                <span className="regular-price">₹{product?.regularPrice}</span>{' '}
                <span className="discount-price">₹{product?.discountPrice}</span>
              </>
            ) : (
              <>₹{product?.regularPrice || '0.00'}</>
            )}
          </h3>

          <div className="product-actions">
            <button className="btn add-to-cart" onClick={() => handleAction("Add to Cart")}>
              Add to Cart
            </button>
            <button className="btn buy-now" onClick={() => handleAction("Buy Now")}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
