"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import decentralogo from '../assets/Decentralogo.png';
import telegram from '../assets/telegram.svg';
import x from '../assets/x.svg'
import Link from 'next/link';

const Navbar = () => {



  return (
    <nav className='flex justify-between my-[22px] text-white '>
      {/* <section>
        <Image src={decentralogo} alt='logo' className='' />
      </section>
      <section className='flex justify-between lg:w-[476px] lg:text-[16px] font-bold lg:leading-[19.36px] tracking-[0.2px] my-auto '>
        <Link href='/leverage'>
          <h2 className='leverage'>Home</h2>
        </Link>
        <Link href='#about'>
          <h2>About Us</h2>
        </Link>
        <Link href='/#features'>
          <h2>Features</h2>
        </Link>
        <Link href='/tokenomics'>
          <h2>Tokenomics</h2>
        </Link>
        <Link href='/roadmap'>
          <h2>Roadmap</h2>
        </Link>
      </section>
      <section className='flex'>
        <Link href='https://t.me/decentrapay_ai' className='my-auto'>
          <Image src={telegram} alt='telegram' className='' />
        </Link>
        <Link href='https://twitter.com/decentrapayai' className='my-auto'>
          <Image src={x} alt='x-logo' className='lg:mr-[24px] lg:ml-[22px] ' />
        </Link>
        <Link href='https://docs.decentrapay.org/' className='my-auto'>
          <button className='tracking-[0.46px] grad lg:w-[177px] lg:h-[49px] my-auto rounded-[8px] hover:bg-[#ff2df7] '>Documentation</button>
        </Link>
      </section> */}
   

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src={decentralogo} className="h-8" alt="Flowbite Logo" />
       
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </nav>
  )
}

export default Navbar




{/* */}
