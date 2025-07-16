import React from 'react'
import phoneData from '../data/Phonedata'
import { Link } from 'react-router-dom';

function Phone() {
  return (
    <div className='phones-container'>{phoneData.map((item)=>(<div className='phone-card' key={item.id}> <Link to={`/phone/${item.id}`}> <img src={item.image} alt={item.name} width="150"/> </Link>
    <h3>{item.name}</h3>
    <p>Price:{item.price}</p>
    
     
 
</div>))}</div>
    
  )
}

export default Phone
