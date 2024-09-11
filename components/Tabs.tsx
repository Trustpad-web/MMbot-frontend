import React, { Fragment, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import SellSettings from './settings/SellSettings';
import CoinAmountSettings from './settings/CoinAmountSettings';
import StopLossSettings from './settings/StopLossSettings';
import BuySettings from './settings/BuySettings';
import { Listbox, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

interface Tab {
    name: string;
    img: string;
    element?: React.JSX.Element | null;
}

interface Tabs {
    general: Tab[];
    buying: Tab[];
    selling: Tab[];
}

const tabs = {
    general: [
        {
            name: "Basic settings",
            img: "/assets/images/settings.png",
            element: null
        },
        {
            name: "Exchange",
            img: "/assets/images/cexhange.png",
            element: null
        },
        {
            name: "Notifications",
            img: "/assets/images/notifications.png",
            element: null
        }
    ],

    buying: [
        {
            name: "Buy settings",
            img: "/assets/images/acbalance.png",
            element: null
        },
        {
            name: "Coins & Amounts",
            img: "/assets/images/add-circle.png",
            element: <CoinAmountSettings />
        },
        {
            name: "Strategy",
            img: "/assets/images/an-1.png",
            element: null
        },
        {
            name: "Trailing Stop-buy",
            img: "/assets/images/tdown.png",
            element: null
        }
    ],

    selling: [
        {
            name: "Sell settings",
            img: "/assets/images/acbalance.png",
            element: <SellSettings />
        },
        {
            name: "Sell strategy",
            img: "/assets/images/an-1.png",
            element: null
        },
        {
            name: "Stop-loss",
            img: "/assets/images/stloss.png",
            element: <StopLossSettings />
        },
        {
            name: "Trailing Stop-loss",
            img: "/assets/images/tup.png",
            element: null
        },
        {
            name: "Auto close",
            img: "/assets/images/aclose.png",
            element: null
        },
        {
            name: "Shorting settings",
            img: "/assets/images/tdown.png",
            element: null
        }
    ]
}

export default function Tabs() {
    const [activeTab, setActiveTab] = useState<Tab>(tabs.selling[0]);

    return (
        <>
            <div className='1920:hidden 530-1100:block 320-529:block mb-[30px]'>
                <Listbox value={activeTab} onChange={setActiveTab}>
                    <div className="relative rounded-[41px] border border-[#34475F]">
                        <Listbox.Button className="flex items-center justify-between w-full cursor-default text-[#CBD6E4] py-2 px-[16px] text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="truncate flex gap-2 items-center text-[16px] font-poppins-medium">
                                <Image src={activeTab.img} alt='' width={24} height={24} className='flex-shrink-0 w-[24px] h-[24px]' />
                                {activeTab.name}
                            </span>
                            <span className="pointer-events-none flex items-center">
                                <FaChevronDown />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-[2]  max-h-[700px] overflow-auto w-full py-[20px] rounded-[20px] border border-[#34475F] bg-[#212F40] mt-[10px] text-white shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                <div className='flex flex-col gap-[30px] px-[20px]'>
                                    {Object.keys(tabs).map((tabCategory, index) => (


                                        <div className='flex flex-col' key={index}>
                                            <h4 className="mb-[15px] uppercase px-4 text-[#CBD6E4] font-poppins-medium text-[16px] ">{tabCategory}</h4>
                                            {tabs[tabCategory as keyof Tabs].map((tab, index) => (
                                                <Listbox.Option
                                                    key={index}
                                                    value={tab}
                                                    className={({ active }) => `py-2 gap-[10px]  px-4 rounded-[100px] text-[16px] font-poppins-light w-full flex outline-0 text-[#CBD6E4] cursor-pointer ${active ? "bg-[#1A2531] text-[#FFE000] font-poppins-medium active-filter" : ""}`}
                                                >
                                                    <Image src={tab.img} alt='' width={24} height={24} className='flex-shrink-0 w-[24px] h-[24px]' />
                                                    {tab.name}
                                                </Listbox.Option>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
            <div className='flex gap-[30px] 320-529:flex-col '>
                <div className="flex min-h-[100%] flex-shrink-0 h-[100%] py-[30px] 320-529:hidden 530-1100:hidden flex-col bg-[#212F40] w-[295px] 320-529:w-full rounded-[10px]">
                    <div className="flex flex-col gap-[30px] px-[20px]">
                        {Object.keys(tabs).map((tabCategory, index) => (
                            <div className='flex flex-col' key={index}>
                                <h4 className="mb-[15px] uppercase px-4 text-[#CBD6E4] font-poppins-medium text-[16px] ">{tabCategory}</h4>
                                {tabs[tabCategory as keyof Tabs].map((tab, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => setActiveTab(tab)}
                                        isActive={activeTab?.name === tab.name}
                                        onActive='bg-[#1A2531] text-[#FFE000] font-poppins-medium active-filter'
                                        className="py-2 gap-[10px]  px-4 rounded-[100px] text-[16px] font-poppins-light w-full flex outline-0 text-[#CBD6E4] cursor-pointer"
                                    >
                                        <Image src={tab.img} alt='' width={24} height={24} className='flex-shrink-0 w-[24px] h-[24px]' />
                                        {tab.name}
                                    </Button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full h-full'>
                    {activeTab.element || <div className='flex items-center min-h-[60vh] xl:min-h-[98vh] justify-center'>
                        <Image src="/assets/images/coming-soon.png" height={'364'} width={'644'} alt='' /></div>}
                </div>
            </div>
        </>
    );
}
