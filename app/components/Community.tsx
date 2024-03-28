import Image from 'next/image'
import React from 'react';
import forward from '../assets/forward.svg'

const Community = () => {
  return (
    <main className='flex justify-center lg:mt-[140px] mt-[80px] lg:mb-[200px] '  data-aos="fade-down">
        <section className='lg:w-[87%] w-[90%] rounded-[10px] grad p-[2.3px]  '>
        <div className='flex justify-center rounded-[10px] bg-[#0b0b0b] h-full mb-[60px] lg:mb-[0px] w-full'>
            <div className='w-[90%] lg:mt-[70px] mt-[35px] lg:flex '>
                <div className='lg:w-[71%] text-center lg:text-left '>
                    <h1 className='leverage font-extrabold lg:text-[35px] text-[28px] leading-[42.3px] tracking-[0.2px] mb-[10px] lg:mb-[20px] '>Join Our Community</h1>
                    <p className='text-[#FFFFFF] font-medium lg:text-[20px] leading-[30px] tracking-[1px] lg:w-[75%] mb-[38px] lg:mb-[64px] '>Lorem ipsum dolor sit amet consectetur. Massa tincidunt malesuada ipsum imperdiet pulvinar nunc enim nulla. </p>
                </div>
                <button className='flex w-[200px] mx-auto lg:mx-[0px] lg:w-[279px] h-[67px] rounded-[8px] my-auto text-[#FFFFFF] justify-center items-center grad'>
                    <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] '>JOIN TELEGRAM</h2>
                    <Image src={forward} alt='icon' className='' />
                </button>
            </div>
        </div>
        </section>
    </main>
  )
}

export default Community