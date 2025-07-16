import React from 'react'
import womenFashionData from '../data/womenFashionData'
import { Link } from 'react-router-dom';


function WomenFashion() {
  return (
    <div className='phones-container'>{womenFashionData.map((item)=>(<div className='phone-card' key={item.id}> <Link to={`/women/${item.id}`}> {/* ✅ Moved inside */}
<img src={item.image} alt={item.name} width="150"/></Link>
    <h3>{item.name}</h3>
    <p>Price:{item.price}</p>
    
    </div>))}</div>
           
  )
}

export default WomenFashion