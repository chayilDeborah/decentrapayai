"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import decentralogo from '../assets/Decentralogo.png';
import telegram from '../assets/telegram.svg';
import x from '../assets/x.svg'
import menuh from '../assets/menuh.svg'
import close from '../assets/close.svg'
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between my-[22px] text-white' >
      <section>
        <Image src={decentralogo} alt='logo' className='' />
      </section>
      <div className='lg:hidden w-[6%] '>
      <button onClick={toggleMenu} className='lg:mt-[0px] mt-[20px] lg:mr-[0px] mt-[15px] '>
      <div className='-mr-[40px] '
          >
            {isMenuOpen ? (
              <Image src={close} alt='close' className='w-[24px] -mr-[35px] fixed z-100 close' />
            ) : (
              <Image src={menuh} alt='close' className=' w-[45px] -ml-[25px] -mt-[10px] ' />
            )}
          </div>
        </button>
      </div>
      <section 
        className={`${isMenuOpen ? 'block fixed  z-50 p-[50px] lg:p-[0px] lg:text-left  text-center bg-black bg-opacity-500 w-[87%] mx-auto' : 'hidden'
          } lg:flex lg:justify-between w-[95%] lg:w-[869px] bg-black lg:text-[16px] my-auto font-bold lg:leading-[19.36px] tracking-[0.2px] my-auto`}
      >
        <Link href='/' className='my-auto'>
          <h2 className='leverage my-auto lg:mb-[0px] mb-[15px]'>Home</h2>
        </Link>
        <Link href='#about' className='my-auto  '>
          <h2 className='lg:mb-[0px] mb-[15px] tgbot'>About Us</h2>
        </Link>
        <Link href='/#features' className='my-auto '>
          <h2 className='lg:mb-[0px] mb-[15px] tgbot'>Features</h2>
        </Link>
        <Link href='/tokenomics' className='my-auto '>
          <h2 className='lg:mb-[0px] mb-[15px] tgbot'>Tokenomics</h2>
        </Link>
        <Link href='/roadmap' className='my-auto '>
          <h2 className='lg:mb-[0px] mb-[15px] tgbot'>Roadmap</h2>
        </Link>
        <section className='lg:flex'>
          <div className='flex space-x-[15px] lg:w-full w-[30%] mx-auto lg:mx-[0px] lg:mb-[0px] mb-[15px] '>
            <Link href='https://t.me/decentrapay_ai' className='my-auto'>
              <Image src={telegram} alt='telegram' className='' />
            </Link>
            <Link href='https://twitter.com/decentrapayai' className='my-auto'>
              <Image src={x} alt='x-logo' className='lg:mr-[24px] lg:ml-[22px] ' />
            </Link>
          </div>
          <Link href='https://docs.decentrapay.org/' className='my-auto'>
            <button className='tracking-[0.46px] grad w-[177px] hover:leverage h-[49px] my-auto rounded-[8px] hover:bg-[#ff2df7] '>Documentation</button>
          </Link>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
