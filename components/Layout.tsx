import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import Aside from '@/components/Aside'
import { IoClose } from "react-icons/io5";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [asideOpen, setAsideOpen] = useState(false);
  const toggleAside = () => setAsideOpen(prevState => !prevState);
  const handleClose = () => setAsideOpen(false);


  return (
    <>
      <header className=' fixed w-full z-[1030] mobile-header hidden 1300:block 320-529:block bg-[#212F40] px-[30px] py-[20px] '>
        <div className='flex justify-between items-center'>
          <Image src='/assets/images/brandlogo.svg' className=' max-w-[100%]' alt='' width={187} height={343} />


          {asideOpen ? (
            <button onClick={handleClose} className='w-[50px] text-[40px] text-white h-[50px] bg-transparent outline-none border-none'>
              <IoClose />
            </button>
          ) : (
            <button onClick={toggleAside} className='w-[50px] h-[50px] bg-transparent outline-none border-none'>
              <Image src='/assets/images/menu.svg' alt="Menu Icon" width={50} height={50} />
            </button>

          )}

        </div>
      </header >
      <main className='w-full max-w-[100%]  min-h-[100vh] flex bg-[#1A2531]'>
        <Aside isOpen={asideOpen} setIsOpen={setAsideOpen} />
        {children}
      </main>
    </>
  )
}
export default Layout;