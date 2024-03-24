import Image from 'next/image'
import React from 'react';
import dapp from '../assets/dapp.png'
import forward from '../assets/forward.svg'
import Link from 'next/link';

const DappsHome = () => {
  return (
    <main className='flex justify-center lg:mt-[92px] mt-[45px] mb-[100px] lg:w-full w-[95%] lg:mx-[0px] mx-auto lg:mb-[200px] text-white'>
      <div>
      <section className='lg:flex justify-center lg:w-full lg:mx-[0px] mx-auto  '>
        <div className='text-center lg:text-left' >
          <h1 className='leverage font-bold lg:w-[85%]  lg:text-[50px] text-[24px] lg:leading-[60.5px] tracking-[0.2px] lg:mt-[86px] mb-[20px] lg:mb-[30px] '>Request Cryptocurrency Payments and Create Invoices Anonymously with the help of AI!</h1>
          <p className='font-medium lg:text-[18px] text-[15px] lg:leading-[21.78px] leading-[29px] tracking-[0.2px] lg:w-[85%] mb-[44px] lg:mb-[64px]'>DecentraPay is a complete anonymous tool that can help users to request payments and send cryptocurrencies in a full privacy process without sender&apos;s or receiver&apos;s wallet being traceable to anyone.</p>
        </div>
        <Image src={dapp} alt='dapp-img' className='lg:h-[416px] mt-[35px] lg:mt-[75px] ' />
      </section>
      <section className='grid grid-cols-1 justify-center lg:grid-cols-2 lg:w-[65%] lg:mt-[0px] mt-[30px] w-[90%] mx-auto lg:mx-[0px] '>
        <Link href='/dapp/payment'>
            <button className='flex lg:w-[370px] w-[270px] h-[67px] rounded-[10px] justify-center items-center  mx-auto lg:mx-[0px]  grad'>
              <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] font-bold '>Create Payment Request</h2>
              <Image src={forward} alt='icon' className='ml-[10px] ' />
            </button>
            </Link>
            <button className='flex lg:w-[243px] w-[190px] h-[67px] rounded-[10px] justify-center  lg:mt-[0px] mt-[30px]  mx-auto lg:mx-[0px] mt-[30px] items-center grad'>
              <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] font-bold '>Send a Token</h2>
              <Image src={forward} alt='icon' className='ml-[10px] ' />
            </button>
            <button className='flex lg:w-[242px]  w-[190px] h-[67px] lg:mt-[44px] rounded-[10px] justify-center  mx-auto lg:mx-[0px]  mt-[30px] items-center grad'>
              <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] font-bold '>Telegram Bot</h2>
              <Image src={forward} alt='icon' className='ml-[10px] ' />
            </button>
            <button className='flex lg:w-[370px] w-[270px] h-[67px] rounded-[10px] lg:mt-[44px] lg:-ml-[120px] justify-center  mx-auto lg:mx-[0px] mt-[30px] items-center grad'>
              <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] font-bold '>Connect Notification Bot</h2>
              <Image src={forward} alt='icon' className='ml-[10px] ' />
            </button>
          </section>
          </div>   
    </main>
  )
}

export default DappsHome