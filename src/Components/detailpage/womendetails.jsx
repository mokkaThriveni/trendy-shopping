import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import womenFashionData from '../../data/womenFashionData';
import { CartContext } from '../CartContext';

function WomenProductDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = womenFashionData.find(item => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);       
    navigate('/cart');     
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className='item-details'>
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Description:</strong> {product.details}</p>
        <button onClick={handleAddToCart}>Add to Cart</button> 
      </div>
    </div>
  );
}

export default WomenProductDetail;
