import React, { useState } from 'react';
interface ModalProps {
    isOpen: boolean;
    onUpdate: (price: string) => void;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onUpdate, onClose }) => {
    const [thresholdPriceState, setThresholdPrice] = useState("")

    return (
        <>
            {isOpen && (
                <>
                    <div className={`fixed w-full top-0 left-0 h-full   ${isOpen ? 'opacity-70  ' : ' opacity-0'} transition-all  duration-700 bg-black  `}>

                    </div>
                    <div className=" fixed top-[30%] left-[15%] md:left-[30%] w-1/2 bg-[#212F40] rounded-lg p-6 opacity-95 min-w-[fit-content] ">
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
                                onClick={() => onUpdate(thresholdPriceState)}
                            >
                                Update
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