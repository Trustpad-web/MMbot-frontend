'use client'
import HeadCustom from '@/components/HeadCustom'
import Layout from '@/components/Layout';
import Image from 'next/image'







function Index() {

    return (
        <div className='w-full h-full'>
            <div className='flex items-center min-h-[60vh] xl:min-h-[98vh] justify-center'>
                <Image src="/assets/images/coming-soon.png" height={'364'} width={'644'} alt='' />
            </div>
        </div>
        // <>
        //     <HeadCustom title="My Library" description="Cutting Edge Automated Trading Tools" />
        //     <div className='main-content no-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden w-full h-full 530-1300:pt-[130px] 320-529:pt-[130px]  pt-[40px] pb-[40px] px-[40px] 320-529:px-[15px]'>
        //         <div className='flex justify-between 320-529:flex-col 530-1100:flex-col'>
        //             <div className='mb-[30px]'>
        //                 <h4 className='font-poppins-medium text-[#FFE000] text-[24px] '>My library</h4>
        //                 <p className='text-[#CBD6E4] font-poppins-light text-[16px]'>Lorem ipsum dolor sit amet, consectetur</p>
        //             </div>
        //         </div>


        //         <div className='flex gap-[20px] 320-529:flex-col 530-1100:flex-col'>
        //             <div className="w-6/12 320-529:w-full 530-1100:w-full">
        //                 <div className='cr-card justify-center 320-529:min-h-[100%] 320-529:py-[30px] min-h-[326px] height-full flex flex-col gap-[40px] w-full bg-[#212F40] rounded-[10px] pt-[40px] pb-[60px] px-[20px]'>
        //                     <div className='w-full flex flex-col items-center justify-center'>
        //                         <button type='button' className='w-[93px] h-[90px] flex justify-center items-center bg-[#1A2531] rounded-[10px]'>
        //                             <Image src='/assets/images/tactic.svg' alt='' width={75} height={75} />
        //                         </button>
        //                         <h4 className='text-[24px] text-white font-poppins-medium pt-[10px] mb-[10px]'>Strategies</h4>
        //                         <p className='font-poppins-light text-[16px] text-center 320-529:w-[90%] w-[60%] text-[#CBD6E4]'>Check and edit trading strategies based on  technical indicators</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-6/12 320-529:w-full 530-1100:w-full">
        //                 <div className='cr-card justify-center 320-529:min-h-[100%] 320-529:py-[30px] min-h-[326px] height-full flex flex-col gap-[40px] w-full bg-[#212F40] rounded-[10px] pt-[40px] pb-[60px] px-[20px]'>
        //                     <div className='w-full flex flex-col items-center justify-center'>
        //                         <button type='button' className='w-[93px] h-[90px] flex justify-center items-center bg-[#1A2531] rounded-[10px]'>
        //                             <Image src='/assets/images/templates.svg' alt='' width={75} height={75} />
        //                         </button>
        //                         <h4 className='text-[24px] text-white font-poppins-medium pt-[10px] mb-[10px]'>Templates</h4>
        //                         <p className='font-poppins-light text-[16px] text-center 320-529:w-[90%] w-[70%] text-[#CBD6E4]'>Edit and load preconfigured bot templates.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>



        //     </div>

        // </>
    );
};

Index.Layout = Layout;
export default Index;