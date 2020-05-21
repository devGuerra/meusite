import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logowpp from '../../assets/images/logowpp.png';
import { Container } from './style';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [slowDown, setSlowDown] = useState(false);

  useEffect(() => {
    api.get('/category').then((response) => {
      setCategories(response.data.CategoryList);
    });
  }, []);

  return (
    <Container active={slowDown} className="category">
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
      <button type="button" onClick={() => setSlowDown(!slowDown)}>
        {!slowDown ? 'ver mais' : 'ver menos'}
      </button>
    </Container>
  );
}

export default Categories;
