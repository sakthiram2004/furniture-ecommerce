import React from 'react';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const favorites = [
    { id: 1, name: "Product 1", price: "$20", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$35", img: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="favorites-page">
      <h2>My Favorites</h2>
      <div className="favorites-list">
        {favorites.map(item => (
          <div className="favorite-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
