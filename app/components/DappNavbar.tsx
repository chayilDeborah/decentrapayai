import Image from 'next/image'
import React from 'react';
import decentralogo from '../assets/Decentralogo.png';
import Link from 'next/link';

const DappNavbar = () => {
  return (
    <nav className='flex justify-between my-[22px] text-white '>
      <section>
        <Link href='/'>
            <Image src={decentralogo} alt='logo' className='' />
            </Link>
      </section>
      
    </nav>
  )
}

export default DappNavbar