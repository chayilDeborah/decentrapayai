import Image from 'next/image'
import React from 'react';
import forward from '../assets/forward.svg'

const Community = () => {
  return (
    <main className='flex justify-center lg:mt-[140px] lg:mb-[200px] '>
        <section className='lg:w-[87%] rounded-[10px] grad p-[2.3px]  '>
        <div className='flex justify-center rounded-[10px] bg-[#0b0b0b] h-full w-full'>
            <div className='w-[90%] lg:mt-[70px] flex '>
                <div className='w-[71%] '>
                    <h1 className='leverage font-extrabold lg:text-[35px] leading-[42.3px] tracking-[0.2px]  lg:mb-[20px] '>Join Our Community</h1>
                    <p className='text-[#FFFFFF] font-medium lg:text-[20px] lg:leading-[30px] tracking-[1px] lg:w-[75%] mb-[64px] '>Lorem ipsum dolor sit amet consectetur. Massa tincidunt malesuada ipsum imperdiet pulvinar nunc enim nulla. </p>
                </div>
                <button className='flex lg:w-[279px] h-[67px] rounded-[8px] my-auto text-[#FFFFFF] justify-center items-center grad'>
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