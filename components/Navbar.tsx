/* eslint-disable react/no-children-prop */
'use client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { useWallet, type Wallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton, } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [opened, setOpened] = useState(false)
    const { connect, connected, connecting, disconnect, disconnecting, publicKey, select, wallet, wallets } = useWallet();
    const router = useRouter();
    const handleMoveMM = async () => {
        router.push("/")
    }
    return (
        <div className='flex flex-row w-[95%] xl:w-[1182px] justify-between  items-center pt-2.5 px-2 sm:pr-10'>
            <img alt="" loading="lazy" src="/assets/images/brandlogo.svg" className='h-[50px] sm:w-[284px]  cursor-pointer'
                onClick={() => router.push("/")}
            ></img>

            <div className=' hidden lg:flex gap-x-[30px] flex-row text-[16px] font-[500] leading-4 text-[#FFFFFFB2] opacity-70 items-center '>
                <a className=' cursor-pointer' href="https://blockbounce.xyz" target='_blank' >BockBounce</a>
                <a className=' cursor-pointer' href="https://blockbounce.xyz/business/" target='_blank'>Bots +</a>
                <a className=' cursor-pointer' href="https://blockbounce.xyz/business/" target='_blank'>Plans</a>
                <a className=' cursor-pointer' href="https://blockbounce.xyz/nft-access/" target='_blank'>NFT Access</a>
                <a className=' cursor-pointer' href="https://blockbounce.xyz/platform/" target='_blank'>Platform</a>
            </div>
            <div className='w-[136px] hidden lg:block' >
                <WalletMultiButton children={!connected ? "Connect Wallet" : ""} style={{ width: connected ? '140px' : '180px', height: '46px', border: '2px solid #FDDE01', borderRadius: '8px', fontSize: '14px', lineHeight: '8', color: '#FFFFFF', textTransform: 'uppercase', backgroundColor: '#212F40' }} />
            </div >
            {connected ? <button className='w-[136px] hidden lg:block h-[46px] border-[2px] border-[#FDDE01] rounded-lg font-[700] text-[14px] leadng-8 text-[#FFFFFF] uppercase bg-[#212F40]'
                onClick={handleMoveMM}
            >
                Ace Portal
            </button> : <></>}

            <FaBars className='text-[30px] opacity-70 text-[#FFFF] block lg:hidden' onClick={() => setOpened(true)} />

            {/* MOBILE SIDEBAR BEGINS HERE */}
            <div className={`${opened ? 'right-0' : '-right-[100%] sm:-right-[400px]'} w-[100%] sm:w-[400px] transition-all duration-300 h-screen z-30 fixed bg-[#FDDE01]  top-0 pt-[100px]`}>
                <IoClose className='text-[30px] absolute top-5 left-5' onClick={() => setOpened(false)} />
                <div className='flex gap-y-[35px] flex-col text-[16px] font-[500] leading-4 text-[#212F40]  items-center '>

                    <WalletMultiButton children={!connected ? "Connect Wallet" : ""} style={{ width: connected ? '140px' : '180px', height: '46px', border: '2px solid #FDDE01', borderRadius: '8px', fontSize: '14px', lineHeight: '8', color: '#FFFFFF', textTransform: 'uppercase', backgroundColor: '#212F40' }} />

                    {connected ? <button className='w-[136px] mb-10 h-[46px] border-[2px] z-40 border-[#FDDE01] rounded-lg font-[700] text-[14px] leadng-8 text-[#FFFFFF] uppercase bg-[#212F40]'
                        onClick={handleMoveMM}>
                        Ace Portal
                    </button> : <></>}
                    <a className=' cursor-pointer' href="https://blockbounce.xyz" target='_blank' >BockBounce</a>
                    <a className=' cursor-pointer' href="https://blockbounce.xyz/business/" target='_blank'>Bots +</a>
                    <a className=' cursor-pointer' href="https://blockbounce.xyz/business/" target='_blank'>Plans</a>
                    <a className=' cursor-pointer' href="https://blockbounce.xyz/nft-access/" target='_blank'>NFT Access</a>
                    <a className=' cursor-pointer' href="https://blockbounce.xyz/platform/" target='_blank'>Platform</a>
                </div>
            </div>


        </div>
    )
}

export default Navbar