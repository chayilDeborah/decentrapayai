import Image from 'next/image'
import React from 'react';
import decentralogo from '../assets/Decentralogo.png';
import telegram from '../assets/telegram.svg';
import x from '../assets/x.svg'

const Navbar = () => {
  return (
    <nav className='flex justify-between my-[20px] text-white '>
        <section>
            <Image src={decentralogo} alt='logo' className='' />
        </section>
        <section className='flex justify-between lg:w-[476px] lg:text-[16px] font-bold lg:leading-[19.36px] tracking-[0.2px] my-auto '>
            <h2>Home</h2>
            <h2>About Us</h2>
            <h2>Features</h2>
            <h2>Tokenomics</h2>
            <h2>Roadmap</h2>
        </section>
        <section className='flex'>
            <Image src={telegram} alt='telegram' className='' />
            <Image src={x} alt='x-logo' className='lg:mr-[24px] lg:ml-[22px] ' /> 
            <button className='tracking-[0.46px] grad lg:w-[177px] lg:h-[49px] my-auto rounded-[8px] '>Documentation</button>
        </section>

    </nav>
  )
}

export default Navbar