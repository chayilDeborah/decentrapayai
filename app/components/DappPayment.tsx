import Image from 'next/image'
import React from 'react';
import logonly from '../assets/logonly.svg'

const DappPayment = () => {
    return (
        <main className='flex justify-center lg:mt-[92px] mt-[45px] mb-[100px] lg:w-full w-[95%] lg:mx-[0px] mx-auto lg:mb-[200px] text-white'>
            <div>
                <section className=' lg:w-[858px] w-[270px]  text-white rounded-[10px] p-[1.3px] grad'>
                    <div className='flex justify-center rounded-[10px] bg-[#13151B] h-full w-full'>
                        <div>
                            <div className='flex justify-between w-[90%] lg:mb-[84px] '>
                                <section className='lg:mt-[66px] font-semibold  tracking-[0.2px]' >
                                    <h1 className=' lg:text-[23px] lg:leading-[27.8px]  '>Create New Payment Request (Invoice)</h1>
                                    <p className='lg:text-[15px] lg:leading-[18.1px] my-[5px]'>Type: Disposable (One time use)</p>
                                    <p className='lg:text-[15px] lg:leading-[18.1px]'>100% Anonymous</p>
                                </section>
                                <Image src={logonly} alt='logo' className='lg:w-[35px] h-[35px] lg:mt-[67px] ' />
                            </div>
                            <form className='text-[#9D9D9D] lg:text-[13px] lg:leading-[15.7px] font-semibold tracking-[0.2px] '>
                                <h3 className='mb-[25px] '>Issue Date: Sat Mar 23 2024</h3>
                                <section className='flex lg:flex-col  '>
                                    <label className='mb-[15px] '>Request Description:</label>
                                    <textarea className='lg:w-[758px] lg:h-[102px] rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pt-[15px]  ' />
                                </section>
                                <section className='mt-[15px] lg:w-[353px] '>
                                    <h3>Payment Amount: (Select token and network carefully)</h3>
                                    <p className='mt-[10px] text-right '>Min: 0.045</p>
                                    <input className='rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B]' />
                                </section>
                                <section>
                                    <h3 className='my-[15px] '>Payment Receiver Wallet: (100% Private. It will not be visible to payer.)</h3>
                                    <textarea className='lg:w-[758px] lg:h-[58px] rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pt-[15px]  ' />
                                </section>
                                <section className='mb-[45px] '>
                                    <h3 className='my-[15px] '>Private Note: (Only accessible by you)</h3>
                                    <textarea className='lg:w-[758px] lg:h-[58px] rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pt-[15px]  ' />
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