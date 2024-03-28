"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import logonly from '../assets/logonly.svg'
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const tokens = [
    { symbol: 'ETH', logo: '/eth.png' },
    { symbol: 'SOL', logo: '/sol.png' },
    { symbol: 'ETH', logo: '/eth.png' },
    { symbol: 'SOL', logo: '/sol.png' },
    // { symbol: 'WEN', logo: '/wen-logo.png' },
];

const DappPayment = () => {

    const [selectedToken, setSelectedToken] = useState(tokens[0]);

    return (
        <main className='flex justify-center lg:mt-[92px] mt-[60px] mb-[100px] lg:w-full w-[95%] lg:mx-[0px] mx-auto lg:mb-[200px] text-white' data-aos="zoom-in">
            <div>
                <section className=' lg:w-[858px]  text-white rounded-[10px] p-[1.3px] grad'>
                    <div className='flex justify-center rounded-[10px] bg-[#13151B] h-full w-full'>
                        <div className='lg:w-[87%] w-[90%] lg:mx-[0px] mx-auto '>
                            <div className='flex justify-between w-full lg:w-[90%] mb-[40px] lg:mb-[84px] '>
                                <section className='lg:mt-[66px] mt-[30px] font-semibold  tracking-[0.2px]' >
                                    <h1 className='text-[18px] lg:text-[23px] leading-[27.8px]  '>Create New Payment Request (Invoice)</h1>
                                    <p className='lg:text-[15px] text-[14px] leading-[18.1px] my-[5px]'>Type: Disposable (One time use)</p>
                                    <p className='lg:text-[15px] text-[14px] leading-[18.1px]'>100% Anonymous</p>
                                </section>
                                <Image src={logonly} alt='logo' className='lg:w-[35px] h-[35px] mt-[30px] lg:mt-[67px] ' />
                            </div>
                            <form className='text-[#9D9D9D] lg:text-[13px] lg:leading-[15.7px] font-semibold tracking-[0.2px] '>
                                <h3 className='mb-[25px] '>Issue Date: Sat Mar 23 2024</h3>
                                <section className='flex flex-col  '>
                                    <label className='mb-[15px] '>Request Description:</label>
                                    <textarea className='lg:w-[758px] w-[93%] h-[84px] lg:h-[102px] rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pt-[15px]  ' />
                                </section>
                                <section className='mt-[15px] lg:w-[353px] '>
                                    <h3>Payment Amount: (Select token and network carefully)</h3>
                                    <p className='mt-[10px] text-right '>Min: 0.045</p>
                                    <section className='flex mt-[15px] justify-between rounded-[6px] w-[287px] lg:w-[344px] h-[77px]  border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pr-[10px] ' >
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
                                </section>
                                <section>
                                    <h3 className='my-[15px] '>Payment Receiver Wallet: (100% Private. It will not be visible to payer.)</h3>
                                    <textarea className='lg:w-[758px] w-[93%] h-[84px] lg:h-[58px] rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pt-[15px]  ' />
                                </section>
                                <section className='mb-[45px] '>
                                    <h3 className='my-[15px] '>Private Note: (Only accessible by you)</h3>
                                    <textarea className='lg:w-[758px] w-[93%] h-[84px] lg:h-[58px] rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pt-[15px]  ' />
                                </section>
                                <section className='mx-auto lg:w-[310px] mb-[40px] '>
                                <button type='submit' className='flex lg:w-[310px] w-[270px] h-[64px] rounded-[10px] justify-center items-center  mx-auto lg:mx-[0px]  grad'>
                                    <h2 className='lg:text-[22px] lg:leading-[26.6px] tracking-[0.46px] font-bold text-[#FFFFFF] '>Create Payment Request</h2>
                                </button>
                                </section>
                            </form>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    )
}

export default DappPayment