import Image from 'next/image'
import React from 'react';
import telegram from '../assets/telegram.svg';
import x from '../assets/x.svg'

const Footer = () => {
    return (
        <main className='flex justify-center lg:mt-[92px] '>
            <section className='w-[85%] my-[45px] text-white flex justify-between '>
            {/* <div className='grad w-full h-[1px] '></div> */}
                <p>Copyright 2024 - DecentraPay AI All Rights Reserved</p>
                <section className='flex  '>
                    <Image src={telegram} alt='telegram' className='' />
                    <Image src={x} alt='x-logo' className='lg:mr-[24px] lg:ml-[22px] ' />
                </section>

            </section>

        </main>
    )
}

export default Footer