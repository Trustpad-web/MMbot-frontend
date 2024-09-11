import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='w-full h-[81px] flex items-center justify-center flex-col'>
            <div className='w-full h-[1px] opacity-20 bg-[#CAD0DA33]'>
            </div>

            <div className='flex flex-row h-[80px]  justify-between items-center w-[95%] xl:w-[1184px]'>
                <span className='font-[300] text-[14px] sm:text-[16px] leading-8 text-[#EBEBEB]'>BlockBounce © 2024</span>
                <div className='flex flex-row opacity-80 text-[#FFFF] text-[20px] sm:text-[30px] gap-x-[14px] sm:gap-x-[20px] '>
                    <FaXTwitter className=' cursor-pointer' />
                    <FaDiscord className=' cursor-pointer' />
                    <FaVimeoV className=' cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Footer