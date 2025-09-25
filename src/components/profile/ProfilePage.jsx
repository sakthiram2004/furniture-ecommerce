import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';import {baseurl} from "./../../configfile.js"

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/v1/auth/me', {
          method: 'GET',
          credentials: 'include',
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

 const handleLogout = async () => {
  try {
    await fetch(`${baseurl}api/v1/auth/logout`, {
      method: 'POST',
      credentials: 'include', // important to include cookies
    });
    localStorage.removeItem('jwt'); // optional, if you also store a local flag
    navigate('/login');
    window.location.reload();
  } catch (err) {
    console.error("Logout failed:", err);
  }
};


  if (!user) {
    return <p>Please login to view your profile.</p>;
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img src="https://via.placeholder.com/150" alt="profile" className="profile-pic" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: +91 {user.mobileNo}</p>
        <button>Edit Profile</button>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
