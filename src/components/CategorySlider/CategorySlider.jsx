import  { useEffect, useState,React } from "react";
import "./CategorySlider.css";
import { NavLink } from "react-router-dom";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/v1/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        // console.log("Fetched categories:", data.data); // <-- log array
        
        setCategories(data.data);
    
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-slider">
      <div className="category-list">
        {categories.map((cat, index) => (
          <NavLink
            key={index}
            to={`/category/${cat.name}/${cat.id}`} 
            className="category-item"
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
