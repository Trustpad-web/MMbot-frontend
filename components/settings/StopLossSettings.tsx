
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

import { useState } from 'react';
import { useAppSelector, useAppDispatch } from "@/store";
import { setSettingsState } from '@/store/settingsSlice';
import { toast } from 'react-toastify';
import api from '@/context/api';
import { UPDATE_SETTING_URL } from '@/context';

const StopLossSettings = () => {
    const settingsState = useAppSelector((state) => state.settings.data);
    const [stopLossAtState, setStopLossAt] = useState(settingsState.stopLossAt)
    const dispatch = useAppDispatch();

    const saveSetting = async () => {
        const { status, data } = await api.put(UPDATE_SETTING_URL + `/${settingsState.id}`, { stopLossAt: stopLossAtState }).then(res => ({ status: true, data: res.data })).catch((err) => ({ status: false, data: err.message }))
        if (!status) {
            toast.error(data.error)
            return
        }
        dispatch(setSettingsState({ ...settingsState, stopLossAt: stopLossAtState }))
        toast.success("Saved!")
    }
    return (
        <>
            <div className='mb-[30px]'>
                <h4 className='flex items-center gap-[5px] text-[#CBD6E4] text-[18px] font-poppins-regular'>Setting <FaAngleRight /> <span className='text-[#FFE000] font-poppins-medium text-[24px]'>Sell settings</span></h4>
                <p className='font-poppins-light text-[16px] text-[#CBD6E4]'>Configure the Stop Loss setting of your Ace bot.</p>
            </div>
            <div className='relative  bg-[#212F40] h-[100%] min-h-[710px] 320-529:min-h-[200px] 530-1100:min-h-[200px] flex flex-col gap-[20px] w-full rounded-[10px] px-[30px] py-[30px]'>
                <div>
                    <label className=' mb-[10px] text-[#CBD6E4] text-[14px] font-poppins-light flex justify-between items-center'>Sell at:*% <span><Image src='/assets/images/tip.svg' alt='' width={28} height={28} /></span></label>
                    <div className='border border-[#34475F] bg-[#1A2531] rounded-[10px] px-[10px] py-[8px]'>
                        <input type='text' placeholder='-15' className='text-white text-[14px] font-poppins-regular w-full px-[5px] border-none bg-[transparent] outline-none' value={stopLossAtState} onChange={(e) => setStopLossAt(e.target.value)} />
                    </div>
                </div>
                <div className='absolute bottom-[16px] right-[16px]'>
                    <button className="bg-blue-500 hover:bg-blue-600  text-white px-4 py-2 rounded-md" onClick={() => saveSetting()}>Save</button>
                </div>
            </div>

        </>
    )
}

export default StopLossSettings;