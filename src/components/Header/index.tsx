'use client';

import Image from 'next/image';
import logo from '../../../public/DQlogga1.png';
import Navigation from '../Navigation';
import { useState, useEffect } from 'react';

const Header = () => {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const show = " top-0 transition-all duration-400 ease-out;"
  const hidden = " top-[-80px] transition-all duration-400 ease-out;"
  const cls = visible ? show : hidden;

  return (
    <header className={`${cls} fixed p-4 w-full px- transition duration-500 ease-in-out flex flex-row justify-between items-center`}>
      <div className="">
        <a href="/">
          <Image
            className="filter brightness-0 invert"
            width={60}
            src={logo}
            alt="logo"
          />
        </a>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
