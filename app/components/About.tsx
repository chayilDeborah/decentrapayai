import Image from 'next/image'
import React from 'react';
import arrowright from '../assets/arrowright.svg';
import cube from '../assets/cube.png'

const About = () => {
  return (
    <main className='flex justify-center lg:mt-[200px] mt-[100px] ' id='about'  data-aos="fade-up">
        <section className='w-full lg:flex lg:space-x-[50px] '>
            <div className='text-white'>
                <h1 className='lg:text-[40px] text-[28px] lg:text-left text-center lg:leading-[48.4px] '><span className='leverage'>About</span> DecentraPay</h1>
                <p className='lg:text-[20px] text-[14px] lg:text-left text-center lg:leading-[39.38px] leading-[27px]  lg:w-[542px] mt-[20px] '>DecentraPay AI stands at the forefront of innovation, offering an unparalleled suite of payment solutions designed for the modern economy. With our commitment to security, anonymity, and efficiency, we empower businesses and individuals to navigate the complexities of online transactions with confidence and ease.</p>
                <div className='grad lg:w-[555px] h-[1px] my-[30px] '/>
                <button className=' w-[218.6px] h-[64px] flex lg:block lg:mx-[0px] mx-auto rounded-[60px] text-[#FFFFFF] grad p-[1.7px]'>
                    <div className='flex justify-center rounded-[60px] items-center bg-[#0b0b0b] flex h-full w-full'>
                    <h2 className='lg:text-[19.4px] lg:leading-[24px] mr-[16px] '>Learn more</h2>
                    <Image src={arrowright} alt='arrow' className=' ' />
                    </div>
                </button>
            </div>
            <Image src={cube} alt='cube' className='mt-[35px] lg:mt-[0px]' />

        </section>

    </main>
  )
}

export default About