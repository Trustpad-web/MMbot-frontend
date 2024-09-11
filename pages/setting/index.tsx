'use client'
import HeadCustom from '@/components/HeadCustom'
import Layout from '@/components/Layout';
import Image from 'next/image'
import Tabs from '@/components/Tabs'

function Index() {

    return (
        <>
            <HeadCustom title="Setting" description="Cutting Edge Automated Trading Tools" />
            <div className='main-content no-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden w-full h-full 530-1300:pt-[130px] 320-529:pt-[130px]  pt-[40px] pb-[40px] px-[40px] 320-529:px-[15px] min-h-[100vh]'>
                <Tabs />
                <div className='fixed z-[10] bottom-[0] right-[30px]'>
                    <button type='button'><Image src='/assets/images/cht-thumb.svg' alt='' width={66} height={66} /></button>
                </div>
            </div>

        </>
    );
};

Index.Layout = Layout;
export default Index;