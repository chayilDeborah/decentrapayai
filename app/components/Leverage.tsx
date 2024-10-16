import Image from 'next/image'
import React from 'react';
import forward from '../assets/forward.svg'
import Link from 'next/link';

const Leverage = () => {
  return (
    <main className='flex justify-center mt-[92px] lg:w-full w-[95%] lg:mx-[0px] mx-auto ' id='leverage'   data-aos="fade-in">
        <section className='text-center'>
            <h1 className='lg:text-[60px] text-[24px] lg:leading-[72.6px] font-bold tracking-[0.2px] lg:w-[80%] mx-auto leverage '>Leveraging Blockchain for Enhanced Anonymity and Security in Escrow-Based Digital Transactions</h1>
            <h4 className='text-[#FFFFFF] font-medium text-[14px] lg:text-[18px] lg:leading-[21.78px] leading-[24px] tracking-[0.2px] mx-auto mt-[30px] mb-[50px] lg:w-[70%] '>DecentraPay is a complete anonymous tool that can help users to request payments and send cryptocurrencies in a full privacy process without sender&apos;s or receiver&apos;s wallet being traceable to anyone.</h4>
            <div className='flex flex-col lg:flex-row justify-center  font-bold mx-auto '>
                <Link href='/dapp' className='lg:mx-[0px] mx-auto'>
                <button className='flex w-[222px] h-[67px] rounded-[8px] text-[#FFFFFF] justify-center items-center grad'>
                    <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] '>DPAY DAPP</h2>
                    <Image src={forward} alt='icon' className='' />
                </button>
                </Link>
                <button className=' lg:w-[339px] lg:mx-[0px] mx-auto w-[250px] h-[67px] rounded-[8px] text-[#FFFFFF] lg:mt-[0px] mt-[30px] lg:ml-[55px] grad p-[1.7px]'>
                    <div className='flex justify-center items-center rounded-[8px] bg-[#0b0b0b] flex h-full w-full items-center justify-center'>
                    <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] '>DPAY TELEGRAM BOT</h2>
                    <Image src={forward} alt='icon' className='' />
                    </div>
                </button>

            </div>
        </section>

    </main>
  )
}

export default Leverage