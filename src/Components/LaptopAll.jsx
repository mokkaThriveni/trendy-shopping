import React from 'react'
import LaptopData from '../data/Laptopdata'
import { Link } from 'react-router-dom';

function LaptopAll() {
  return (
    <div className='phones-container'>{LaptopData.map((item)=>(<div className='phone-card' key={item.id}> <Link to={`/laptop/${item.id}`}> <img src={item.image} alt={item.name} width="150"/> </Link>
    <h3>{item.name}</h3>
    <p>Price:{item.price}</p>
 
</div>))}</div>
    
  )
}

export default LaptopAll
