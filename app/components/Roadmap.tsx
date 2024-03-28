import React from 'react'
import Image from 'next/image'
import feat from '../assets/feat.png'


const Roadmap = () => {
    return (
        <main className='flex justify-center lg:mt-[185px]  mt-[100px] w-full ' data-aos="zoom-in">
            <section className='text-center text-white w-full '>
                <h1 className='lg:text-[40px] text-[28px] lg:leading-[48.4px] '>Our<span className='leverage'> Roadmap</span></h1>
                <p className='font-medium lg:text-[18px] text-[15px] leading-[29px] lg:leading-[21.78px] tracking-[0.2px] mt-[10px] lg:mt-[20px] mb-[30px] lg:mb-[50px] lg:w-[68%] mx-auto '>Lorem ipsum dolor sit amet consectetur. Massa tincidunt malesuada ipsum imperdiet pulvinar nunc enim nulla. Velit tincidunt tellus tincidunt malesuada nibh porttitor.</p>
                <section className='grid grid-cols-1 lg:grid-cols-3 flex justify-center lg:w-[90%] w-[90%] mx-auto  space-y-[40px] lg:space-y-[0px]  '>
                    <div className='border border-[1px] rounded-[10px] pl-[27px]  w-[336px] '>
                        <Image src={feat} alt='feature-img' className='mx-auto mb-[20px] lg:mt-[40px] ' />
                        <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px]  '>PHASE ONE</h1>
                        <div className='text-[15px] leading-[30px] w-[80%] tracking-[0.2px] text-left mt-[30px] mb-[44px] ml-[20px] '>
                            <ul className="list-disc">
                                <li>Website Launch</li>
                                <li>Documentation Launch</li>
                                <li>Development: Launch of the Beta DApp Version.</li> mt-[100px]
                                <li>Development: Launch of the Beta Bot.</li>
                                <li>Launch: Token Deployment on Ethereum.</li>
                                <li>Marketing and Listing on Uniswap.</li>
                            </ul>
                        </div> 
                    </div>
                    <div className='border border-[1px] rounded-[10px] pl-[27px]  w-[336px] '>
                        <Image src={feat} alt='feature-img' className='mx-auto mb-[20px] lg:mt-[40px] ' />
                        <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px]  '>PHASE TWO</h1>
                        <div className='text-[15px] leading-[30px] w-[80%] tracking-[0.2px] text-left mt-[30px] mb-[44px] ml-[20px] '>
                            <ul className="list-disc">
                                <li>Development: More features to DApp and Bot.</li>
                                <li className='mt-[5px] '>Development: Premium features.</li>
                                <li className='mt-[5px] '>Early Incentives Program </li>
                                <li className='mt-[5px] '>Youtube Marketing, Spaces, AMAs.</li>
                            </ul>
                        </div> 
                    </div>
                    <div className='border border-[1px] rounded-[10px] pl-[27px]  w-[336px] '>
                        <Image src={feat} alt='feature-img' className='mx-auto mb-[20px] lg:mt-[40px] ' />
                        <h1 className='font-extrabold text-[25px] leading-[30.2px] tracking-[0.2px]  '>PHASE THREE</h1>
                        <div className='text-[15px] leading-[30px] w-[80%] tracking-[0.2px] text-left mt-[30px] mb-[44px] ml-[20px] '>
                            <ul className="list-disc">
                                <li>Development: More features to dApp and Bot.</li>
                                <li>Development: Mobile Applications.</li>
                                <li>Launch: Auto Revenue Sharing System.</li>
                                <li>Continuous Marketing and Top Tier KOLs.</li>
                            
                            </ul>
                        </div> 
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Roadmap