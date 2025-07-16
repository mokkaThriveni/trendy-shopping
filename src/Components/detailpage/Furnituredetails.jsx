import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import furnitureData from '../../data/furnitureData';
import { CartContext } from '../CartContext';

function FurnitureDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); 

  const product = furnitureData.find(item => item.id === parseInt(id));

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
        <p><strong>Description:</strong> {product.description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button> 
      </div>
    </div>
  );
}

export default FurnitureDetail;
