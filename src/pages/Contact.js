import React, { useContext } from 'react';
import WomanImg from '../img/contact/woman.gif';
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'
import { CursorContext } from '../context/CursorContext';
const Contact = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return <motion.section
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={transition1}
          className='hidden lg:flex absolute bottom-0 left-0 right-0 top-72 -z-10'></motion.div>
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          className='lg:flex-1 lg:pt-32 px-4'>
          <h1 className='h1 whitespace-nowrap'>Contact us</h1>
          <p className='mb-12'>Because security matter ! &#40;;</p>
          <form className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your name' />
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your email address' />

            </div>
            <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your message with product name' />
            <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send</button>
          </form>
        </div>
        <div>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'>
            <img src={WomanImg} alt='woman' />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
