

import InvoiceDetails from '@/app/components/InvoiceDetails'
import InvoiceNav from '@/app/components/InvoiceNav'
import React from 'react'

const Invoice = () => {
  return (
    <>
     <main  className='flex justify-center'>
     <section className='lg:max-w-7xl w-[95%] lg:w-full'>
        <InvoiceNav />
        <InvoiceDetails />
     </section>
     </main>
    </>
  )
}

export default Invoice