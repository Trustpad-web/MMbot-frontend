
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import { Listbox, Transition } from '@headlessui/react';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from "@/store";
import { setSettingsState } from '@/store/settingsSlice';
import { toast } from 'react-toastify';
import api from '@/context/api';
import { UPDATE_SETTING_URL } from '@/context';

const SellSettings = () => {
    const settingsState = useAppSelector((state) => state.settings.data);
    const [sellProfitState, setSellProfit] = useState(settingsState.sellProfit)

    const [selectedOption, setSelectedOption] = useState<{ id: number, name: string } | null>(null);
    const options = [
        { id: 1, name: 'Market' },
        { id: 2, name: 'Market' },
        { id: 3, name: 'Market' },
    ];

    const dispatch = useAppDispatch();

    const saveSetting = async () => {
        const { status, data } = await api.put(UPDATE_SETTING_URL + `/${settingsState.id}`, { sellProfit: sellProfitState }).then(res => ({ status: true, data: res.data })).catch((err) => ({ status: false, data: err.message }))
        if (!status) {
            toast.error(data.error)
            return
        }
        dispatch(setSettingsState({ ...settingsState, sellProfit: sellProfitState }))
        toast.success("Saved!")
    }
    return (
        <>
            <div className='mb-[30px]'>
                <h4 className='flex items-center gap-[5px] text-[#CBD6E4] text-[18px] font-poppins-regular'>Setting <FaAngleRight /> <span className='text-[#FFE000] font-poppins-medium text-[24px]'>Sell settings</span></h4>
                <p className='font-poppins-light text-[16px] text-[#CBD6E4]'>Configure the sell setting of your Ace bot.</p>
            </div>
            <div className='relative bg-[#212F40] h-[100%] min-h-[710px] 320-529:min-h-[auto] 530-1100:min-h-[auto] flex flex-col gap-[20px] w-full rounded-[10px] px-[30px] py-[30px]'>
                <div>
                    <label className=' mb-[10px] text-[#CBD6E4] text-[14px] font-poppins-light flex justify-between items-center'>Take profit at:*% <span><Image src='/assets/images/tip.svg' alt='' width={28} height={28} /></span></label>
                    <div className='border border-[#34475F] bg-[#1A2531] rounded-[10px] px-[10px] py-[8px]'>
                        <input type='text' placeholder='5' className='text-white text-[14px] font-poppins-regular w-full px-[5px] border-none bg-[transparent] outline-none' value={sellProfitState} onChange={(e) => setSellProfit(e.target.value)} />
                    </div>
                </div>
                {/* <div>
                    <label className=' mb-[10px] text-[#CBD6E4] text-[14px] font-poppins-light flex justify-between items-center'>Order type <span><Image src='/assets/images/tip.svg' alt='' width={28} height={28} /></span></label>
                    <div>
                        <Listbox value={selectedOption} onChange={setSelectedOption}>
                            {({ open }) => (
                                <>
                                    <div className="relative">
                                        <Listbox.Button className=" border w-full border-[#34475F] bg-[#1A2531] rounded-[10px] px-[10px] py-[8px] ">
                                            <span className="block truncate text-white text-[14px] font-poppins-regular w-full px-[10px] text-left">{selectedOption ? selectedOption.name : 'Market'}</span>
                                            <span className="absolute inset-y-0 right-[15px] flex items-center pr-2 pointer-events-none">
                                                <Image src='/assets/images/select-chv.svg' alt='' width={9} height={5} />
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            show={open}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Listbox.Options
                                                static
                                                className="absolute cursor-pointer z-10 w-full py-[10px] mt-1 overflow-auto text-base bg-[#1A2531] rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                            >
                                                {options.map((option) => (
                                                    <Listbox.Option
                                                        key={option.id}
                                                        value={option}
                                                        className={({ active }) =>
                                                            `${active ? 'text-white bg-blue-600' : 'text-[#CBD6E4]'}
                         select-none relative py-2 pl-10 pr-4   font-poppins-regular cursor-pointer text-[14px]`
                                                        }
                                                    >
                                                        {({ selected, active }) => (
                                                            <>
                                                                <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>
                                                                    {option.name}
                                                                </span>
                                                                {selected && (
                                                                    <span
                                                                        className={`${active ? 'text-white' : 'text-blue-600'}
                              absolute inset-y-0 left-0 flex items-center pl-3`}
                                                                    >

                                                                    </span>
                                                                )}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox></div>
                </div>
                <div>
                    <label className=' mb-[10px] text-[#CBD6E4] text-[14px] font-poppins-light flex justify-between items-center'>Max open time sell* <span><Image src='/assets/images/tip.svg' alt='' width={28} height={28} /></span></label>
                    <div className='border border-[#34475F] bg-[#1A2531] rounded-[10px] px-[10px] py-[8px]'>
                        <input type='text' placeholder='8' className='text-white text-[14px] font-poppins-regular w-full px-[5px] border-none bg-[transparent] outline-none' />
                    </div>
                </div> */}

                <div className='absolute bottom-[16px] right-[16px]'>
                    <button className="bg-blue-500 hover:bg-blue-600  text-white px-4 py-2 rounded-md" onClick={() => saveSetting()}>Save</button>
                </div>
            </div>

        </>
    )
}

export default SellSettings;