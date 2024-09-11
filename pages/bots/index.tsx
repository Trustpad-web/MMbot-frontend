import HeadCustom from '@/components/HeadCustom'
import Button from '@/components/Button'
import Image from 'next/image'
import React, { useState, useEffect, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { FaChevronDown } from "react-icons/fa";
import Layout from '@/components/Layout';
import AddBotModal from '@/components/AddBotModal';
import EditPriceModal from '@/components/EditPriceModal';
import { useAppSelector, useAppDispatch } from "@/store";
import prettyMilliseconds from 'pretty-ms';
import { setBotsState } from '@/store/botsSlice';
import { toast } from 'react-toastify';
import api from '@/context/api';
import { UPDATE_BOT_URL } from '@/context';

function TradingBot() { //Demo Component
    const [isBotModalOpen, setIsBotModalOpen] = useState(false);

    return (
        <div className="w-6/12 320-529:w-full">
            <div className='cr-card justify-center min-h-[326px] height-full flex flex-col gap-[40px] w-full bg-[#212F40] rounded-[10px] pt-[40px] pb-[60px] px-[20px]'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <button type='button' className='w-[93px] h-[90px] flex justify-center items-center bg-[#1A2531] rounded-[10px]'
                        onClick={() => setIsBotModalOpen(true)}>
                        <Image src='/assets/images/add.svg' alt='' width={37} height={37} />
                    </button>
                    <h4 className='text-[24px] text-white font-poppins-medium pt-[10px]'>Add new bot</h4>
                </div>
            </div>
            <AddBotModal isOpen={isBotModalOpen} onClose={() => setIsBotModalOpen(false)} />
        </div>
    )
}

const reducedAddress = (_address = '') => {
    return _address.slice(0, 5) + '...' + _address?.slice(_address.length - 5)
}
interface BotComponentProps {
    botType: string[];
    isDeleted: boolean;
    onEdit: (id: number) => void;
    onActive: (id: number) => void;
    onStop: (id: number) => void;
    onDelete: (id: number) => void;
    onRestore: (id: number) => void;
}
const BotComponent: React.FC<BotComponentProps> = ({ botType = ["trading", "simulator"], isDeleted = false, onEdit, onActive, onStop, onDelete, onRestore }) => { //Normal Bot Component
    const botsState = useAppSelector((state) => state.bots.data);
    return (
        <div className='flex flex-wrap'>
            {botsState.filter(bot => botType.includes(bot.botType) && bot.isDeleted === isDeleted).map((bot, index) => (
                <div className=" min-w-[fit-content] w-3/12 320-529:w-full mr-3 mb-3" key={index}>
                    <div className='cr-card justify-center min-h-[250px] height-full flex flex-col gap-[40px] w-full bg-[#212F40] rounded-[10px] pt-[40px] pb-[60px] px-[20px]'>
                        <div className='w-full flex flex-col justify-center'>
                            <h4 className='text-[18px] text-white font-poppins-medium pt-[10px]'>CryptoCurrency</h4>
                            <p className='text-[14px] text-gray-300 font-poppins-regular'>{reducedAddress(bot.token)}</p>
                            <h4 className='text-[18px] text-white font-poppins-medium pt-[10px]'>Threshold Price</h4>
                            <p className='text-[14px] text-gray-300 font-poppins-regular'>${bot.thresholdPrice}</p>
                            <h4 className='text-[18px] text-white font-poppins-medium pt-[10px]'>Status</h4>
                            <p className='text-[14px] text-gray-300 font-poppins-regular'>{bot.isActive ? "active" : "stop"}</p>
                            <h4 className='text-[18px] text-white font-poppins-medium pt-[10px]'>Bot Age</h4>
                            <p className='text-[14px] text-gray-300 font-poppins-regular'>{prettyMilliseconds(Math.trunc((new Date().getTime() - bot.createdAt * 1000) / 1000) * 1000, { verbose: true })}</p>
                            <div className='flex justify-between flex-wrap mt-[8px] text-[12px]'>
                                <button className="bg-blue-500 hover:bg-blue-600  text-white px-2 py-2 rounded-md" onClick={() => onEdit(bot.id)}>Edit Price</button>
                                {!bot.isDeleted ? <button className="bg-green-500 hover:bg-green-600  text-white px-2 py-2 rounded-md" onClick={() => onActive(bot.id)}>Activate</button> : <></>}
                                {!bot.isDeleted ? <button className="bg-yellow-500 hover:bg-yellow-600  text-white px-4 py-2 rounded-md" onClick={() => onStop(bot.id)}>Stop</button> : <></>}
                                {!bot.isDeleted ? <button className="bg-red-500 hover:bg-red-600  text-white px-4 py-2 rounded-md" onClick={() => onDelete(bot.id)}>Delete</button> : <></>}
                                {bot.isDeleted ? (<button className="bg-red-500 hover:bg-red-600  text-white px-4 py-2 rounded-md" onClick={() => onRestore(bot.id)}>Restore</button>) : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

function Index() {
    const dashboardState = useAppSelector((state) => state.dashboard.data);
    const botsState = useAppSelector((state) => state.bots.data);
    const [isBotModalOpen, setIsBotModalOpen] = useState(false);
    const [isEditPriceModalOpen, setIsEditPriceModalOpen] = useState(false);
    const [countDownState, setCountdown] = useState(false)
    const [selectedBotState, setSelectedBot] = useState(0)

    const dispatch = useAppDispatch();

    const activeBot = async (id: number) => {
        const _index = botsState.flatMap(bot => bot.id).indexOf(id)
        if (_index === -1) {
            toast.error("Somethings wrong!")
            return
        }
        let temp = botsState.map(bot => bot)
        temp.splice(_index, 1)
        const tempBot = botsState[_index]
        const bot = await api.put(UPDATE_BOT_URL + "/" + tempBot.id, { isActive: true }).then(res => res.data).catch(() => null)
        if (!bot) {
            toast.error("Network ERR!")
            return
        }
        dispatch(setBotsState([...temp, { ...tempBot, isActive: true }]))
        toast.success("Actived!")
    }
    const stopBot = async (id: number) => {
        const _index = botsState.flatMap(bot => bot.id).indexOf(id)
        if (_index === -1) {
            toast.error("Somethings wrong!")
            return
        }
        let temp = botsState.map(bot => bot)
        temp.splice(_index, 1)
        const tempBot = botsState[_index]
        const bot = await api.put(UPDATE_BOT_URL + "/" + tempBot.id, { isActive: true }).then(res => res.data).catch(() => null)
        if (!bot) {
            toast.error("Network ERR!")
            return
        }
        dispatch(setBotsState([...temp, { ...tempBot, isActive: false }]))
        toast.success("Stopped!")
    }

    const deleteBot = async (id: number) => {
        const _index = botsState.flatMap(bot => bot.id).indexOf(id)
        if (_index === -1) {
            toast.error("Somethings wrong!")
            return
        }
        let temp = botsState.map(bot => bot)
        temp.splice(_index, 1)
        const tempBot = botsState[_index]
        const bot = await api.put(UPDATE_BOT_URL + "/" + tempBot.id, { isDeleted: true }).then(res => res.data).catch(() => null)
        if (!bot) {
            toast.error("Network ERR!")
            return
        }
        dispatch(setBotsState([...temp, { ...tempBot, isDeleted: true }]))
        toast.success("Deleted!")
    }
    const restoreBot = async (id: number) => {
        const _index = botsState.flatMap(bot => bot.id).indexOf(id)
        if (_index === -1) {
            toast.error("Somethings wrong!")
            return
        }
        let temp = botsState.map(bot => bot)
        temp.splice(_index, 1)
        const tempBot = botsState[_index]
        const bot = await api.put(UPDATE_BOT_URL + "/" + tempBot.id, { isDeleted: false }).then(res => res.data).catch(() => null)
        if (!bot) {
            toast.error("Network ERR!")
            return
        }
        dispatch(setBotsState([...temp, { ...tempBot, isDeleted: false }]))
        toast.success("Restore!")
    }

    const editThresholdPrice = async (id: number) => {
        setIsEditPriceModalOpen(true)
        console.log(id, 'sdsds')
        setSelectedBot(id)

    }
    const updateThresholdData = async (_price: string) => {
        const bot = await api.put(UPDATE_BOT_URL + "/" + selectedBotState, { thresholdPrice: _price }).then(res => res.data).catch(() => null)
        if (!bot) {
            toast.error("Network ERR!")
            return
        }
        const _index = botsState.flatMap(bot => bot.id).indexOf(selectedBotState)
        if (_index === -1) {
            toast.error("Somethings wrong!")
            return
        }
        let temp = botsState.map(bot => bot)
        temp.splice(_index, 1)
        const tempBot = botsState[_index]
        dispatch(setBotsState([...temp, { ...tempBot, thresholdPrice: _price }]))
        toast.success("Updated Price!")
        setIsEditPriceModalOpen(false)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((pre) => !pre);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const Tabs = [ // Demo Tabs Data
        { name: 'trading', label: `Trading bots (${botsState.filter(bot => !bot.isDeleted && bot.botType === "trading").length})`, element: <BotComponent botType={["trading"]} isDeleted={false} onEdit={(id) => editThresholdPrice(id)} onActive={(id) => activeBot(id)} onStop={(id) => stopBot(id)} onDelete={(id) => deleteBot(id)} onRestore={(id) => restoreBot(id)} /> },
        { name: 'simulators', label: `Simulators (${botsState.filter(bot => !bot.isDeleted && bot.botType === "simulator").length})`, element: <BotComponent botType={["simulator"]} isDeleted={false} onEdit={(id) => editThresholdPrice(id)} onActive={(id) => activeBot(id)} onStop={(id) => stopBot(id)} onDelete={(id) => deleteBot(id)} onRestore={(id) => restoreBot(id)} /> },
        { name: 'deleted', label: `Deleted (${botsState.filter(bot => bot.isDeleted).length})`, element: <BotComponent botType={["trading", "simulator"]} isDeleted={true} onEdit={(id) => editThresholdPrice(id)} onActive={(id) => activeBot(id)} onStop={(id) => stopBot(id)} onDelete={(id) => deleteBot(id)} onRestore={(id) => restoreBot(id)} /> }
    ]
    const [selected, setSelected] = useState(0);

    return (
        <>
            <HeadCustom title="My Bots" description="Cutting Edge Automated Trading Tools" />
            <div className='main-content no-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden w-full h-full 530-1300:pt-[130px] 320-529:pt-[130px]  pt-[40px] pb-[40px] px-[40px] 320-529:px-[15px]'>
                <div className='flex justify-between items-center 320-529:flex-col 530-1100:flex-col'>
                    <div className='w-full md:w-[max-content] mb-[15px] lg:mb-[30px]'>
                        <h4 className='font-poppins-medium text-[#FFE000] text-[24px]'>My Bots</h4>
                        <p className='text-[#CBD6E4] font-poppins-light text-[16px]'>View a complete list of your active bots and conveniently add a new bot <br />to your portfolio.</p>
                    </div>
                    <div className='flex w-full md:w-[max-content] gap-5 mb-[20px] lg:mb-[0px]'>

                        <div className="border border-[#34475F] rounded-[41px] hidden md:flex">
                            {Tabs.map((tab, index) => (
                                <Button key={index}
                                    className={`w-full font-poppins-medium outline-0 rounded-[41px] py-[12.5px] px-[18px] text-[16px] font-[500] min-w-[fit-content] ${index === selected ? "bg-[#FFE000] text-[#34475F]" : "hover:bg-white/[0.12] text-[#CBD6E4]"}`}
                                    onClick={() => setSelected(index)}
                                >
                                    {tab.label}
                                </Button>
                            ))}
                        </div>

                        <div className="flex-1 md:hidden">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative rounded-[41px] border border-[#34475F]">
                                    <Listbox.Button className="flex items-center justify-between w-full cursor-default text-[#CBD6E4] py-2 px-[16px] text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block truncate">{Tabs[selected].name}</span>
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
                                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#212F40] py-1 text-white shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            {Tabs.map((tab, index) => (
                                                <Listbox.Option
                                                    key={index}
                                                    className={({ active }) =>
                                                        `relative cursor-default font-poppins-light select-none py-2 pl-10 pr-4 ${active ? 'text-white' : 'text-white'
                                                        }`
                                                    }
                                                    value={tab}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium text-[#999]' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {tab.label}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>

                        <button className='outline-0 rounded-[41px] px-[22px] text-[18px] font-[500] bg-[#FFE000] text-[#34475F]'
                            onClick={() => dashboardState.id === 0 ? toast.warning("Plase Connect Your Wallet!") : setIsBotModalOpen(true)}>
                            <Image src='/assets/images/add-black.svg' alt='' width={30} height={30} />
                        </button>
                    </div>
                </div>
                <AddBotModal isOpen={isBotModalOpen} onClose={() => setIsBotModalOpen(false)} />
                <EditPriceModal isOpen={isEditPriceModalOpen} onUpdate={(_price) => updateThresholdData(_price)} onClose={() => setIsEditPriceModalOpen(false)} />
                {/* select panel */}
                <div className='w-full'>
                    {Tabs[selected].element}
                </div>
            </div>

        </>
    );
};

Index.Layout = Layout;
export default Index;