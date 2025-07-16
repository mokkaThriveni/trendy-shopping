import './App.css';
import LandingPage from './Components/LandingPage';
import Phone from './Components/Phone';
import LaptopAll from './Components/LaptopAll';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import MenFashion from './Components/MenFashion';
import WomenFashion from './Components/WomenFashion';
import Furniture from './Components/Furniture'
import Furnituredetails from './Components/detailpage/Furnituredetails.jsx';
import MenProductDetail from './Components/detailpage/menfashiondetails';
import WomenProductDetail from './Components/detailpage/womendetails';
import Phonedetails from './Components/detailpage/Phonedetails';
import Laptopdetails from './Components/detailpage/.Laptopdetails.jsx';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import Cart from './Components/Cart';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <LandingPage />
            </>
          }
        />
        <Route path="/mobiles" element={<Phone />} />
        <Route path="/laptop" element={<LaptopAll />} />
        <Route path="/men" element={<MenFashion />} />
        <Route path="/women" element={<WomenFashion />} />
        <Route path="/furniture" element={<Furniture />} />

        <Route path="/men/:id" element={<MenProductDetail />} />
        <Route path="/women/:id" element={<WomenProductDetail />} />
        <Route path="/phone/:id" element={<Phonedetails />} />
        <Route path="/laptop/:id" element={<Laptopdetails />} />
         <Route path="/furniture/:id" element={<Furnituredetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
