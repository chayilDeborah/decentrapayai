import Image from 'next/image'
import React from 'react';
import dapp from '../assets/dapp.png'
import forward from '../assets/forward.svg'

const DappsHome = () => {
  return (
    <main className='flex justify-center lg:mt-[92px] lg:mb-[200px] text-white'>
      <section className='flex justify-center w-full '>
        <div className='' >
          <h1 className='leverage font-bold w-[85%]  lg:text-[50px] leading-[60.5px] tracking-[0.2px] lg:mt-[86px]  lg:mb-[30px] '>Request Cryptocurrency Payments and Create Invoices Anonymously with the help of AI!</h1>
          <p className='font-medium lg:text-[18px] lg:leading-[21.78px] tracking-[0.2px] lg:w-[85%] mb-[64px]'>DecentraPay is a complete anonymous tool that can help users to request payments and send cryptocurrencies in a full privacy process without sender&apos;s or receiver&apos;s wallet being traceable to anyone.</p>
          <section className='grid grid-cols-1 lg:grid-cols-2 '>
            <button className='flex lg:w-[370px] h-[67px] rounded-[10px] justify-center items-center grad'>
              <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] font-bold '>Create Payment Request</h2>
              <Image src={forward} alt='icon' className='ml-[10px] ' />
            </button>
            <button className='flex lg:w-[243px] h-[67px] rounded-[10px] justify-center items-center grad'>
              <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] font-bold '>Send a Token</h2>
              <Image src={forward} alt='icon' className='ml-[10px] ' />
            </button>
            <button className='flex lg:w-[242px] h-[67px] lg:mt-[44px] rounded-[10px] justify-center items-center grad'>
              <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] font-bold '>Telegram Bot</h2>
              <Image src={forward} alt='icon' className='ml-[10px] ' />
            </button>
            <button className='flex lg:w-[370px] h-[67px] rounded-[10px] lg:mt-[44px] lg:-ml-[120px] justify-center items-center grad'>
              <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] font-bold '>Connect Notification Bot</h2>
              <Image src={forward} alt='icon' className='ml-[10px] ' />
            </button>
          </section>
        </div>
        <Image src={dapp} alt='dapp-img' className='lg:h-[416px] mt-[75px] ' />
      </section>
    </main>
  )
}

export default DappsHome