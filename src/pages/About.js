import React, {useContext} from 'react';
import WomanImg from '../img/about/woman.gif';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';
const About = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return <motion.section
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section'>
    <div 
    onMouseEnter={mouseEnterHandler} 
    onMouseLeave={mouseLeaverHandler} 
    className=' container mx-auto h-full relative'>
      <div className=' flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={WomanImg} alt='woman' />
        </div>
        <motion.div
          initial={{ opacity: 0, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-80%' }}
          transition={transition1}
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>About us</h1>
          <p className='mb-12 max-w-sm'>
          Welcome to the About Us page of Dune. With years of experience, Dune has become a trusted provider of cheat solutions.

<br/><br/>
At Dune, we are driven by our passion for innovation. We constantly strive to redefine the cheating landscape with revolutionary solutions. Our products offer advanced cheating capabilities.

<br/><br/>
When you choose Dune, you gain access to expertise and a commitment to your success. Our team of skilled developers is dedicated to delivering high-quality solutions.

<br/><br/>
Experience industry knowledge and the assurance of security with Dune. Join us on this journey as we achieve greatness.

<br/><br/>
Explore Dune's passion-driven solutions and elevate your gaming experience with our exceptional products.
          </p>
          <Link to={'/solutions'} className='btn'>our solutions</Link>
        </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default About;
