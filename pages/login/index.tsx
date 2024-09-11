import HeadCustom from '@/components/HeadCustom'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function Login() {

  return (
    <>
      <HeadCustom title="Login" description="Cutting Edge Automated Trading Tools" />
      <main>
        <section className="flex flex-col justify-center h-screen items-center w-full bg-[#111921] 320-529:px-[20px] 530-767:px-[20px]">
          <div className='w-[587px] flex flex-col items-center justify-center bg-[#314156] pt-[20px] pb-[40px] pr-[30px] pl-[30px] rounded-[20px] 320-529:w-[100%] 320-529:px-[15px] 530-767:w-[100%]'>
            <div className='flex justify-center mb-[40px] mt-[40px]'>
              <Image src='/assets/images/brandlogo.svg' className='320-529:w-[75%]' alt='' width={300} height={72} />
            </div>
            <div className='flex justify-center rounded-[90px]'>
              <h4 className='text-white font-inter-bold text-[24px] mb-[40px] 320-529:text-[20px]'>Connect Wallet</h4>
            </div>
            <div className='flex flex-col gap-[10px] w-full'>
              <Link href={'/dashboard'} className='w-full'>
                <div className='flex items-center justify-between w-full bg-[#19232D] rounded-[20px] px-[25px] py-[18px]'>
                  <div className='w-[50%]'>
                    <h4 className='text-white font-inter-regular text-[18px] 320-529:text-[15px]'>Phantom</h4>
                  </div>
                  <div>
                    <Image src='/assets/images/wallet-bot.svg' alt='' width={35} height={35} />
                  </div>
                </div>
              </Link>
              <Link href={'/dashboard'} className='w-full'>
                <div className='flex items-center justify-between w-full bg-[#19232D] rounded-[20px] px-[25px] py-[18px]'>
                  <div className='w-[50%]'>
                    <h4 className='text-white font-inter-regular text-[18px] 320-529:text-[15px]'>Ledger</h4>
                  </div>
                  <div>
                    <Image src='/assets/images/wallet-bot.svg' alt='' width={35} height={35} />
                  </div>
                </div>
              </Link>
              <Link href={'/dashboard'} className='w-full'>
                <div className='flex items-center justify-between w-full bg-[#19232D] rounded-[20px] px-[25px] py-[18px]'>
                  <div className='w-[50%]'>
                    <h4 className='text-white font-inter-regular text-[18px] 320-529:text-[15px]'>Coinbase Wallet</h4>
                  </div>
                  <div>
                    <Image src='/assets/images/wallet-bot.svg' alt='' width={35} height={35} />
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

