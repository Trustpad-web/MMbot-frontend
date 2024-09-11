import { FaCircleCheck } from "react-icons/fa6";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { toast } from 'react-toastify';
import { useWallet, type Wallet } from '@solana/wallet-adapter-react';
import { Connection, SystemProgram, TransactionMessage, Transaction, PublicKey } from '@solana/web3.js';
import { BLOCKBOUNCE_WALLET, RPC_URL } from "@/context";
import { ethers } from 'ethers'
import HeadCustom from '@/components/HeadCustom'

const ScoutPlans = () => {
    const { connected, publicKey, wallet, sendTransaction } = useWallet();
    const handleSelectPlan = async (plan: number) => {
        if (!connected) {
            toast.warning('Please connect your wallet!')
            return
        }
        let solAmount = 50
        if (plan === 1)
            solAmount = 50
        if (plan === 2)
            solAmount = 90
        if (plan === 3)
            solAmount = 150
        if (plan === 4)
            solAmount = 250
        await handleSendTransaction(solAmount)

    }
    const handleSendTransaction = async (requiredSol: number) => {
        if (publicKey) {
            try {
                const connection = new Connection(RPC_URL);
                const transaction = new Transaction().add(
                    SystemProgram.transfer({
                        fromPubkey: publicKey,
                        toPubkey: new PublicKey(BLOCKBOUNCE_WALLET),
                        lamports: ethers.parseUnits(requiredSol.toString(), 9),
                    })
                );

                const signature = await sendTransaction(transaction, connection);

                await connection.confirmTransaction(signature, "processed");
                toast.success("Successfully Purchased!")
            } catch (error) {
                console.log(error)
            }


        }

    }
    return (
        <>
            <HeadCustom title="Plans" description="Cutting Edge Automated Trading Tools" />
            <div className='bg-[#1A2531] min-h-screen  items-center w-full flex flex-col '>
                <Navbar />

                <div className='text-center mt-[60px] w-[97%] sm:w-[80%] lg:w-auto'>
                    <h1 className='text-[#FFFFFF] text-[20px] sm:text-[26px]  sm:leading-[39px] font-[700] uppercase'>UNLOCK YOUR TRADING POTENTIAL </h1>
                    <h1 className='text-[#FDDE01] text-[35px] sm:text-[60px] sm:leading-[82.5px] font-[700] uppercase mb-[24px] sm:mb-[9px] '>BLOCKBOUNCE’S PLANS</h1>
                    {/* <p className='text-[#EBEBEB]  lg:w-[895px] font-[400] text-[14px] sm:text-[18px] leading-[27px]'>
                    All tiers include full access to:
                </p> */}
                </div>

                <div className="flex flex-col sm:flex-row gap-x-[25px] flex-wrap justify-center sm:items-center w-[90%] lg:w-[1020px] gap-y-[8px] mt-[21px]">
                    <span className='text-[#FFFFFF] text-[14px] sm:text-[16px]  sm:leading-[24px] gap-x-2 font-[700]  inline-flex items-center'>
                        {/* <FaCircleCheck className="text-[22px]" /> */}
                        <p> All levels include full access to:</p>
                    </span>

                    <span className='text-[#FFFFFF] text-[14px] sm:text-[16px]  sm:leading-[24px] gap-x-2 font-[700]  inline-flex items-center'>
                        <FaCircleCheck className="text-[22px]" />
                        <p> BlockBounce Discord</p>
                    </span>

                    <span className='text-[#FFFFFF] text-[14px] sm:text-[16px]  sm:leading-[24px] gap-x-2 font-[700]  inline-flex items-center'>
                        <FaCircleCheck className="text-[22px]" />
                        <p> BlockBounce Automated Trading Products</p>
                    </span>

                    <span className='text-[#FFFFFF] text-[14px] sm:text-[16px]  sm:leading-[24px] gap-x-2 font-[700]  inline-flex items-center'>
                        <FaCircleCheck className="text-[22px]" />
                        <p> Token Gated Dashboard</p>
                    </span>

                    <span className='text-[#FFFFFF] text-[14px] sm:text-[16px]  sm:leading-[24px] gap-x-2 font-[700]  inline-flex items-center'>
                        <FaCircleCheck className="text-[22px]" />
                        <p> BlockBounce 24/7 Customer Service</p>
                    </span>

                    <span className='text-[#FFFFFF] text-[14px] sm:text-[16px]  sm:leading-[24px] gap-x-2 font-[700]  inline-flex items-center'>
                        <FaCircleCheck className="text-[22px]" />
                        <p> Custom referral link</p>
                    </span>

                    <span className='text-[#FFFFFF] text-[14px] sm:text-[16px]  sm:leading-[24px] gap-x-2 font-[700]  inline-flex items-center'>
                        <FaCircleCheck className="text-[22px]" />
                        <p> Access to all IRL events</p>
                    </span>

                </div>

                <div className="flex flex-row flex-wrap justify-center gap-[20px] mt-[48px] mb-[100px] sm:mb-auto">
                    <div className="flex flex-col items-center py-[26px] w-[90%] sm:w-[240px] h-[251px] sm:h-[235px] bg-[#2B3C4B] rounded-[10px] border-[#62ADFF] border-[2px] relative">
                        <span className="w-[86px] h-[22px] rounded-[5px] bg-[#62ADFF] absolute  font-[700] text-[14px] leading-[21px] italic text-center text-[#FFFFFF] -top-[10px]">POPULAR </span>

                        <h1 className="text-[#FFFFFF] font-[700] text-[20px] leading-[30px]">LEVEL 1</h1>

                        <span className="w-[265px] sm:w-[165px] h-[1px] bg-[#FFFFFF] opacity-70 mb-[18px] mt-[13px]"></span>

                        <h1 className='text-[#FDDE01] text-[25px] sm:text-[30px] sm:leading-[45px] font-[700]  '>
                            50
                            <span className="text-[18px] leading-[27px] font-[400]"> SOL / month</span>
                        </h1>

                        <h1 className='text-[#FFFFFF] tracking-wider text-[25px] sm:text-[12px] sm:leading-[18px] font-[700]  '>
                            5
                            <span className="text-[12px] leading-[18px] font-[300]"> % TX FEE</span>
                        </h1>

                        <button className='w-[260px] h-[40px] sm:w-[190px] mt-[23px] sm:mt-auto tracking-[2px] sm:h-[35px] border-[.5px] border-[#FFFFFF] rounded-[5px] font-[700] text-[12px] sm:text-[16px]  text-[#FFFFFF] uppercase bg-[#1D2F42] hover:bg-[#FDDE01] hover:text-[#212F40]'
                            onClick={() => handleSelectPlan(1)}
                        >
                            select plan
                        </button>

                    </div>

                    <div className="flex flex-col items-center py-[26px] w-[90%] sm:w-[240px] h-[251px] sm:h-[235px] bg-[#2B3C4B] rounded-[10px]">
                        <h1 className="text-[#FFFFFF] font-[700] text-[20px] leading-[30px]">LEVEL 2</h1>
                        <span className="w-[265px] sm:w-[165px] h-[1px] bg-[#FFFFFF] opacity-70 mb-[18px] mt-[13px]"></span>
                        <h1 className='text-[#FDDE01] text-[25px] sm:text-[30px] sm:leading-[45px] font-[700]  '>
                            90
                            <span className="text-[18px] leading-[27px] font-[400]"> SOL for 3 months</span>
                        </h1>

                        <h1 className='text-[#FFFFFF] tracking-wider text-[25px] sm:text-[12px] sm:leading-[18px] font-[700]  '>
                            2.5
                            <span className="text-[12px] leading-[18px] font-[300]"> % TX FEE</span>
                        </h1>

                        <button className='w-[260px] h-[40px] sm:w-[190px] mt-[23px] sm:mt-auto tracking-[2px] sm:h-[35px] border-[.5px] border-[#FFFFFF] rounded-[5px] font-[700] text-[12px] sm:text-[16px]  text-[#FFFFFF] uppercase bg-[#1D2F42] hover:bg-[#FDDE01] hover:text-[#212F40] '
                            onClick={() => handleSelectPlan(2)}>
                            select plan
                        </button>

                    </div>

                    <div className="flex flex-col items-center py-[26px] w-[90%] sm:w-[240px] h-[251px] sm:h-[235px] bg-[#2B3C4B] rounded-[10px]">
                        <h1 className="text-[#FFFFFF] font-[700] text-[20px] leading-[30px]">LEVEL 3</h1>
                        <span className="w-[265px] sm:w-[165px] h-[1px] bg-[#FFFFFF] opacity-70 mb-[18px] mt-[13px]"></span>
                        <h1 className='text-[#FDDE01] text-[25px] sm:text-[30px] sm:leading-[45px] font-[700]  '>
                            150
                            <span className="text-[18px] leading-[27px] font-[400]"> SOL for 6 months</span>
                        </h1>

                        <h1 className='text-[#FFFFFF] tracking-wider text-[25px] sm:text-[12px] sm:leading-[18px] font-[700]  '>
                            1.5
                            <span className="text-[12px] leading-[18px] font-[300]"> % TX FEE</span>
                        </h1>

                        <button className='w-[260px] h-[40px] sm:w-[190px] mt-[23px] sm:mt-auto tracking-[2px] sm:h-[35px] border-[.5px] border-[#FFFFFF] rounded-[5px] font-[700] text-[12px] sm:text-[16px]  text-[#FFFFFF] uppercase bg-[#1D2F42] hover:bg-[#FDDE01] hover:text-[#212F40]'
                            onClick={() => handleSelectPlan(3)}>
                            select plan
                        </button>

                    </div>

                    <div className="flex flex-col items-center py-[26px] w-[90%] sm:w-[240px] h-[251px] sm:h-[235px] bg-[#2B3C4B] rounded-[10px]">
                        <h1 className="text-[#FFFFFF] font-[700] text-[20px] leading-[30px]">LEVEL 4</h1>
                        <span className="w-[265px] sm:w-[165px] h-[1px] bg-[#FFFFFF] opacity-70 mb-[18px] mt-[13px]"></span>
                        <h1 className='text-[#FDDE01] text-[25px] sm:text-[30px] sm:leading-[45px] font-[700]  '>
                            250
                            <span className="text-[18px] leading-[27px] font-[400]"> SOL for 12 months</span>
                        </h1>

                        <h1 className='text-[#FFFFFF] tracking-wider text-[25px] sm:text-[12px] sm:leading-[18px] font-[700]  '>
                            1
                            <span className="text-[12px] leading-[18px] font-[300]"> % TX FEE</span>
                        </h1>

                        <button className='w-[260px] h-[40px] sm:w-[190px] mt-[23px] sm:mt-auto tracking-[2px] sm:h-[35px] border-[.5px] border-[#FFFFFF] rounded-[5px] font-[700] text-[12px] sm:text-[16px]  text-[#FFFFFF] uppercase bg-[#1D2F42] hover:bg-[#FDDE01] hover:text-[#212F40] '
                            onClick={() => handleSelectPlan(4)}>
                            select plan
                        </button>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ScoutPlans