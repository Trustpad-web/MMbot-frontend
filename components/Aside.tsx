import React, { useEffect, useRef } from 'react'
import NavLink from './Navlink'
import Image from 'next/image'
import { WalletMultiButton, } from '@solana/wallet-adapter-react-ui';
import { useRouter, usePathname } from 'next/navigation'
import { useWallet, type Wallet } from '@solana/wallet-adapter-react';
import { setDashboardState } from "@/store/dashboardSlice";
import { useAppSelector, useAppDispatch } from "@/store";
import { LOGIN_WALLET_URL, SIGNUP_WALLET_URL } from '@/context';
import api from '@/context/api';
import { setBotsState } from '@/store/botsSlice';
import { toast } from 'react-toastify';
import { setSettingsState } from '@/store/settingsSlice';
interface AsideProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Aside: React.FC<AsideProps> = ({ isOpen, setIsOpen }) => {

    const asideRef = useRef<HTMLDivElement>(null);
    const { connect, connected, connecting, disconnect, disconnecting, publicKey, select, wallet, wallets } = useWallet();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const pathname = usePathname()
    useEffect(() => {
        closeOnMobile()
    }, [pathname])

    useEffect(() => {
        if (!connected) {
            dispatch(setBotsState([]))
            dispatch(setDashboardState({ id: 0, balance: 0, incomeState: { current: 0, previous: 0 },address:'' }))
            //router.push("/dashboard")
            toast.success("Signed Out!")
        }
    }, [connected])

    useEffect(() => {
        async function fetchData() {
            if (connected && publicKey?.toBase58()) {
                const { user, message, error } = await api.post(LOGIN_WALLET_URL, { address: publicKey?.toBase58() }).then(res => res.data).catch(() => ({ error: 'Network ERR' }))
                if (user) {
                    dispatch(setBotsState(user.bots||[]))
                    dispatch(setSettingsState(user.setting))
                    dispatch(setDashboardState({ id: user.id, balance: user.balance, incomeState: { current: user.current, previous: user.previous },address:publicKey?.toBase58() }))
                    toast.success('Successfully Logged In!')
                    return
                }
                if (error) {
                    const { user: newUser, message: newMessage, error: newError } = await api.post(SIGNUP_WALLET_URL, { address: publicKey?.toBase58(), role: "user" }).then(res => res.data).catch(() => ({ error: 'Network ERR' }))

                    if (newUser) {
                        dispatch(setBotsState([]))
                        dispatch(setDashboardState({ id: newUser.id, balance: 0, incomeState: { current: 0, previous: 0 },address:publicKey?.toBase58() }))
                        toast.success('Successfully Signed Up!')
                        return
                    }
                    if (newError) {
                        toast.error(newError)
                        return
                    }
                }
            }
        }

        fetchData()
    }, [publicKey, connected])

    const closeOnMobile = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1300 && isOpen) {
                closeOnMobile();
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (asideRef.current && !asideRef.current.contains(event.target as Node)) {
                closeOnMobile();
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, setIsOpen]);

    return (
        <>

            <div ref={asideRef} className={`aside z-[1030] 1301-1439:w-[314px] 1440-1500:w-[314px]  transition-all-ease ${isOpen ? '!left-[0%] ' : ' '} 320-529:w-[314px] 320-529:px-[30px] 320-529:left-[-100%] 1300:w-[314px]  1300:left-[-100%] 1300:fixed 320-529:fixed 320-529:top-0 transition-all top-0 w-[17%] flex flex-col min-h-[100vh] bg-[#212F40] py-[40px] px-[30px]  `}>

                <div className='flex justify-start'>
                    <Image src='/assets/images/brandlogo.svg' className=' max-w-[100%]' alt='' width={187} height={343} />
                </div>

                <div className='aside-links py-[60px] flex flex-col gap-[30px] h-full overflow-x-hidden overflow-y-auto border-b-1 border-[#34475F]'>
                    <NavLink onActive='font-poppins-medium text-[#FFE000] after-line' notActive='text-[#CBD6E4] font-poppins-light text-[16px]' className='text-[#CBD6E4] font-poppins-light text-[16px] flex gap-[15px]' to='/dashboard'><span className='flex-shrink-0 filter-yellow'><Image src='/assets/images/as1.svg' alt='' width={24} height={24} /></span>Dashboard</NavLink>
                    <NavLink onActive='font-poppins-medium text-[#FFE000] after-line' notActive='text-[#CBD6E4] font-poppins-light text-[16px]' className='text-[#CBD6E4] font-poppins-light text-[16px] flex gap-[15px]' to='/cryptocurrencies'><span className='flex-shrink-0 filter-yellow'><Image src='/assets/images/as2.svg' alt='' width={24} height={24} /></span>Cryptocurrencies</NavLink>
                    <NavLink onActive='font-poppins-medium text-[#FFE000] after-line' notActive='text-[#CBD6E4] font-poppins-light text-[16px]' className='text-[#CBD6E4] font-poppins-light text-[16px] flex gap-[15px]' to='/bots'><span className='flex-shrink-0 filter-yellow'><Image src='/assets/images/as3.svg' alt='' width={24} height={24} /></span>My bots</NavLink>
                    <NavLink onActive='font-poppins-medium text-[#FFE000] after-line' notActive='text-[#CBD6E4] font-poppins-light text-[16px]' className='text-[#CBD6E4] font-poppins-light text-[16px] flex gap-[15px]' to='/my-library'><span className='flex-shrink-0 filter-yellow'><Image src='/assets/images/as4.svg' alt='' width={24} height={24} /></span>My library</NavLink>
                    <NavLink onActive='font-poppins-medium text-[#FFE000] after-line' notActive='text-[#CBD6E4] font-poppins-light text-[16px]' className='text-[#CBD6E4] font-poppins-light text-[16px] flex gap-[15px]' to='/trade-history'><span className='flex-shrink-0 filter-yellow'><Image src='/assets/images/as5.svg' alt='' width={24} height={24} /></span>Trade history</NavLink>
                    <NavLink onActive='font-poppins-medium text-[#FFE000] after-line' notActive='text-[#CBD6E4] font-poppins-light text-[16px]' className='text-[#CBD6E4] font-poppins-light text-[16px] flex gap-[15px]' to='/setting'><span className='flex-shrink-0 filter-yellow'><Image src='/assets/images/as6.svg' alt='' width={24} height={24} /></span>Setting</NavLink>
                    <NavLink onActive='font-poppins-medium text-[#FFE000] after-line' notActive='text-[#CBD6E4] font-poppins-light text-[16px]' className='text-[#CBD6E4] font-poppins-light text-[16px] flex gap-[15px]' to='/charts'><span className='flex-shrink-0 filter-yellow'><Image src='/assets/images/as7.svg' alt='' width={24} height={24} /></span>Charts</NavLink>
                    <NavLink onActive='font-poppins-medium text-[#FFE000] after-line' notActive='text-[#CBD6E4] font-poppins-light text-[16px]' className='text-[#CBD6E4] font-poppins-light text-[16px] flex gap-[15px]' to='/help'><span className='flex-shrink-0 filter-yellow'><Image src='/assets/images/as8.svg' alt='' width={24} height={24} /></span>Help</NavLink>
                </div>
                <div className=" flex justify-center  items-center">
                    <WalletMultiButton />
                </div>
                <div className='user-drop pt-[150px] mt-5 border-t-2 border-[#34475F]'>

                    {/* <div className="w-[200px] flex items-center gap-[20px]">
                  
                        <div className='flex items-center gap-[10px]'>
                            <Image src='/assets/images/wallet-bot.svg' alt='' className='1366-1439:w-[30px] 1366-1439:h-[30px] ' width={35} height={35} />
                            <span className='font-inter-regular text-[#CBD6E4] text-[16px] 1366-1439:text-[14px]'>23049873...3213</span>
                        </div>

                        <Image src='/assets/images/chevron.svg' alt='' width={10} height={6} />
                    </div> */}
                </div>
            </div>
            <div className={`overlay 1920:hidden 1300:!block 320-529:block fixed top-0 left-0 h-full  transition-all-ease bg-[#1a2531ba] ${isOpen ? 'opacity-[1] w-full h-full z-[2] ' : 'z-[-1] opacity-0 w-[0%] '}`}></div>
        </>
    )
}
export default Aside;

