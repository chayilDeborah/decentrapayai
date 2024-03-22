import Image from 'next/image'
import React from 'react';
import feat from '../assets/feat.png'

const Features = () => {
  return (
    <main className='flex justify-center lg:mt-[185px] w-full '>
        <section className='text-center text-white w-[90%] '>
        <h1 className='lg:text-[40px] lg:leading-[48.4px] '><span className='leverage'> Our</span> Features</h1>
        <p className='font-medium lg:text-[18px] lg:leading-[21.78px] tracking-[0.2px] lg:mt-[20px] lg:mb-[50px] '>Lorem ipsum dolor sit amet consectetur. Nec id turpis arcu quam etiam ut.</p>
        <section className='grid grid-cols-1 lg:grid-cols-3 '>
            <div className='border border-[1px] rounded-[10px] pl-[27px]  w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>Escrow Payments</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Ensure the security of your transactions with DecentraPay AI&apos;s Escrow Payment service. Our platform acts as a trusted intermediary, holding funds securely until all transaction conditions are met, offering peace of mind to both buyers and sellers in the digital marketplace.</p>
            </div>
            <div className='border border-[1px] rounded-[10px] pl-[27px]  w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>Escrow Payments</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Ensure the security of your transactions with DecentraPay AI&apos;s Escrow Payment service. Our platform acts as a trusted intermediary, holding funds securely until all transaction conditions are met, offering peace of mind to both buyers and sellers in the digital marketplace.</p>
            </div>
            <div className='border border-[1px] rounded-[10px] pl-[27px]  w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>Escrow Payments</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Ensure the security of your transactions with DecentraPay AI&apos;s Escrow Payment service. Our platform acts as a trusted intermediary, holding funds securely until all transaction conditions are met, offering peace of mind to both buyers and sellers in the digital marketplace.</p>
            </div>
            <div className='border border-[1px] rounded-[10px] pl-[27px] mt-[52px]  w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>Escrow Payments</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Ensure the security of your transactions with DecentraPay AI&apos;s Escrow Payment service. Our platform acts as a trusted intermediary, holding funds securely until all transaction conditions are met, offering peace of mind to both buyers and sellers in the digital marketplace.</p>
            </div>
            <div className='border border-[1px] rounded-[10px] pl-[27px] mt-[52px] w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>Escrow Payments</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Ensure the security of your transactions with DecentraPay AI&apos;s Escrow Payment service. Our platform acts as a trusted intermediary, holding funds securely until all transaction conditions are met, offering peace of mind to both buyers and sellers in the digital marketplace.</p>
            </div>
            <div className='border border-[1px] rounded-[10px] pl-[27px] mt-[52px] w-[336px] '>
                <Image src={feat} alt='feature-img' className='mx-auto my-[40px] ' />
                <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px] text-left '>Escrow Payments</h1>
                <p className='text-[15px] leading-[30px] tracking-[0.2px] text-left mt-[30px] mb-[44px] w-[94%] '>Ensure the security of your transactions with DecentraPay AI&apos;s Escrow Payment service. Our platform acts as a trusted intermediary, holding funds securely until all transaction conditions are met, offering peace of mind to both buyers and sellers in the digital marketplace.</p>
            </div>

        </section>
        </section>

    </main>
  )
}

export default Features