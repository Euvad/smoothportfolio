import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import { AnimatePresence } from 'framer-motion';
//import route and uselocation hook
import { Routes, Route, useLocation } from 'react-router-dom';

const AnimRoutes = () => {
  const location = useLocation();
  return <AnimatePresence initial={true} mode='wait'>
    <Routes key={location.pathname} location={location}>
    <Route path='/smoothportfolio' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/solutions' element={<Portfolio />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
  </AnimatePresence>
};

export default AnimRoutes;
