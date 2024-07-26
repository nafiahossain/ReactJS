import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Header from './header.jsx';
import ImageSlider from './gallery.jsx';
import RentalDetails from './rentaldetails.jsx';
import RentalInfo from './rentalinfo.jsx';
import Footer from './footer.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <ImageSlider />
        <Routes>
          <Route path="/" element={
            <>
              <RentalInfo />
            </>
          } />
          <Route path="/hotel/:hotelSlug/room/:roomSlug" element={<RentalDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;