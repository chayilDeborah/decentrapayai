"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import ethLogo from '../assets/eth.png';
import sol from '../assets/sol.png'
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

// interface TokenOption {
//     value: string;
//     label: string;
//     logo: any;
// }
const tokens = [
    { symbol: 'ETH', logo: '/eth.png' },
    { symbol: 'SOL', logo: '/sol.png' },
    { symbol: 'ETH', logo: '/eth.png' },
    { symbol: 'SOL', logo: '/sol.png' },
    // { symbol: 'WEN', logo: '/wen-logo.png' },
];

const DappSendToken = () => {

    const [selectedToken, setSelectedToken] = useState(tokens[0]);

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
                                    <section className='flex justify-between rounded-[6px] w-[287px] lg:w-[540px] h-[77px]  border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pr-[10px] ' >
                                        <input className='text-[18px] leading-[21.78px] w-[140px] lg:w-[190px] tracking-[0.2px] rounded-[6px]    bg-[#13151B] outline outline-none ' placeholder='Enter Amount' />
                                        <Menu as="div" className="relative inline-block my-auto text-left  ">
                                            <div>
                                                <Menu.Button className="inline-flex justify-center w-[123px] h-[57px] items-center px-4 py-2 text-[17px] font-medium text-white bg-[#22252F] border border-[#22252F] rounded-[7px] leading-[20.5px] shadow-sm  focus:outline-none focus:ring-0 focus:ring-none focus:ring-offset-0 focus:ring-offset-none">
                                                    <Image width={40}
                                                        height={40}
                                                        src={selectedToken.logo}
                                                        alt={selectedToken.symbol}
                                                        className="w-[30px] h-[30px] mr-2"
                                                    />
                                                    {selectedToken.symbol}
                                                    <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={React.Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {tokens.map((token, index) => (
                                                        <Menu.Item key={index}>
                                                            {({ active }) => (
                                                                <button
                                                                    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                                                    onClick={() => setSelectedToken(token)}
                                                                >
                                                                    <Image width={40}
                                                                        height={40}
                                                                        src={token.logo}
                                                                        alt={token.symbol}
                                                                        className="w-5 h-5 mr-2"

                                                                    />
                                                                    {token.symbol}
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </section>
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