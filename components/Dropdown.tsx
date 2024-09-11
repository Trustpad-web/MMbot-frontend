
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { WalletModalProvider, WalletMultiButton, } from '@solana/wallet-adapter-react-ui';




export default function Dropdown() {

    return (
        <>

            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="w-[200px] flex items-center gap-[20px]">
                        <div className='flex items-center gap-[10px]'>
                            <Image src='/assets/images/wallet-bot.svg' alt='' className='1366-1439:w-[30px] 1366-1439:h-[30px] ' width={35} height={35} />
                            <span className='font-inter-regular text-[#CBD6E4] text-[16px] 1366-1439:text-[14px]'> <WalletMultiButton /></span>
                        </div>

                        <Image src='/assets/images/chevron.svg' alt='' width={10} height={6} />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 z-40 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none top-[-250px]">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-200 text-gray-800' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <span>
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="none"
                                            >
                                                <path
                                                    opacity="0.12"
                                                    d="M11.2827 3.45332C11.5131 2.98638 11.6284 2.75291 11.7848 2.67831C11.9209 2.61341 12.0791 2.61341 12.2152 2.67831C12.3717 2.75291 12.4869 2.98638 12.7174 3.45332L14.9041 7.88328C14.9721 8.02113 15.0061 8.09006 15.0558 8.14358C15.0999 8.19096 15.1527 8.22935 15.2113 8.25662C15.2776 8.28742 15.3536 8.29854 15.5057 8.32077L20.397 9.03571C20.9121 9.11099 21.1696 9.14863 21.2888 9.27444C21.3925 9.38389 21.4412 9.5343 21.4215 9.68377C21.3988 9.85558 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1912 13.9538 17.136 14.0076 17.1004 14.0715C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.906 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7554 20.57 17.6071 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8584 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8584 11.7639 17.8942 11.6277 17.9658L7.25492 20.2654C6.79392 20.5078 6.56341 20.6291 6.39297 20.5975C6.24468 20.57 6.11672 20.477 6.04474 20.3445C5.962 20.1922 6.00603 19.9355 6.09407 19.4221L6.92889 14.5547C6.95491 14.403 6.96793 14.3271 6.95912 14.2545C6.95132 14.1902 6.93111 14.128 6.89961 14.0715C6.86402 14.0076 6.80888 13.9538 6.69859 13.8464L3.16056 10.4004C2.78766 10.0372 2.60121 9.85558 2.57853 9.68377C2.55879 9.5343 2.60755 9.38389 2.71125 9.27444C2.83044 9.14863 3.08797 9.11099 3.60304 9.03571L8.49431 8.32077C8.64642 8.29854 8.72248 8.28742 8.78872 8.25662C8.84736 8.22935 8.90016 8.19096 8.94419 8.14358C8.99391 8.09006 9.02793 8.02113 9.09597 7.88328L11.2827 3.45332Z"
                                                    fill="#727275"
                                                    role="none"
                                                />
                                                <path
                                                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                                    stroke="#727275"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="square"
                                                    strokeLinejoin="round"
                                                    role="none"
                                                />
                                            </svg>
                                        </span>
                                        <span className='ml-2'>Add to favorites</span>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-200 text-gray-800' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}

                                    >
                                        <span>
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="none"
                                            >
                                                <path
                                                    opacity="0.12"
                                                    d="M8 14.3255C8 13.8363 8 13.5917 8.05526 13.3615C8.10425 13.1574 8.18506 12.9624 8.29472 12.7834C8.4184 12.5816 8.59136 12.4086 8.93726 12.0627L18.5 2.49998C19.3285 1.67155 20.6716 1.67156 21.5 2.49998C22.3285 3.32841 22.3285 4.67156 21.5 5.49998L11.9373 15.0627C11.5914 15.4086 11.4184 15.5816 11.2166 15.7053C11.0377 15.8149 10.8426 15.8957 10.6385 15.9447C10.4083 16 10.1637 16 9.67454 16H8V14.3255Z"
                                                    fill="#727275"
                                                    role="none"
                                                />
                                                <path
                                                    d="M11 3.99998H5.2C4.0799 3.99998 3.51984 3.99998 3.09202 4.21797C2.71569 4.40972 2.40973 4.71568 2.21799 5.092C2 5.51983 2 6.07988 2 7.19998V18.8C2 19.9201 2 20.4801 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.0799 22 5.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4801 20 19.9201 20 18.8V13M7.99997 16H9.67452C10.1637 16 10.4083 16 10.6385 15.9447C10.8425 15.8957 11.0376 15.8149 11.2166 15.7053C11.4184 15.5816 11.5914 15.4086 11.9373 15.0627L21.5 5.49998C22.3284 4.67156 22.3284 3.32841 21.5 2.49998C20.6716 1.67156 19.3284 1.67155 18.5 2.49998L8.93723 12.0627C8.59133 12.4086 8.41838 12.5816 8.29469 12.7834C8.18504 12.9624 8.10423 13.1574 8.05523 13.3615C7.99997 13.5917 7.99997 13.8363 7.99997 14.3255V16Z"
                                                    stroke="#727275"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="square"
                                                    role="none"
                                                />
                                            </svg>
                                        </span>
                                        <span className='ml-2'>Rename</span>

                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-200 text-gray-800' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <span>
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="none"
                                            >
                                                <path
                                                    opacity="0.12"
                                                    d="M2 11.2C2 10.0799 2 9.51984 2.21799 9.09202C2.40973 8.71569 2.71569 8.40973 3.09202 8.21799C3.51984 8 4.0799 8 5.2 8H12.8C13.9201 8 14.4802 8 14.908 8.21799C15.2843 8.40973 15.5903 8.71569 15.782 9.09202C16 9.51984 16 10.0799 16 11.2V18.8C16 19.9201 16 20.4802 15.782 20.908C15.5903 21.2843 15.2843 21.5903 14.908 21.782C14.4802 22 13.9201 22 12.8 22H5.2C4.0799 22 3.51984 22 3.09202 21.782C2.71569 21.5903 2.40973 21.2843 2.21799 20.908C2 20.4802 2 19.9201 2 18.8V11.2Z"
                                                    fill="#727275"
                                                    role="none"
                                                />
                                                <path
                                                    d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"
                                                    stroke="#727275"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="square"
                                                    role="none"
                                                />
                                            </svg>
                                        </span>

                                        <span className='ml-2'>Duplicate</span>

                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-200 text-gray-800' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}

                                    >
                                        <span>
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="none"
                                            >
                                                <g opacity="0.12" role="none">
                                                    <path
                                                        d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                                                        fill="#727275"
                                                        role="none"
                                                    />
                                                    <path
                                                        d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                                                        fill="#727275"
                                                        role="none"
                                                    />
                                                    <path
                                                        d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                                                        fill="#727275"
                                                        role="none"
                                                    />
                                                </g>
                                                <path
                                                    d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z"
                                                    stroke="#727275"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="square"
                                                    role="none"
                                                />
                                            </svg>
                                        </span>

                                        <span className='ml-2'>Share document</span>

                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-200 text-gray-800' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}

                                    >
                                        <span>
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="none"
                                            >
                                                <path
                                                    opacity="0.12"
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                    fill="#727275"
                                                    role="none"
                                                />
                                                <path
                                                    d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                                    stroke="#727275"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="square"
                                                    role="none"
                                                />
                                            </svg>
                                        </span>

                                        <span className='ml-2'>Move to campaign</span>

                                    </button>
                                )}
                            </Menu.Item>
                        </div>

                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-200 text-red-600' : 'text-red-600'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}

                                    >
                                        <span>
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="none"
                                            >
                                                <path
                                                    opacity="0.12"
                                                    d="M19 17.2V6H5V17.2C5 18.8802 5 19.7202 5.32698 20.362C5.6146 20.9265 6.07354 21.3854 6.63803 21.673C7.27976 22 8.11984 22 9.8 22H14.2C15.8802 22 16.7202 22 17.362 21.673C17.9265 21.3854 18.3854 20.9265 18.673 20.362C19 19.7202 19 18.8802 19 17.2Z"
                                                    fill="#F94C58"
                                                    role="none"
                                                />
                                                <path
                                                    d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"
                                                    stroke="#F94C58"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="square"
                                                    role="none"
                                                />
                                            </svg>
                                        </span>

                                        <span className='ml-2'>Delete</span>

                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>


        </>
    )
}

