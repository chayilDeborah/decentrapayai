import Image from 'next/image'
import React from 'react';
import decentralogo from '../assets/Decentralogo.png'

const InvoiceNav = () => {
  return (
   <>
   <nav className='flex justify-right my-[22px]  text-white '>
    <Image src={decentralogo} alt='logo' className='' />

   </nav>
   </>
  )
}

export default InvoiceNav