import DappNavbar from '@/app/components/DappNavbar'
import DappPayment from '@/app/components/DappPayment'
import React from 'react'

const Payment = () => {
  return (
    <>
     <main  className='flex justify-center'>
     <section className='lg:max-w-7xl w-[95%] lg:w-full'>
        <DappNavbar />
        <DappPayment />
     </section>
     </main>
    </>
  )
}

export default Payment