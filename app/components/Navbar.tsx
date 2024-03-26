"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import decentralogo from '../assets/Decentralogo.png';
import telegram from '../assets/telegram.svg';
import x from '../assets/x.svg'
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between my-[22px] text-white'>
      <section>
        <Image src={decentralogo} alt='logo' className='' />
      </section>
      <div className='lg:hidden'>
        <button onClick={toggleMenu}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </svg>
        </button>
      </div>
      <section
        className={`${
          isMenuOpen ? 'block fixed inset-0 z-50 bg-black bg-opacity-500 w-full mx-auto' : 'hidden'
        } lg:flex lg:justify-between lg:w-[869px] lg:text-[16px] my-auto font-bold lg:leading-[19.36px] tracking-[0.2px] my-auto`}
      >
        <Link href='/' className='my-auto'>
          <h2 className='leverage my-auto'>Home</h2>
        </Link>
        <Link href='#about'  className='my-auto'>
          <h2>About Us</h2>
        </Link>
        <Link href='/#features'  className='my-auto'>
          <h2>Features</h2>
        </Link>
        <Link href='/tokenomics'  className='my-auto'>
          <h2>Tokenomics</h2>
        </Link>
        <Link href='/roadmap'  className='my-auto'>
          <h2>Roadmap</h2>
        </Link>
        <section className='lg:flex'>
        <Link href='https://t.me/decentrapay_ai' className='my-auto'>
          <Image src={telegram} alt='telegram' className='' />
        </Link>
        <Link href='https://twitter.com/decentrapayai' className='my-auto'>
          <Image src={x} alt='x-logo' className='lg:mr-[24px] lg:ml-[22px] ' />
        </Link>
        <Link href='https://docs.decentrapay.org/' className='my-auto'>
          <button className='tracking-[0.46px] grad lg:w-[177px] lg:h-[49px] my-auto rounded-[8px] hover:bg-[#ff2df7] '>Documentation</button>
        </Link>
      </section>
      </section>
    </nav>
  );
};

export default Navbar;
