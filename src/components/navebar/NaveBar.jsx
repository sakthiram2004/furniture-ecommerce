import React, { useEffect, useState } from 'react';
import './Navebar.css';
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import logo from './../../assets/logo.png';
import { useNavigate } from 'react-router-dom';import {baseurl} from "./../../configfile.js"

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${baseurl}api/v1/auth/me`, {
          method: 'GET',
          credentials: 'include', // send cookies
        });
        const data = await response.json();
        if (response.ok && data.status) {
          setUser(data.data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="topnav">
      <img src={logo} className='logo' alt="logo"/>
      <h2>Ecommerce</h2>
      <div className='top-menu-container'>
        {/* <div className="search-box">
          <input type="text" placeholder='Search....' />
          <FaSearch className='search-button' />
        </div>
        <FaHeart className='favorate-button' />
        <FaShoppingCart className='cart-button' /> */}
        <div className="profile-button" onClick={() => navigate(user ? '/profile' : '/login')}>
          <CgProfile />
          {user && <span className="profile-name">{user.name}</span>}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
