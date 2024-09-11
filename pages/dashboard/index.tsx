'use client'
// import ApexChart from '@/components/ApexChart';
import HeadCustom from '@/components/HeadCustom'
import Layout from '@/components/Layout';
import MarketSlider from '@/components/MarketSlider'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useWallet, type Wallet } from '@solana/wallet-adapter-react';
import { setDashboardState } from "@/store/dashboardSlice";
import { useAppSelector, useAppDispatch } from "@/store";
import AddBotModal from '@/components/AddBotModal';
import { toast } from 'react-toastify';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { RPC_URL } from '@/context';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function Index() {
    const dashboardState = useAppSelector((state) => state.dashboard.data);
    const dispatch = useAppDispatch();

    // <button onClick={() => dispatch(setAuthState(true))}>Log in</button>
    const { connect, connected, connecting, disconnect, disconnecting, publicKey, select, wallet, wallets } = useWallet();
    const [hideBalance, setHideBalance] = useState(true)
    const [isBotModalOpen, setIsBotModalOpen] = useState(false);
    const [solBalanceState, setSolBalance] = useState(0);

    useEffect(() => {
        async function fetchData() {
            if (publicKey) {
                const connection = new Connection(RPC_URL);
                const balance = await connection.getBalance(publicKey)
                console.log(balance)
                setSolBalance(Number(balance / LAMPORTS_PER_SOL))
            }
        }
        fetchData()
    }, [publicKey])

    const balance = dashboardState.balance
    const currentIncome = dashboardState.incomeState.current
    const previousIncome = dashboardState.incomeState.previous
    const incomeRateThanPrevious = dashboardState.incomeState.current * 100 / (dashboardState.incomeState.previous !== 0 ? dashboardState.incomeState.previous : 1)

    return (
        <>
            <HeadCustom title="Dashboard" description="Cutting Edge Automated Trading Tools" />
            <div className='main-content no-scrollbar flex flex-col overflow-y-hidden overflow-x-hidden w-full h-full 530-1300:pt-[130px] 320-529:pt-[130px]  pt-[40px] pb-[40px] px-[40px] 320-529:px-[15px]'>

                <div className='w-full mb-[30px]'>
                    <h4 className='font-poppins-medium text-[#FFE000] text-[24px]'>Dashboard</h4>
                    <p className='text-[#CBD6E4] font-poppins-light text-[16px]'>Seize the Chain Reap the Gains</p>
                </div>
                <div className='max-w-[100%] mb-[30px]'>
                    <MarketSlider />
                </div>

                <div className='flex bl-details 320-529:flex 1920:hidden  bg-[#212F40] rounded-[10px] px-[25px] py-[25px] mb-[30px]'>


                    <div className='flex border-r-2 w-[47%] border-[#34475F] flex-col max-w-[100%]'>
                        <div className='bl-head'>
                            <h4 className='text-white text-[16px] 375-424:text-[15px] font-poppins-regular'>Income</h4>

                        </div>
                        <div className='flex  items-center gap-[10px] '>
                            <div className='bl-details'>
                                <h4 className='text-white text-[24px] 375-424:text-[17px] font-poppins-regular mb-[5px]'>${solBalanceState}</h4>

                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <h5 className='text-[#3DD598] font-opensans-regular text-[14px] 375-424:text-[13px] '>{incomeRateThanPrevious}%</h5>
                                <Image src='/assets/images/arrow-up.svg' className='w-[8px] h-[9px]' alt='' width={16} height={16} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col pl-[25px]'>
                        <div className='bl-head'>
                            <h4 className='text-white text-[16px] 375-424:text-[15px] font-poppins-regular'>Crypto Balance</h4>

                        </div>
                        <div className='flex justify-between items-center gap-[10px]'>
                            <div className='bl-details'>
                                <h4 className='text-white text-[24px] 375-424:text-[17px] font-poppins-regular'>Coming Soon</h4>

                            </div>
                            <div className='flex gap-[5px] items-center'>
                                <h5 className='text-[#3DD598] font-opensans-regular text-[14px] 375-424:text-[13px] '>0%</h5>
                                <Image src='/assets/images/arrow-up.svg' className='w-[8px] h-[9px]' alt='' width={16} height={16} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bl-details 320-529:hidden flex 530-1100:flex-col 530-1100:gap-[40px] justify-between bg-[#212F40] rounded-[10px] px-[30px] py-[40px] mb-[30px]'>

                    <div className='flex  w-[25.33%] 530-1100:w-full 530-1100:border-none border-r-2 border-[#34475F]    gap-[25px] flex-col max-w-[100%]'>
                        <div className='bl-head'>
                            <h4 className='text-white text-[18px] font-poppins-regular'>Balance Details</h4>
                        </div>
                        <div className='balance-eye px-[13px] gap-[10px] w-[227px] 1301-1439:w-[200px] py-[10px] bg-[#1D2B3C] flex items-center border border-solid border-[#34475F] rounded-[16px]'>
                            <div onClick={() => setHideBalance(!hideBalance)} >
                                {hideBalance ?
                                    <Image src='/assets/images/eye-visible.svg' alt='' width={19} height={100} />
                                    :
                                    <FaEye className='text-[19px] text-[#888]' />
                                }
                            </div>

                            <div>
                                <h5 className='text-white font-opensans-regular text-[14px]'>
                                    {hideBalance ? "Hide Balance" : + solBalanceState.toFixed(4) + " SOL"}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-[33.33%] 530-1100:w-full 530-1100:border-none 530-1100:pr-[0px] pr-[40px] border-r-2 border-[#34475F]  gap-[15px] flex-col max-w-[100%]'>
                        <div className='bl-head'>
                            <h4 className='text-white text-[16px] font-poppins-regular'>Income</h4>

                        </div>
                        <div className='flex justify-between   items-center gap-[30px] '>
                            <div className='bl-details'>
                                <h4 className='text-white text-[28px] font-opensans-semibold mb-[5px]'>${currentIncome}</h4>
                                <p className='text-white text-[14px] font-opensans-light'>Compared to (${previousIncome} last year)</p>
                            </div>
                            <div className='flex gap-[5px]'>
                                <h5 className='text-[#3DD598] font-opensans-regular text-[16px] '>{incomeRateThanPrevious}%</h5>
                                <Image src='/assets/images/arrow-up.svg' alt='' width={16} height={16} />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-[33.33%] 530-1100:w-full gap-[15px] flex-col'>
                        <div className='bl-head'>
                            <h4 className='text-white text-[16px] font-poppins-regular'>Crypto Balance</h4>

                        </div>
                        <div className='flex justify-between items-center gap-[30px]'>
                            <div className='bl-details'>
                                <h4 className='text-white text-[28px] font-opensans-semibold mb-[5px]'>Coming Soon</h4>
                                <p className='text-white text-[14px] font-opensans-light'>Compared to (last year)</p>
                            </div>
                            <div className='flex gap-[5px]'>
                                <h5 className='text-[#3DD598] font-opensans-regular text-[16px] '>+0%</h5>
                                <Image src='/assets/images/arrow-up.svg' alt='' width={16} height={16} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='crypto-bots  h-full flex gap-[20px] 530-1100:flex-col justify-between 320-529:flex-wrap 320-529:gap-[20px]'>
                    <div className="w-6/12 530-1100:w-full 320-529:w-full">
                        <h4 className='text-[#FFE000] font-poppins-medium text-[20px] mb-[20px]'>Cryptocurrencies</h4>
                        <Image src="/assets/images/coming-soon.png" height={'364'} width={'644'} alt='' />
                        {/* <div className='cr-card min-h-[326px] flex flex-col gap-[40px] w-full bg-[#212F40] rounded-[10px] pt-[40px] pb-[60px] px-[20px]'>
                            <div className='flex w-full items-center justify-between'>
                                <div className='flex gap-[15px]'>
                                    <div className='flex-shrink-0'><Image src='/assets/images/pa1.png' width={38} height={38} alt='' /></div>
                                    <div className='flex flex-col'>
                                        <h4 className='flex items-center gap-[10px] 320-529:gap-[20px] 375-424:gap-[10px] text-white text-[18px] font-poppins-semibold'>PARTY <span className='py-[1px] flex justify-center rounded-[5px] bg-[#FDDE01] w-[77px] text-[13.2px] text-[#314156]'>ACTIVE</span> </h4>
                                        <p className='text-[#798391] font-poppins-medium text-[14px]'>PARcZnH...JJdo3zrZ</p>
                                    </div>
                                </div>
                                <div className='1920:hidden 320-529:flex'>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col gap-[5px]'>
                                            <span className='inline-flex rounded-[5px] justify-center items-center  text-[18px] font-poppins-medium text-white bg-[#243140]'>$80</span>
                                            <h5 className='text-[#3DD598] font-poppins-medium text-[16px] '>+120%</h5>

                                        </div>
                                        <div className='pl-[20px]'>
                                            <Image src='/assets/images/arrow-back.svg' width={8} height={14} alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div className='320-529:hidden flex items-center gap-[15px]'>
                                    <div>
                                        <div className='flex gap-[5px]'>
                                            <h5 className='text-[#3DD598] font-poppins-medium text-[16px] '>+120%</h5>

                                        </div>
                                    </div>
                                    <div>
                                        <span className='py-[4px] inline-flex rounded-[5px] justify-center items-center w-[63px] bg-[#243140] text-[18px] font-poppins-medium text-white '>$80</span>
                                    </div>
                                    <div className='pl-[20px]'>
                                        <Image src='/assets/images/arrow-back.svg' width={8} height={14} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-between'>
                                <div className='flex gap-[15px]'>
                                    <div className='flex-shrink-0'><Image src='/assets/images/pa2.png' width={38} height={38} alt='' /></div>
                                    <div className='flex flex-col'>
                                        <h4 className='flex items-center gap-[10px] 320-529:gap-[20px] 375-424:gap-[10px] text-white text-[18px] font-poppins-semibold'>CHONKY <span className='py-[1px] flex justify-center rounded-[5px] bg-[#FDDE01] w-[77px] text-[13.2px] text-[#314156]'>ACTIVE</span> </h4>
                                        <p className='text-[#798391] font-poppins-medium text-[14px]'>H7ed7U...jwLWWU</p>
                                    </div>
                                </div>
                                <div className='1920:hidden 320-529:flex'>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col gap-[5px]'>
                                            <span className='inline-flex rounded-[5px] justify-center items-center text-[18px] font-poppins-medium text-white '>$250</span>
                                            <h5 className='text-[#3DD598] font-poppins-medium text-[16px] '>+19%</h5>

                                        </div>
                                        <div className='pl-[20px]'>
                                            <Image src='/assets/images/arrow-back.svg' width={8} height={14} alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div className=' 320-529:hidden flex items-center gap-[15px]'>
                                    <div>
                                        <div className='flex gap-[5px]'>
                                            <h5 className='text-[#3DD598] font-poppins-medium text-[16px] '>+19%</h5>

                                        </div>
                                    </div>
                                    <div>
                                        <span className='py-[4px] inline-flex rounded-[5px] justify-center items-center w-[63px] text-[18px] font-poppins-medium text-white'>$250</span>
                                    </div>
                                    <div className='pl-[20px]'>
                                        <Image src='/assets/images/arrow-back.svg' width={8} height={14} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full items-center justify-between'>
                                <div className='flex gap-[15px]'>
                                    <div className='flex-shrink-0'><Image src='/assets/images/pa3.png' width={38} height={38} alt='' /></div>
                                    <div className='flex flex-col'>
                                        <h4 className='flex items-center gap-[10px] 320-529:gap-[20px] 375-424:gap-[10px] text-white text-[18px] font-poppins-semibold'>BONK <span className='py-[1px] flex justify-center rounded-[5px] bg-[#ED5959] w-[77px] text-[13.2px] text-[#FFFFFF]'>PAUSED</span> </h4>
                                        <p className='text-[#798391] font-poppins-medium text-[14px]'>DezXAZ...pPB263</p>
                                    </div>
                                </div>
                                <div className='1920:hidden 320-529:flex'>
                                    <div className='flex items-center'>
                                        <div className='flex flex-col gap-[5px]'>
                                            <span className='inline-flex rounded-[5px] justify-center items-center  text-[18px] font-poppins-medium text-white '>$543</span>
                                            <h5 className='text-[#F90F00] font-poppins-medium text-[16px] '>-3%</h5>

                                        </div>
                                        <div className='pl-[20px]'>
                                            <Image src='/assets/images/arrow-back.svg' width={8} height={14} alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div className=' 320-529:hidden flex items-center gap-[15px]'>
                                    <div>
                                        <div className='flex gap-[5px]'>
                                            <h5 className='text-[#F90F00] font-poppins-medium text-[16px] '>-3%</h5>

                                        </div>
                                    </div>
                                    <div>
                                        <span className='py-[4px] inline-flex rounded-[5px] justify-center items-center w-[63px]  text-[18px] font-poppins-medium text-white '>$543</span>
                                    </div>
                                    <div className='pl-[20px]'>
                                        <Image src='/assets/images/arrow-back.svg' width={8} height={14} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="w-6/12 530-1100:w-full 320-529:w-full">
                        <h4 className='text-[#FFE000] font-poppins-medium text-[20px] mb-[20px]'>My Bots</h4>

                        <div className='cr-card justify-center min-h-[326px] height-full flex flex-col gap-[40px] w-full bg-[#212F40] rounded-[10px] pt-[40px] pb-[60px] px-[20px]'>
                            <div className='w-full flex flex-col items-center justify-center'>
                                <button type='button' className='w-[93px] h-[90px] flex justify-center items-center bg-[#1A2531] rounded-[10px]'
                                    onClick={() => dashboardState.id === 0 ? toast.warning("Plase Connect Your Wallet!") : setIsBotModalOpen(true)}>
                                    <Image src='/assets/images/add.svg' alt='' width={37} height={37} />
                                </button>
                                <h4 className='text-[24px] text-white font-poppins-medium pt-[10px]'>Add new bot</h4>
                            </div>
                        </div>

                    </div>

                </div>
                <AddBotModal isOpen={isBotModalOpen} onClose={() => setIsBotModalOpen(false)} />
            </div>

        </>
    );
};

Index.Layout = Layout;
export default Index;