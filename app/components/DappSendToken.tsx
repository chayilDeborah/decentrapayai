"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react';
import ethLogo from '../assets/eth.png';
import sol from '../assets/sol.png'


interface TokenOption {
    value: string;
    label: string;
    logo: any;
}


const DappSendToken = () => {

    const tokenOptions: TokenOption[] = [
        { value: 'eth', label: 'ETH', logo: ethLogo },
        { value: 'eth', label: 'ETH', logo: ethLogo },
        { value: 'eth', label: 'ETH', logo: ethLogo },

    ];

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
    };

    return (
        <main className='flex justify-center lg:mt-[92px] mt-[60px] mb-[100px] lg:w-full w-[95%] lg:mx-[0px] mx-auto lg:mb-[200px] text-[#9D9D9D] ' data-aos="fade-down">
            <div>
                <section className=' lg:w-[602px] text-white rounded-[10px] p-[1.3px] grad'>
                    <div className='flex justify-center rounded-[10px] bg-[#13151B] h-full w-full'>
                        <div className='  tracking-[0.2px] w-[85%] lg:w-[90%] '>
                            <h1 className='font-semibold text-[23px] lg:leading-[27.8px] text-[#FFFFFF] lg:mt-[50px] mt-[30px] mb-[20px] lg:mb-[29px]  '>Send Anonymously</h1>
                            <form className='text-[#D2D2D2] font-semibold lg:text-[16px] lg:leading-[27.8px] '>
                                <section>

                                    <label className='flex justify-between mb-[13px] '>
                                        <h2>Send</h2>
                                        <h2>Min: 0.045</h2>
                                    </label>
                                    <input className=' rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pt-[15px]' />
                                    <div className=' rounded-[6px] flex border-[0.5px] w-[344px] h-[77px]  border-[#525252] bg-[#13151B] outline outline-none '>
                                        <select className='border-[0.5px] w-[344px] h-[77px]  border-[#525252] bg-[#13151B] outline outline-none'>
                                            <option>ETH</option>
                                            <option>SOL</option>
                                            <option>ETH</option>
                                        </select>
                                    </div>

                                    <select
                                        onChange={handleChange}
                                        className="block px-4 py-2 mt-1 w-full rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        {tokenOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                <Image src={ethLogo} alt={option.label} width={30} height={30} className="w-full h-full relative" />
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>

                                    <section className='mt-[30px] mt-[15px] mb-[40px] '>
                                        <label className='font-medium ' >Receiving Wallet Address</label>
                                        <input className='lg:w-[540px] w-full lg:h-[58px] h-[51px] mt-[15px] rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px]' placeholder='0x159...32' />
                                    </section>
                                    <section className='mx-auto lg:w-full mb-[40px] '>
                                        <button type='submit' className='flex lg:w-full w-[270px] h-[64px] rounded-[10px] justify-center items-center  mx-auto lg:mx-[0px]  grad'>
                                            <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] font-bold text-[#FFFFFF] '>Send ETH</h2>
                                        </button>
                                    </section>
                                </section>
                            </form>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    )
}

export default DappSendToken