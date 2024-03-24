import Image from 'next/image'
import React from 'react';
import telegram from '../assets/telegram.svg';
import x from '../assets/x.svg'
import Link from 'next/link';

const Footer = () => {
    return (
        <>
        <div className='grad w-full h-[1.7px] lg:h-[1.5px] lg:mt-[0px] mt-[70px] '></div>
        <main className='flex justify-center lg:max-w-7xl w-[95%] lg:w-full mx-auto lg:mt-[46px] '>
            <section className='w-[85%] my-[45px] text-white lg:flex justify-between '>
            
                <p className='lg:text-[20px] leading-[24.2px] tracking-[0.2px] text-center lg:text-left  '>Copyright 2024 - DecentraPay AI All Rights Reserved</p>
                <section className='flex my-auto justify-center space-x-[15px] mt-[20px] lg:mt-[0px] lg:mx-[0px] mx-auto '>
                    <Link href='https://t.me/decentrapay_ai'>
                    <Image src={telegram} alt='telegram' className='' />
                    </Link>
                    <Link href='https://twitter.com/decentrapayai'>
                    <Image src={x} alt='x-logo' className='lg:mr-[24px] lg:ml-[22px] ' />
                    </Link>
                </section>
            </section>
            
        </main>
        
        </>
    )
}

export default Footer