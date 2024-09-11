import CustomAccordion from '@/components/CustomAccordion'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import HeadCustom from '@/components/HeadCustom'

const Scout = () => {
    return (
        <>
            <HeadCustom title="Scout" description="Cutting Edge Automated Trading Tools" />
            <div className='bg-[#1A2531] min-h-screen  items-center w-full flex flex-col '>
                <Navbar />

                <div className='text-center mt-[60px] w-[91%] sm:w-[80%] lg:w-auto'>
                    <h1 className='text-[#FFFFFF] text-[20px] sm:text-[34px]  sm:leading-[72px] font-[700] uppercase'>Unlocking Advanced Crypto Trading Insights</h1>
                    <h1 className='text-[#FDDE01] text-[45px] sm:text-[70px] sm:leading-[60px] font-[700] uppercase mb-[10px] sm:mb-[23px]'>Scout bot</h1>
                    <p className='text-[#EBEBEB]  lg:w-[895px] font-[300] text-[14px] sm:text-[16px] leading-[32px]'>
                        Scout by Blockbounce is the ultimate tool for crypto traders seeking a decisive edge in the market. Combining
                        advanced analytics with real-time market insights, Scout empowers you to make informed decisions, stay ahead
                        of trends, and unlock lucrative trading opportunities.
                    </p>
                </div>


                <button className='w-[207px] h-[46px] border-[2px] border-[#FDDE01] rounded-lg font-[700] text-[14px] leadng-8 text-[#FFFFFF] uppercase bg-[#212F40] mt-5'>
                    select plan
                </button>

                <div className='flex flex-col mb-5 lg:mb-0 lg:flex-row justify-center items-center' >
                    <img src="/assets/images/scout.png" height={'200'} width={'430'} alt="scout.png" className='mr-5' />

                    <div className='w-[91%] sm:w-[80%] lg:max-w-[603px] pr-3'>
                        <h1 className='text-[#FDDE01] text-center lg:text-start text-[15px] sm:text-[20px] leading-[35px] font-[600] uppercase'>Elevate Your Trading Strategy with Scout</h1>
                        <h1 className='text-[#FFFFFF] text-center lg:text-start text-[20px] sm:text-[30px] leading-[35px] font-[700] mt-[15px] '>
                            Discover the power of real-time analytics and market insights at your fingertips.
                        </h1>
                        <p className='font-[300] text-[14px] sm:text-[16px] text-center sm:text-start leading-8 text-[#EBEBEB] mt-[15px]'>
                            Utilizing a sophisticated algorithm, Scout analyzes the crypto market
                            landscape, offering detailed insights into market cap, liquidity, token types, and
                            more. By tracking recent swaps and insider positions, Scout enables traders to
                            act swiftly, capitalizing on opportunities as they arise.
                        </p>
                        <div className='flex  flex-col gap-y-[30px] mt-[30px]'>
                            <div className='flex flex-row items-start justify-start gap-x-[25px]'>
                                <img src="/assets/images/scout-stats.png" className='w-[40px] h-[40px]' />
                                <div>
                                    <h1 className='text-[#FFFFFF] text-[20px] sm:text-[24px] leading-[26px] font-[700] mb-2 sm:mb-5'>
                                        Stats Hub
                                    </h1>
                                    <p className='font-[300] text-[14px] sm:text-[16px] leading-8 text-[#EBEBEB]'>
                                        Get a comprehensive overview of crucial market metrics to guide your trading decisions.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-row items-start justify-start gap-x-[25px]'>
                                <img src="/assets/images/scout-timer.png" className='w-[40px] h-[40px]' />
                                <div>
                                    <h1 className='text-[#FFFFFF] text-[20px] sm:text-[24px] leading-[26px] font-[700] mb-2 sm:mb-5'>
                                        Insider Positions
                                    </h1>
                                    <p className='font-[300] text-[14px] sm:text-[16px] leading-8 text-[#EBEBEB]'>
                                        Leverage real-time data on the first 10 insider positions to spot emerging opportunities.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-row items-start justify-start gap-x-[25px]'>
                                <img src="/assets/images/scout-activity.png" className='w-[40px] h-[40px]' />
                                <div>
                                    <h1 className='text-[#FFFFFF] text-[20px] sm:text-[24px] leading-[26px] font-[700] mb-2 sm:mb-5'>
                                        Recent Activity
                                    </h1>
                                    <p className='font-[300] text-[14px] sm:text-[16px] leading-8 text-[#EBEBEB]'>
                                        Stay updated with the latest swaps and alerted transactions, keeping you ahead of the market curve.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='pb-[150px] sm:pb-[60px] w-[91%] sm:w-[80%] lg:w-auto'>
                    <h1 className='text-[#FDDE01] text-[45px] leading-[44px] text-center font-[700] uppercase mb-5'>FAQs</h1>
                    <CustomAccordion />
                </div>
                <div className='text-center mt-[60px] w-[91%] sm:w-[80%] lg:w-auto'>
                    <h1 className='text-[#FFFFFF] text-[20px] sm:text-[24px]  sm:leading-[72px] font-[700] uppercase'>START NOW</h1>
                    <h1 className='text-[#FDDE01] text-[45px] sm:text-[40px] sm:leading-[60px] font-[700] uppercase mb-[10px] sm:mb-[23px]'>READY TO TRANSFORM YOUR TRADING WITH SCOUT?
                    </h1>
                    <p className='text-[#EBEBEB]  lg:w-[895px] font-[300] text-[18px] sm:text-[18px] leading-[32px]'>
                        Register now to begin your journey to smarter, more informed trading decisions.
                    </p>
                </div>
                <button className='w-[207px] h-[46px] border-[2px] border-[#FDDE01] rounded-lg font-[700] text-[14px] leadng-8 text-[#FFFFFF] uppercase bg-[#212F40] mt-5'>
                    GET STARTED WITH SCOUT
                </button>
                <Footer />
            </div>
        </>
    )
}

export default Scout