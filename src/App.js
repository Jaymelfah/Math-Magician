import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="allmain">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
