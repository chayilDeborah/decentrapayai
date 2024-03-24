import Image from 'next/image'
import React from 'react';
import decentralogo from '../assets/Decentralogo.png';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const DappNavbar = () => {
  return (
    <nav className='flex justify-between my-[22px] text-white '>
      <section className='flex justify-between w-full '>
        <Link href='/'>
            <Image src={decentralogo} alt='logo' className='' />
            </Link>
<ConnectButton />
      </section>
      
    </nav>
  )
}

export default DappNavbar