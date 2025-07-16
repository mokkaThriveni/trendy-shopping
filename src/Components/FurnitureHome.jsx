import React from 'react';
import furnitureData from '../data/furnitureData';
import { Link } from 'react-router-dom';

function FurnitureHome() {
  const fiveItems = furnitureData.slice(0, 5);

  return (
    <div className="category-wrapper">
      <div className="phones-container">
        {fiveItems.map((item) => (
          <div className="phone-card" key={item.id}>
            <Link to={`/furniture/${item.id}`}>
              <img src={item.image} alt={item.name} width="150" />
            </Link>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>

      <div className="see-more-wrapper">
        <Link to="/furniture" className="see-more">See More</Link>
      </div>
    </div>
  );
}

export default FurnitureHome;
