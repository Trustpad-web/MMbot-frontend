import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from "@/store";
import { setBotsState } from '@/store/botsSlice';
import { toast } from 'react-toastify';
import api from '@/context/api';
import { UPDATE_BOT_URL } from '@/context';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const botsState = useAppSelector((state) => state.bots.data);
    const dashboardState = useAppSelector((state) => state.dashboard.data);
    const [tokenAddressState, setTokenAddressState] = useState("")
    const [thresholdPriceState, setThresholdPrice] = useState("")
    const dispatch = useAppDispatch();

    const onOk = async () => {
        const newBot = {
            token: tokenAddressState,
            isDeleted: false,
            isActive: false,
            botType: "trading",
            thresholdPrice: thresholdPriceState,
            createdAt: Math.trunc(new Date().getTime() / 1000),
        }
        const { status, data } = await api.post(UPDATE_BOT_URL, { address: dashboardState.address, ...newBot }).then(res => ({ status: true, data: res.data })).catch((err) => ({ status: false, data: err.message }))
        if (!status) {
            toast.error(data.error)
            return
        }
        dispatch(setBotsState([...botsState,
        {
            id: data.bot.id,
            ...newBot
        },
        ]))
        toast.success("Created new bot!")
        onClose()
    }
    return (
        <>
            {isOpen && (
                <>
                    <div className={`fixed w-full top-0 left-0 h-full   ${isOpen ? 'opacity-70  ' : ' opacity-0'} transition-all  duration-700 bg-black  `}>

                    </div>
                    <div className=" fixed top-[30%] left-[15%] md:left-[30%] w-1/2 bg-[#212F40] rounded-lg p-6 opacity-95 min-w-[fit-content]">
                        <h2 className="text-white font-poppins-regular mb-4">Add New Bot</h2>
                        <input
                            type="text"
                            placeholder="Enter Token Contract Address"
                            className="border border-gray-300 p-2 rounded-md w-full"
                            value={tokenAddressState}
                            onChange={(e) => setTokenAddressState(e.target.value)}
                        />
                        <h2 className="text-white font-poppins-regular mb-4 mt-4">Input Threshold Price</h2>
                        <input
                            type="text"
                            placeholder="Enter Threshold Price"
                            className="border border-gray-300 p-2 rounded-md w-full"
                            value={thresholdPriceState}
                            onChange={(e) => setThresholdPrice(e.target.value)}
                        />
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-3"
                                onClick={onOk}
                            >
                                Add
                            </button>
                            <button
                                className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Modal;