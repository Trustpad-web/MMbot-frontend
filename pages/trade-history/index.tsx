'use client'
import HeadCustom from '@/components/HeadCustom'
import Layout from '@/components/Layout';
import Image from 'next/image'
import { useEffect } from 'react';
import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterService } from 'primereact/api';

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

    FilterService.register('custom_activity', (value, filters) => {
        const [from, to] = filters ?? [null, null];
        if (from === null && to === null) return true;
        if (from !== null && to === null) return from <= value;
        if (from === null && to !== null) return value <= to;
        return from <= value && value <= to;
    });


    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });

    const [globalFilterValue, setGlobalFilterValue] = useState('');



    const onGlobalFilterChange = (e: any) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const Type = (rowData: any) => {
        return <div className={rowData.type === "Buy" ? 'text-[#03C38C] font-montserrat-semibold' : 'text-[#ED5959] font-montserrat-semibold'}>{rowData.type}</div>;
    }

    const products = [
        {
            date: '12/03/24 12:03',
            type: 'Buy',
            pair: 'Ac3P5ysYzBgQAiN8PiRtvkReU4xXFNrwKyxQXgy8GS4q',
            currency: 'USD',
            amount: '$25.29',
            rate: '$25,29',
            fee: '$1.2',
            total: '$25,29',
            result: '$25,29',
            trigger: '$1.5',
            view: '$25,29'
        },
        {
            date: '12/03/24 12:03',
            type: 'Sell',
            pair: 'CGrj39TrZzzsAJqH2wQ6XNzSphg68dFuaCVhyfBtga6',
            currency: 'USD',
            amount: '$25.29',
            rate: '$25,29',
            fee: '$1.2',
            total: '$25,29',
            result: '$25,29',
            trigger: '$1.5',
            view: '$25,29'
        },
        {
            date: '12/03/24 12:03',
            type: 'Buy',
            pair: 'DUYv8xHTL61DicYYzsn2R2akLya2wHY76fpXZiRobbLN',
            currency: 'USD',
            amount: '$25.29',
            rate: '$25,29',
            fee: '$1.2',
            total: '$25,29',
            result: '$25,29',
            trigger: '$1.5',
            view: '$25,29'
        },
        {
            date: '12/03/24 12:03',
            type: 'Sell',
            pair: '3dumuKurQHuB5RUtQYkyyxKnkhQGMn4uYiuDKZbQM9rd',
            currency: 'USD',
            amount: '$25.29',
            rate: '$25,29',
            fee: '$1.2',
            total: '$25,29',
            result: '$25,29',
            trigger: '$1.5',
            view: '$25,29'
        },
        {
            date: '12/03/24 12:03',
            type: 'Buy',
            pair: '6XvRE24XqnAdU1FqBhXLScJtdNvbbfaFbMtnTxjNRfEp',
            currency: 'USD',
            amount: '$25.29',
            rate: '$25,29',
            fee: '$1.2',
            total: '$25,29',
            result: '$25,29',
            trigger: '$1.5',
            view: '$25,29'
        },
        {
            date: '12/03/24 12:03',
            type: 'Buy',
            pair: 'FLLbxCZRZaULx5XyrWeoLjnAnjzKeAdPtiySXLsFpbbR',
            currency: 'USD',
            amount: '$25.29',
            rate: '$25,29',
            fee: '$1.2',
            total: '$25,29',
            result: '$25,29',
            trigger: '$1.5',
            view: '$25,29'
        },
    ];

    return (
        <>
            <HeadCustom title="Trade History" description="Cutting Edge Automated Trading Tools" />
            <div className='main-content no-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden w-full h-full 530-1300:pt-[130px] 320-529:pt-[130px]  pt-[40px] pb-[40px] px-[40px] 320-529:px-[15px]'>
                <div className='flex justify-between 320-529:flex-col 530-1100:flex-col 320-529:mb-[30px] 530-1100:mb-[30px]'>
                    <div className='mb-[30px]'>
                        <h4 className='font-poppins-medium text-[#FFE000] text-[24px]'>Trade history</h4>
                        <p className='text-[#CBD6E4] font-poppins-light text-[16px]'>Detailed information for each transaction you’ve executed</p>
                    </div>
                    <div className='search-filter flex gap-[10px] items-center 320-529:mb-[20px] '>
                        <div className='flex gap-[10px] border border-[#34475F] w-[410px] 320-529:w-[315px] rounded-[41px] py-[10px] px-[20px]'>
                            <Image src='/assets/images/search.svg' alt='' width={30} height={30} />
                            <input type="text" value={globalFilterValue} onChange={onGlobalFilterChange} className='border-none font-poppins-light text-[#6F88A4] text-[16px] w-full outline-none bg-[transparent] ' placeholder={isMobile ? 'Search' : 'Search in trade history...'} />
                        </div>
                        <div><button type='button' className='border border-[#34475F] rounded-[41px] w-[70px] flex justify-center items-center py-[10px]'><Image src='/assets/images/info.svg' alt='' width={30} height={30} /></button></div>
                        <div><button type='button' className='border border-[#34475F] rounded-[41px] w-[70px] flex justify-center items-center py-[10px]'><Image src='/assets/images/download.svg' alt='' width={30} height={30} /></button></div>
                    </div>
                </div>

                <div className='trade-history-table bg-[#212F40] rounded-[10px] p-5'>
                    <DataTable filters={filters} filterDisplay="row" sortIcon={<Image width={'8'} className='ms-2' height={'12'} alt='sort-icon' src='./assets/images/table-sort-icon.svg' />} value={products} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="date" header="Date" sortable></Column>
                        <Column field="type" header="Type" body={Type} sortable></Column>
                        <Column field="pair" header="Pair" sortable></Column>
                        <Column field="currency" header="Currency" sortable></Column>
                        <Column field="amount" header="Amount" sortable></Column>
                        <Column field="rate" header="Rate" sortable></Column>
                        <Column field="fee" header="Fee" sortable></Column>
                        <Column field="total" header="Total" sortable></Column>
                        <Column field="result" header="Result" sortable></Column>
                        <Column field="trigger" header="Trigger" sortable></Column>
                        <Column field="view" header="View" sortable></Column>
                    </DataTable>
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