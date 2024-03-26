import React from 'react'
import InvoiceData from '../data.json'
import Image from 'next/image';
import qrcode from '../assets/qrcode.svg'

interface Invoices {
	dateTime: string;
	transactionID: string;
	senderWalletAdd: string;
	coinSent: string;
	receiverWalletAdd: string;
	status: string;
	coinReceived: string;
	networkFee: string;
	total: string;
    amount: string
}


const InvoiceDetails = () => {
    const invoices: Invoices[] = InvoiceData;
  return (
   <>
   <main className='flex justify-center items-center lg:mt-[15px] text-white '>
    <section  className='flex justify-center items-center lg:mt-[15px] w-full '>
        { invoices.map((invoice, index) => (
            <div className='mx-auto bg-[#253046]  p-[90px] w-[60%] ' key={index}>
                <Image src={qrcode} alt='qr code ' className='mx-auto' />
                <div  className='mx-auto leading-[30.2px] tracking-[0.2px] text-center'>
                    <h1 className='font-extrabold text-[18px] mt-[15px]   '>Amount</h1>
                    <h1  className='text-[19px] '>{invoice.amount}</h1>
                    <p className='text-[14px] '>Your payment is complete</p>
                    <p className='text-[14px] text-[#1CBBC4] ' >View payment</p>
                    <section className='flex justify-between mt-[23px] '>
                        <h1 className='font-bold text-[18px] '>Status</h1>
                        <h3>{invoice.status}</h3>
                    </section>
                    <section className='flex justify-between mt-[23px] '>
                        <h1 className='font-bold text-[18px] '>Date & Time</h1>
                        <h3>{invoice.dateTime}</h3>
                    </section>
                    <section className='flex justify-between mt-[23px] '>
                        <h1 className='font-bold text-[18px] '>Transaction ID</h1>
                        <h3>{invoice.transactionID}</h3>
                    </section>
                    <section className='flex justify-between mt-[23px] '>
                        <h1 className='font-bold text-[18px] '>Sender&apos;s Wallet Address</h1>
                        <h3>{invoice.senderWalletAdd}</h3>
                    </section>
                    <section className='flex justify-between mt-[23px] '>
                        <h1 className='font-bold text-[18px] '>Coin Sent</h1>
                        <h3>{invoice.coinSent}</h3>
                    </section>
                    <section className='flex justify-between mt-[23px] '>
                        <h1 className='font-bold text-[18px] '>Receiver&apos;s Wallet Address</h1>
                        <h3>{invoice.receiverWalletAdd}</h3>
                    </section>
                    <section className='flex justify-between mt-[23px] '>
                        <h1 className='font-bold text-[18px] '>Coin Received</h1>
                        <h3>{invoice.coinReceived}</h3>
                    </section>
                    <section className='flex justify-between mt-[23px] '>
                        <h1 className='font-bold text-[18px] '>Network Fee</h1>
                        <h3>{invoice.networkFee}</h3>
                    </section>
                    <hr className='my-[20px]'/>
                    <section className='flex justify-between mt-[23px] '>
                        <h1 className='font-bold text-[18px] '>Total</h1>
                        <h3>{invoice.total}</h3>
                    </section>
                    <p className='text-center mt-[40px] '>Need any Help? contact <span className='mx-auto text-[#1CA6B0] '>support@decentrapayai.com </span></p>
                    <p className='text-center mt-[20px]'>Payment processed ny Coinbase Commerce</p>
                </div>
            </div>
        ))}
        <div>
            
        </div>

    </section>

   </main>
   </>
  )
}

export default InvoiceDetails