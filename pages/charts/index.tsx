'use client'
import HeadCustom from '@/components/HeadCustom'
import Layout from '@/components/Layout';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Listbox, Transition } from '@headlessui/react';



const ApexChart = dynamic(() => import('@/components/ApexChart'), { ssr: false });


function Index() {
    const [selectedOption, setSelectedOption] = useState<{ id: number, name: string } | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const options = [
        { id: 1, name: 'BTC - USDT' },
        { id: 2, name: 'ETH - USDT' },
        { id: 3, name: 'EGT - USDT' },
    ];
    return (
        <div className='w-full h-full'>
            <div className='flex items-center min-h-[60vh] xl:min-h-[98vh] justify-center'>
                <Image src="/assets/images/coming-soon.png" height={'364'} width={'644'} alt='' />
            </div>
        </div>
        // <>
        //     <HeadCustom title="Dashboard" description="Cutting Edge Automated Trading Tools" />
        //     <div className='main-content no-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden w-full h-full 530-1300:pt-[130px] 320-529:pt-[130px]  pt-[40px] pb-[40px] px-[40px] 320-529:px-[15px]'>
        //         <div className='flex justify-between 320-529:flex-col 530-1100:flex-col'>
        //             <div className='mb-[30px]'>
        //                 <h4 className='font-poppins-medium text-[#FFE000] text-[24px]'>Charts</h4>
        //                 <p className='text-[#CBD6E4] font-poppins-light text-[16px]'>Lorem ipsum dolor sit amet, consectetur</p>
        //             </div>
        //             <div className='search-filter flex gap-[10px] items-center 320-529:mb-[20px] 530-1100:mb-[30px]  '>
        //                 <div className='flex items-center gap-[10px] border border-[#34475F] w-[282px] 320-529:w-[243px]  rounded-[41px] py-[8px] px-[20px]'>
        //                     <Image src='/assets/images/calendar.svg' alt='' width={30} height={30} />
        //                     <p className='text-[#CBD6E4] text-[14px] font-opensans-regular '>{isMobile ? '4 June - 17 June' : '4 June 2020 - 17 June 2020'}</p>
        //                 </div>
        //                 <div>
        //                     <Listbox value={selectedOption} onChange={setSelectedOption}>
        //                         {({ open }) => (
        //                             <>
        //                                 <div className="relative">
        //                                     <Listbox.Button className=" w-[191px] 320-529:w-[146px] relative  py-[12px]  px-[20px] text-left  border border-[#34475F] rounded-[41px] ">
        //                                         <span className="block truncate text-[#CBD6E4] font-opensans-regular text-[14px]">{selectedOption ? selectedOption.name : 'BTC - USDT'}</span>
        //                                         <span className="absolute inset-y-0 right-[15px] flex items-center pr-2 pointer-events-none">
        //                                             <Image src='/assets/images/select-chv.svg' alt='' width={9} height={5} />
        //                                         </span>
        //                                     </Listbox.Button>
        //                                     <Transition
        //                                         show={open}
        //                                         enter="transition ease-out duration-100"
        //                                         enterFrom="transform opacity-0 scale-95"
        //                                         enterTo="transform opacity-100 scale-100"
        //                                         leave="transition ease-in duration-75"
        //                                         leaveFrom="transform opacity-100 scale-100"
        //                                         leaveTo="transform opacity-0 scale-95"
        //                                     >
        //                                         <Listbox.Options
        //                                             static
        //                                             className="absolute cursor-pointer z-10 w-full py-[10px] mt-1 overflow-auto text-base bg-[#1A2531] rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        //                                         >
        //                                             {options.map((option) => (
        //                                                 <Listbox.Option
        //                                                     key={option.id}
        //                                                     value={option}
        //                                                     className={({ active }) =>
        //                                                         `${active ? 'text-white bg-blue-600' : 'text-[#CBD6E4]'}
        //                  select-none relative py-2 pl-10 pr-4 font-opensans-regular cursor-pointer text-[14px]`
        //                                                     }
        //                                                 >
        //                                                     {({ selected, active }) => (
        //                                                         <>
        //                                                             <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>
        //                                                                 {option.name}
        //                                                             </span>
        //                                                             {selected && (
        //                                                                 <span
        //                                                                     className={`${active ? 'text-white' : 'text-blue-600'}
        //                       absolute inset-y-0 left-0 flex items-center pl-3`}
        //                                                                 >

        //                                                                 </span>
        //                                                             )}
        //                                                         </>
        //                                                     )}
        //                                                 </Listbox.Option>
        //                                             ))}
        //                                         </Listbox.Options>
        //                                     </Transition>
        //                                 </div>
        //                             </>
        //                         )}
        //                     </Listbox></div>

        //             </div>
        //         </div>
        //         <div className='flex flex-col gap-[25px]  py-[20px] mb-[40px] 320-529:flex 530-1100:flex 1920:hidden bg-[#212F40] rounded-[10px]'>
        //             <div className=' border-b border-[#34475F]'>
        //                 <div className='flex flex-col px-[30px] pb-[20px]'>
        //                     <h4 className='font-montserrat-regular text-[18px] text-white'>Price</h4>
        //                     <p className='font-montserrat-regular text-[28px] text-white'>$9,542.39</p>
        //                 </div>
        //             </div>
        //             <div className='border-b border-[#34475F]'>
        //                 <div className='flex gap-[25px] px-[30px] pb-[10px]'>
        //                     <div className='flex flex-col gap-[5px]'>
        //                         <h4 className='font-montserrat-regular text-[14px] text-white'>24h% change</h4>
        //                         <p className='flex items-center gap-[10px] text-[#2BC155] font-montserrat-regular text-[20px]'>1.64% <span><Image src='/assets/images/green-chevron.svg' alt='' width={11} height={11} /></span></p>
        //                     </div>
        //                     <div className='flex flex-col gap-[5px]'>
        //                         <h4 className='font-montserrat-regular text-[14px] text-white'>Volume (24h)</h4>
        //                         <p className='text-white font-montserrat-regular text-[20px]'>$47.22B</p>
        //                     </div>
        //                     <div className='flex flex-col gap-[5px]'>
        //                         <h4 className='font-montserrat-regular text-[14px] text-white'>Market Cap</h4>
        //                         <p className='text-white font-montserrat-regular text-[20px]'>$219.24B</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='flex gap-[40px] px-[30px]'>
        //                 <div className='flex gap-[10px]'> <h4 className='text-[#2BC155] font-montserrat-regular text-[18px]'>BUY</h4> <p className='text-white font-montserrat-regular text-[18px]'>$5,673</p></div>
        //                 <div className='flex gap-[10px]'> <h4 className='text-[#FF3E3E] font-montserrat-regular text-[18px]'>SELL</h4> <p className='text-white font-montserrat-regular text-[18px]'>$5,982</p></div>
        //             </div>
        //         </div>
        //         <div className='bg-[#212F40] px-[30px] py-[40px] rounded-[10px]'>
        //             <div className='flex px-[30px] justify-between items-center mb-[40px] 320-529:hidden 530-1100:hidden '>
        //                 <div className='flex flex-col'>
        //                     <h4 className='font-montserrat-regular text-[18px] text-white'>Price</h4>
        //                     <p className='font-montserrat-regular text-[28px] text-white'>$9,542.39</p>
        //                 </div>
        //                 <div className='flex  gap-[60px] '>
        //                     <div className='flex flex-col gap-[5px]'>
        //                         <h4 className='font-montserrat-regular text-[14px] text-white'>24h% change</h4>
        //                         <p className='flex items-center gap-[10px] text-[#2BC155] font-montserrat-regular text-[20px]'>1.64% <span><Image src='/assets/images/green-chevron.svg' alt='' width={11} height={11} /></span></p>
        //                     </div>
        //                     <div className='flex flex-col gap-[5px]'>
        //                         <h4 className='font-montserrat-regular text-[14px] text-white'>Volume (24h)</h4>
        //                         <p className='text-white font-montserrat-regular text-[20px]'>$47.22B</p>
        //                     </div>
        //                     <div className='flex flex-col gap-[5px]'>
        //                         <h4 className='font-montserrat-regular text-[14px] text-white'>Market Cap</h4>
        //                         <p className='text-white font-montserrat-regular text-[20px]'>$219.24B</p>
        //                     </div>
        //                 </div>
        //                 <div className='flex gap-[40px]'>
        //                     <div className='flex gap-[10px]'> <h4 className='text-[#2BC155] font-montserrat-regular text-[18px]'>BUY</h4> <p className='text-white font-montserrat-regular text-[18px]'>$5,673</p></div>
        //                     <div className='flex gap-[10px]'> <h4 className='text-[#FF3E3E] font-montserrat-regular text-[18px]'>SELL</h4> <p className='text-white font-montserrat-regular text-[18px]'>$5,982</p></div>
        //                 </div>
        //             </div>

        //             <ApexChart />

        //         </div>
        //         <div className='fixed z-[10] bottom-[0px] right-[30px]'>
        //             <button type='button'><Image src='/assets/images/cht-thumb.svg' alt='' width={66} height={66} /></button>
        //         </div>

        //     </div>

        // </>
    );
};

Index.Layout = Layout;
export default Index;