import React from 'react';
import phoneData from '../data/Phonedata';
import { Link } from 'react-router-dom';

function PhoneHome() {
  const fiveItems = phoneData.slice(0, 5);

  return (
    <div className="category-wrapper">
      <div className="phones-container">
        {fiveItems.map((item) => (
          <div className="phone-card" key={item.id}>
            <Link to={`/phone/${item.id}`}>
              <img src={item.image} alt={item.name} width="150" />
            </Link>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>

      <div className="see-more-wrapper">
        <Link to="/mobiles" className="see-more">See More</Link>
      </div>
    </div>
  );
}

export default PhoneHome;
