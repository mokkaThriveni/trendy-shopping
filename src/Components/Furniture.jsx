import React from 'react'
import furnitureData from '../data/furnitureData'
import { Link } from 'react-router-dom';

function Furniture() {
  return (
    <div className='phones-container'>{furnitureData.map((item)=>(<div className='phone-card' key={item.id}> <Link to={`/furniture/${item.id}`}> <img src={item.image} alt={item.name} width="150"/> </Link>
    <h3>{item.name}</h3>
    <p>Price:{item.price}</p>
 
</div>))}</div>
    
  )
}

export default Furniture
