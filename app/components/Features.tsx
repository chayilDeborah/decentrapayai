import Image from 'next/image'
import React from 'react';
import feat from '../assets/feat.png'

const Features = () => {
  return (
    <main className='flex justify-center lg:mt-[185px] mt-[100px] w-full ' id='features'  data-aos="zoom-out">
        <section className='text-center text-white w-full '>
        <h1 className='lg:text-[40px] text-[28px] lg:leading-[48.4px] '><span className='leverage'> Our</span> Features</h1>
        <p className='font-medium lg:text-[18px] text-[15px] leading-[24px] lg:leading-[21.78px] tracking-[0.2px] mt-[14px] lg:mt-[20px] mb-[30px] lg:mb-[50px] '>Lorem ipsum dolor sit amet consectetur. Nec id turpis arcu quam etiam ut.</p>
        <section className='grid grid-cols-1 lg:grid-cols-3 flex justify-center lg:w-[87%] w-[90%] mx-auto  '>
            <div className='border border-[1px] rounded-[10px] pl-[27px] w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>Escrow Payments</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Ensure the security of your transactions with DecentraPay AI&apos;s Escrow Payment service. Our platform acts as a trusted intermediary, holding funds securely until all transaction conditions are met, offering peace of mind to both buyers and sellers in the digital marketplace.</p>
            </div>
            <div className='border border-[1px] rounded-[10px] pl-[27px]  mt-[52px] lg:mt-[0px] w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>Invoices</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Create, send, and manage invoices with ease. DecentraPay AI provides a streamlined invoicing solution that allows businesses to issue professional and detailed invoices quickly, enhancing efficiency and customer satisfaction.</p>
            </div>
            <div className='border border-[1px] rounded-[10px] pl-[27px]  mt-[52px] lg:mt-[0px] w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>Receipts</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Automate your receipt generation with our intelligent system. Upon completion of transactions, DecentraPay AI instantly provides digital receipts, ensuring transparent and verifiable proof of payment for both parties involved.</p>
            </div>
            <div className='border border-[1px] rounded-[10px] pl-[27px] mt-[52px]  w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[23px] leading-[30.2px] tracking-[0.2px] text-left '>Accept Cryptocurrency Payments Anonymously</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Expand your customer base by accepting cryptocurrency payments. DecentraPay AI enables businesses to accept various cryptocurrencies as payment, all while maintaining the anonymity of the transaction parties, ensuring privacy and security.</p>
            </div>
            <div className='border border-[1px] rounded-[10px] pl-[27px] mt-[52px] w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>Escrow Payments</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Ensure the security of your transactions with DecentraPay AI&apos;s Escrow Payment service. Our platform acts as a trusted intermediary, holding funds securely until all transaction conditions are met, offering peace of mind to both buyers and sellers in the digital marketplace.</p>
            </div>
            <div className='border border-[1px] rounded-[10px] pl-[27px] mt-[52px] w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>AI Mediator</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Resolve disputes with the help of our AI Mediator. This innovative feature employs advanced algorithms to mediate conflicts between transaction parties, proposing fair solutions quickly and efficiently, thus minimizing the need for human intervention.</p>
            </div>

        </section>
        </section>

    </main>
  )
}

export default Features