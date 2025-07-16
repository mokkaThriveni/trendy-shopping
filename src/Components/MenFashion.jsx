import React from 'react';
import MenFashionData from '../data/MenFashionData';
import { Link } from 'react-router-dom';

function MenFashion() {
  return (
    <div className="category-wrapper">
      <div className="phones-container">
        {MenFashionData.map((item) => (
          <div className="phone-card" key={item.id}>
            <Link to={`/men/${item.id}`}>
              <img src={item.image} alt={item.name} width="150" />
            </Link>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenFashion;
