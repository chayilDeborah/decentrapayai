import Image from 'next/image'
import React from 'react';
import decentralogo from '../assets/Decentralogo.png';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const DappNavbar = () => {
  return (
    <nav className='flex justify-between my-[22px] text-white ' data-aos="fade-in">
      <section className='flex justify-between w-[95%] lg:mx-[0px] mx-auto mt-[10px] lg:w-full '>
        <Link href='/dapp'>
          <Image src={decentralogo} alt='logo' className='lg:w-full w-[110px] ' />
        </Link>
        <div className='flex lg:space-x-[50px] '>
          <h2 className='font-medium text-[16px] my-auto leading-[19.36px] tracking-[0.2px] cursor-pointer tgbot text-white hidden lg:block '>Connect TG Bot</h2>
          <div className='my-auto grad rounded-[8px] p-[2px] '>
            <div className='flex justify-center rounded-[10px] bg-[#0b0b0b] h-full w-full'>
          <ConnectButton />
          </div>
          </div>
        </div>
      </section>

    </nav>
  )
}

export default DappNavbar