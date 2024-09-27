'use client';
import HeroImage from '../../../public/mainIconsdark.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom,
} from '@/utils/motion';

const Hero = () => {
  return (
    <section className="w-screen h-screen flex flex-col justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        className=" p-0 h-full flex max-w-[1240px]  w-full flex-row justify-center"
      >
        <div className=" w-[80vw]  items-center md:items-start md:w-screen h-full justify-evenly heroFlex text-white flex flex-col ">
          <div className="relative  flex flex-col justify-evenly items-center md:items-start ">
            <motion.span
              variants={slideInFromLeft(0)}
              className="flex gothic text-xl top-1"
            >
              Hi, My name is
            </motion.span>
            <div className='flex items-start '>
            <motion.span
              variants={slideInFromBottom(0.6)}
            className="text-[5rem] font-fireside  md:justify-start md:text-[80px] font-extrabold bg-gradient-to-b from-[#cacacaf9] via-[#f5eef3] to-[#121212] bg-clip-text text-transparent"
            >
              d
            </motion.span>
            <motion.span
              variants={slideInFromTop(0.7)}
            className="text-[5rem] font-fireside  md:justify-start md:text-[80px] font-extrabold bg-gradient-to-b from-[#cacacaf9] via-[#f5eef3] to-[#121212] bg-clip-text text-transparent"
            >
              i
            </motion.span>
            <motion.span
              variants={slideInFromLeft(0.8)}
           className="text-[5rem] font-fireside  md:justify-start md:text-[80px] font-extrabold bg-gradient-to-b from-[#cacacaf9] via-[#f5eef3] to-[#121212] bg-clip-text text-transparent"
            >
              y
            </motion.span>
            <motion.span
              variants={slideInFromRight(0.9)}
           className="text-[5rem] font-fireside  md:justify-start md:text-[80px] font-extrabold bg-gradient-to-b from-[#cacacaf9] via-[#f5eef3] to-[#121212] bg-clip-text text-transparent"
            >
              a
            </motion.span>
            <motion.span
              variants={slideInFromBottom(1)}
         className="text-[5rem] font-fireside  md:justify-start md:text-[80px] font-extrabold bg-gradient-to-b from-[#cacacaf9] via-[#f5eef3] to-[#121212] bg-clip-text text-transparent"
            >
              k
            </motion.span>
            <motion.span
              variants={slideInFromTop(1.1)}
          className="text-[5rem] font-fireside  md:justify-start md:text-[80px] font-extrabold bg-gradient-to-b from-[#cacacaf9] via-[#f5eef3] to-[#121212] bg-clip-text text-transparent"
            >
            O
            </motion.span>
          </div>
            <motion.p 
             variants={slideInFromLeft(1.1)}
              className="gothic  text-2xl">
             Front-end developer.
            </motion.p>{' '}
          </div>
         
          <div className="md:mx-0 flex flex-col md:flex-row items-center  w-full max-w-[400px] tracking-wide letter-spacing: 0.025em;">
          <motion.div  variants={slideInFromBottom(1)} className='w-[90%]'>
            <a
          
              className="primary bg-transparent ease-in-out overflow-hidden relative flex justify-center items-center py-3 m-2.5 w-[90%] rounded-[30px] text-white cursor-pointer transition  duration-600 border border-[#576ded99] shadow-[inset_0_0_12px_rgba(191,151,255,0.24)] z-[1]"
            >
              Contact
            </a>
           </motion.div>
            <motion.div  variants={slideInFromBottom(1)} className='w-[90%]'>
            <a
             
              className="primary bg-transparent ease-in-out overflow-hidden relative flex justify-center items-center py-3 m-2.5 w-[90%] mr-2 rounded-[30px] text-white cursor-pointer transition  border duration-600 border-[#576ded99]  shadow-[inset_0_0_12px_rgba(191,151,255,0.24)] z-[1]"
            >
              CV
              <HiArrowDown />
            </a>
            </motion.div>
          </div>
        </div>
        <div className="hidden md:flex justify-center heroFlex w-full min-w-1/2 ">
          <Image style={{ width: '100%' }} src={HeroImage} alt="hero-img" />
        </div>
      </motion.div>
      <span className='hidden md:block absolute opacity-50 top-[90%] left-[50%]  w-[20px] h-[40px] border-[2px] rounded-[20px] border-white'>
        <span className='mouse-wheel block w-[8px] h-[8px] bg-white rounded-[50%] m-auto animate-move-wheel'></span>
      </span>
    </section>
  );
};

export default Hero;
