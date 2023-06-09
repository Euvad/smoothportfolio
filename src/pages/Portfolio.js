import React, { useContext } from 'react';
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';
const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return <motion.section
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          initial={{ opacity: 0, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-80%' }}
          transition={transition1}
          className='flex flex-col lg:items-start'>
          <h1 className='h1 whitespace-nowrap'>Solutions</h1>
          <p className='mb-12 max-w-sm'>

          Unleash gaming excellence with our cutting-edge cheat solutions. Gain a competitive edge and surpass rivals. Elevate gameplay with advanced tools. Join our community for top-notch cheating performance. Embrace excellence today.
          </p>
          <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Interested ?</Link>
        </motion.div>
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className='grid grid-cols-2 lg:gap-2'>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] flex items-center'>
            <img className='object-cover scale-75 hover:scale-110 transition-all duration-500' src={Image1} alt='image1' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] flex items-center'>
            <img className='object-cover scale-75 hover:scale-110 transition-all duration-500' src={Image2} alt='image2' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] flex items-center'>
            <img className='object-cover scale-75 hover:scale-110 transition-all duration-500' src={Image3} alt='image3' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] flex items-center'>
            <img className='object-cover scale-75 hover:scale-110 transition-all duration-500' src={Image4} alt='image4' />
          </div>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Portfolio;
