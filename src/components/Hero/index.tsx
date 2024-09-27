import HeroImage from '../../../public/mainIconsdark.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-screen h-screen flex justify-center">
      <div className="flex w-full flex-row p-20 justify-center">
        <div className="w-screen h-full justify-center heroFlex text-white flex flex-col ">
        <div className='relative'>
         <span className='absolute left-2  text-xl'>Hi, My name is</span>
            <span className="text-[8rem]  md:text-[120px] font-extrabold bg-gradient-to-b from-[#cacacaf9] via-[#f5eef3] to-[#121212] bg-clip-text text-transparent">
              {" "}
              Diyako
            </span>
         </div>

          <p className="w-4/5 text-xl">
            I'm a front-end developer exploring new horizons in frontend
            development. I love creating beautiful user experiences.
          </p>
        </div>
        <div className="hidden md:flex justify-center heroFlex w-full ">
          <Image style={{ width: '100%' }} src={HeroImage} alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
