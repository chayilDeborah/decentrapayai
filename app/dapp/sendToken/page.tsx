import DappNavbar from '@/app/components/DappNavbar'
import DappSendToken from '@/app/components/DappSendToken'
import React from 'react'

const SendToken = () => {
  return (
    <>
     <main  className='flex justify-center'>
     <section className='lg:max-w-7xl w-[95%] lg:w-full'>
        <DappNavbar />
        <DappSendToken />
     </section>
     </main>
    </>
  )
}

export default SendToken