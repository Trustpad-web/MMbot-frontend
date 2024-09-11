'use client'
import HeadCustom from '@/components/HeadCustom'
import Layout from '@/components/Layout';
import Image from 'next/image'
import { useState } from 'react';

function Index() {

    const typeData = [
        {
            type: 'GENERAL',
            data: ['What is Blockbounce?', 'How do Scout, Ace, and Otto differ from each other?', 'Who can benefit from using Blockbounce’s services?'],
        },
        {
            type: 'FAQS',
            data: ['Is there a trial period for any of the Blockbounce products?', 'How secure are Blockbounce’s trading bots?', 'How does Blockbounce ensure its trading tools remain effective in the volatile crypto market?'],
        },
    ];

    const [searchInput, setSearchInput] = useState('');

    const filteredTypeData = searchInput
        ? typeData.filter(({ type, data }) => (
            type.toLowerCase().includes(searchInput.toLowerCase()) ||
            data.some((item) => item.toLowerCase().includes(searchInput.toLowerCase()))
        ))
        : typeData;

    return (
        // <div className='w-full h-full'>
        //     <div className='flex items-center min-h-[60vh] xl:min-h-[98vh] justify-center'>
        //         <Image src="/assets/images/coming-soon.png" height={'364'} width={'644'} alt='' />
        //     </div>
        // </div>
        <>
            <HeadCustom title="Help" description="Blockbounce Help page" />
            <div className='main-content no-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden w-full h-full 530-1300:pt-[130px] 320-529:pt-[130px]  pt-[40px] pb-[40px] px-[40px] 320-529:px-[15px]'>
                <div className='flex justify-between 320-529:flex-col 530-1100:flex-col'>
                    <div className='mb-[30px]'>
                        <h4 className='font-poppins-medium text-[#FFE000] text-[24px] '>Help</h4>
                        <p className='text-[#CBD6E4] font-poppins-light text-[16px]'>Resources and assistance to support you in navigating our platform.</p>
                    </div>

                </div>
                <div className='bg-[#FFE000] mb-[30px] 320-529:pt-[30px] 320-529:pb-[25px]  flex flex-col items-center justify-between px-[50px] pt-[50px]  pb-[65px] rounded-[10px]  overflow-hidden relative z-[1] 320-529:px-[30px] '>
                    <div className='flex w-full flex-col justify-center items-center gap-[5px]'>
                        <h3 className='font-poppins-bold text-[40px] text-[#1A2531] 320-529:text-[30px] 320-529:font-poppins-semibold 320-529:leading-[35px]'>What can we help you with?</h3>
                        <p className='font-poppins-light 320-529:font-poppins-regular 320-529:text-[12px] text-[#1A2531] text-[16px]'></p>
                    </div>
                    <div className='flex gap-[10px] 320-529:py-[9px] 320-529:w-full 320-529:rounded-[41px] rounded-[10px] bg-[#1A2531] w-[76%] py-[13px] px-[20px] mt-[30px]'>
                        <Image src='/assets/images/srch.svg' alt='' width={30} height={30} />
                        <input type="text" placeholder="Type to search" onChange={(e) => setSearchInput(e.currentTarget.value)} value={searchInput} className='bg-[transparent] pr-[10px] text-[16px] font-poppins-light text-[#CBD6E4] border-none outline-none w-full' />
                    </div>
                    <div className='absolute right-[-20px]  z-[-1]'><Image src='/assets/images/bot-lg.svg' alt='' width={263} height={306} /></div>
                </div>

                <div className='grid grid-cols-3 320-529:grid-cols-1 320-529:gap-[15px] gap-[30px] 530-1100:grid-cols-1 530-1100:gap-20px'>
                    {filteredTypeData.map(({ type, data }, index) => (
                        <div key={index} className='w-full bg-[#212F40] rounded-[10px] py-[40px] px-[35px]'>
                            <h4 className='text-[#CBD6E4] text-[16px] font-poppins-medium mb-[10px] uppercase'>{type}</h4>
                            <div className='flex flex-col gap-[10px]'>
                                {data.map((item, dataIndex) => (
                                    <p key={dataIndex} className='text-[16px] text-[#CBD6E4] font-poppins-light'>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='fixed z-[10] bottom-[0] right-[30px]'>
                    <button type='button'><Image src='/assets/images/cht-thumb.svg' alt='' width={66} height={66} /></button>
                </div>
            </div>

        </>
    );
};

Index.Layout = Layout;
export default Index;