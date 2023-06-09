import React, { useContext, useState, useEffect,useRef } from 'react';
import Socials from './Socials'
//import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'
import { CursorContext } from '../context/CursorContext';

import { Link } from 'react-router-dom'
const Header = () => {
  const randHex = (len) => {
    const maxlen = 8;
    const min = 16 ** Math.min(len, maxlen - 1);
    const max = 16 ** Math.min(len, maxlen) - 1;
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    let r = n.toString(16).padStart(len, '0');
    return r;
  };
  
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  const [hexValue, setHexValue] = useState('0x5AE96E6F6E');
  const [isHovered, setIsHovered] = useState(false);
  const randHexRef = useRef(randHex);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setHexValue('0x5AE96E6F6E')
  };
  
  useEffect(() => {
    let intervalId;
    if (isHovered) {
      intervalId = setInterval(() => {
        setHexValue('0x' + randHexRef.current(10));
      }, 100); // Set the desired duration between each generation here
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered]);
  return <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/*logo*/}
      <Link
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaverHandler}
        to={'/'}
        className='max-w-[200px]'>
        {/* <img src={Logo} alt='' /> */}
        <h1 className='text-2xl font-bold uppercase' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {hexValue}
        </h1>
      </Link>
      <nav
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaverHandler}
        className='hidden xl:flex gap-x-12 font-semibold'>
        <Link to={'/'} className='text-primary hover:text-primary transition'>Home</Link>
        <Link to={'/about'} className='text-primary hover:text-primary transition'>About</Link>
        <Link to={'/solutions'} className='text-primary hover:text-primary transition'>Solutions</Link>
        <Link to={'/contact'} className='text-primary hover:text-primary transition'>Contact</Link>
      </nav>
    </div>
    <Socials />
    <MobileNav />
  </header>
};

export default Header;
