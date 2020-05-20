import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logowpp from '../../assets/images/logowpp.png';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('/category').then((response) => {
      setCategories(response.data.CategoryList);
    });
  }, []);
  return (
    <div className="category">
      <ul>
        {categories.map((item) => (
          <Link to={`/category/${item.categoryName}`} key={item._id}>
            <li>
              <img className="icon" src={logowpp} alt={item.categoryName} />
              {item.categoryName}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
