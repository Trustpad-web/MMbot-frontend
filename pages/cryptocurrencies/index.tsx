import HeadCustom from '@/components/HeadCustom'
import Layout from '@/components/Layout';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';


function Index() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const items = [
        {
            name: 'PARTY',
            status: 'ACTIVE',
            image: '/assets/images/pa1.png',
            code: 'PARcZnH...JJdo3zrZ',
            amount: '$80',
            percentage: '+120%',
        },
        {
            name: 'CHONKY',
            status: 'ACTIVE',
            image: '/assets/images/pa2.png',
            code: 'H7ed7U...jwLWWU',
            amount: '$250',
            percentage: '+19%',
        },
        {
            name: 'BONK',
            status: 'PAUSED',
            image: '/assets/images/pa3.png',
            code: 'DezXAZ...pPB263',
            amount: '$543',
            percentage: '-3%',
        },
        // Add more items as needed
    ];

    const [searchInput, setSearchInput] = useState('');

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className='w-full h-full'>
        <div className='flex items-center min-h-[60vh] xl:min-h-[98vh] justify-center'>
            <Image src="/assets/images/coming-soon.png" height={'364'} width={'644'} alt='' />
        </div>
    </div>
        // <>
        //     <HeadCustom title="Cryptocurrencies" description="Cutting Edge Automated Trading Tools" />
        //     <div className='main-content no-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden w-full h-full 530-1300:pt-[130px] 320-529:pt-[130px]  pt-[40px] pb-[40px] px-[40px] 320-529:px-[15px]'>
        //         <div className='flex justify-between 320-529:gap-[30px] 320-529:flex-col 530-1100:flex-col 530-1100:gap-[30px]  mb-[30px]'>
        //             <div className=''>
        //                 <h4 className='font-poppins-medium text-[#FFE000] text-[24px]'>Cryptocurrencies</h4>
        //                 <p className='text-[#CBD6E4] font-poppins-light text-[16px]'>Lorem ipsum dolor sit amet, consectetur</p>
        //             </div>
        //             <div className='search-filter flex gap-[10px] items-center 320-529:mb-[20px] '>
        //                 <div className='flex gap-[10px] border border-[#34475F] w-[410px] 320-529:w-[315px] rounded-[41px] py-[10px] px-[20px]'>
        //                     <Image src='/assets/images/search.svg' alt='' width={30} height={30} />
        //                     <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.currentTarget.value)} className='border-none font-poppins-light text-[#6F88A4] text-[16px] w-full outline-none bg-[transparent] ' placeholder={isMobile ? 'Search by token' : 'Search by token or paste address'} />
        //                 </div>
        //                 <div><button type='button' className='border border-[#34475F] rounded-[41px] w-[70px] flex justify-center items-center py-[10px]'><Image src='/assets/images/info.svg' alt='' width={30} height={30} /></button></div>
        //             </div>
        //         </div>
        //         <div className="w-full 320-529:w-full">


        //             <div className='flex flex-col gap-[15px] w-full pb-[60px]'>
        //                 {filteredItems.map((item, index) => (
        //                     <div key={index} className='flex w-full items-center justify-between bg-[#212F40] px-[20px] py-[15px] rounded-[10px]'>
        //                         <div className='flex gap-[15px]'>
        //                             <div className='flex-shrink-0'><Image src={item.image} width={38} height={38} alt='' /></div>
        //                             <div className='flex flex-col'>
        //                                 <h4 className='flex items-center gap-[10px] 320-529:gap-[20px] text-white text-[18px] font-poppins-semibold'>
        //                                     {item.name} <span className={`py-[1px] flex justify-center rounded-[5px] ${item.status === 'ACTIVE' ? 'bg-[#FDDE01]' : 'bg-[#ED5959]'} w-[77px] text-[13px] text-[${item.status === 'ACTIVE' ? '#314156' : '#fff'}]`}>
        //                                         {item.status}
        //                                     </span>
        //                                 </h4>
        //                                 <p className='text-[#798391] font-poppins-medium text-[14px]'>{item.code}</p>
        //                             </div>
        //                         </div>

        //                         <div className='1920:hidden 320-529:flex'>
        //                             <div className='flex items-center'>
        //                                 <div className='flex flex-col gap-[5px]'>
        //                                     <span className='inline-flex rounded-[5px] justify-center items-center  text-[18px] font-poppins-medium text-white bg-[#1A2531]'>{item.amount}</span>
        //                                     <h5 className='text-[#3DD598] font-poppins-medium text-[16px] '>{item.percentage}</h5>

        //                                 </div>
        //                                 <div className='pl-[20px]'>
        //                                     <Image src='/assets/images/arrow-back.svg' width={8} height={14} alt='' />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className=' 320-529:hidden flex items-center gap-[15px]'>
        //                             <div>
        //                                 <div className='flex gap-[5px]'>
        //                                     <h5 className='text-[#3DD598] font-poppins-medium text-[16px] '>{item.percentage}</h5>

        //                                 </div>
        //                             </div>
        //                             <div>
        //                                 <span className='py-[4px] inline-flex rounded-[5px] justify-center items-center w-[63px]  text-[18px] font-poppins-medium text-white bg-[#1A2531]'>{item.amount}</span>
        //                             </div>
        //                             <div className='pl-[20px]'>
        //                                 <Image src='/assets/images/arrow-back.svg' width={8} height={14} alt='' />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
};

Index.Layout = Layout;
export default Index;