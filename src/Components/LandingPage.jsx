import React from 'react'
import PhoneHome from './PhoneHome';
import LaptopHome from './LaptopHome';
import MenFashionHome from './MenFashionHome';
import WomenFashionHome from './WomenFashionHome';
import FurnitureHome from './FurnitureHome';

function LandingPage() {
  return (
    
    <div id='shop'>
      <h1 class="hero-content"> Products </h1>
      <section className="category-section">
      <h2>Mobiles</h2>
        <PhoneHome/>
        </section>
        <section className="category-section">
        <h2>Laptops</h2>
        <LaptopHome/>
        </section>
        <section className="category-section">
        <h2>Men</h2>
        <MenFashionHome/>
        </section>
        <section className="category-section">
        <h2>Women</h2>
        <WomenFashionHome/>
        </section>
        <section className="category-section">
        <h2>Furniture</h2>
        <FurnitureHome/>
        </section>
</div>
   
  );
}



export default LandingPage