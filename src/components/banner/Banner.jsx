import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './Banner.css';

const screenWidth = window.innerWidth;

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const bannerRef = useRef(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/v1/banners', {
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        if (response.ok && data.status) {
          setBanners(data.data);
        }
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };
    fetchBanners();
  }, []);

  const scroll = (direction) => {
    if (!bannerRef.current) return;
    bannerRef.current.scrollBy({
      left: direction === "RIGHT" ? (screenWidth - 600) : (-screenWidth + 600),
      behavior: "smooth"
    });
  };

  if (!banners.length) {
    return <p>Loading banners...</p>;
  }

  return (
    <div className="banner-container">
      <IoIosArrowBack className='banner-back-arrow' onClick={() => scroll("LEFT")} />
      <IoIosArrowForward className='banner-right-arrow' onClick={() => scroll("RIGHT")} />

      <div className="banner-wrapper" ref={bannerRef}>
        {banners.map((banner) => (
          <img
            src={banner.image}
            key={banner.id}
            alt={banner.name}
            className="banner-image"
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
