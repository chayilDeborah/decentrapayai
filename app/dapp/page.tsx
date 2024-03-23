import React from 'react'
import DappNavbar from '../components/DappNavbar'
import DappsHome from '../components/DappsHome'

const Dapp = () => {
  return (
    <>
    <main  className='flex justify-center'>
    <section className='lg:max-w-7xl w-[95%] lg:w-full'>
        <DappNavbar />
        <DappsHome />
    </section>
    </main>
    </>
  )
}

export default Dapp