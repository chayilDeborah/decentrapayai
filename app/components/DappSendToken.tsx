import React from 'react'

const DappSendToken = () => {
  return (
    <main className='flex justify-center lg:mt-[92px] mt-[45px] mb-[100px] lg:w-full w-[95%] lg:mx-[0px] mx-auto lg:mb-[200px] text-[#9D9D9D] '>
        <div>
        <section className=' lg:w-[602px] w-[270px]  text-white rounded-[10px] p-[1.3px] grad'>
        <div className='flex justify-center rounded-[10px] bg-[#13151B] h-full w-full'>
            <div className='  tracking-[0.2px] w-[90%] '>
                <h1 className='font-semibold lg:text-[23px] lg:leading-[27.8px] text-[#FFFFFF] lg:mt-[50px] mb-[29px]  '>Send Anonymously</h1>
                <form className='text-[#D2D2D2] font-semibold lg:text-[16px] lg:leading-[27.8px] '>
                    <section>

                        <label className='flex justify-between mb-[13px] '>
                            <h2>Send</h2>
                            <h2>Min: 0.045</h2>
                        </label>
                        <input  className=' rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pt-[15px]'/>
                        <section className='mt-[30px] mt-[15px] mb-[40px] '>
                            <label className='font-medium ' >Receiving Wallet Address</label>
                            <input className='lg:w-[540px] lg:h-[58px] mt-[15px] rounded-[6px] border-[0.5px] border-[#525252] bg-[#13151B] outline outline-none pl-[15px] pt-[7px]' placeholder='0x159...32'/>
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