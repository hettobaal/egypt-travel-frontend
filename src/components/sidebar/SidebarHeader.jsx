import React from 'react'
import Image from 'next/image'
import { LuAlignJustify } from "react-icons/lu";
function SidebarHeader({ open, setOpen }) {
    return (
        <>
            <header className={`dark:bg-darkMode dark:text-white z-50 sticky  bg-white top-0 bottom-0  items-center  tab:block pl-2 hidden duration-300 ${open ? 'lg:w-64 w-60' : 'lg:w-24 w-24'}`}>
                <div className='flex justify-between items-center h-16 dark:text-white '>
                    {open && (
                        <Image
                            src='/nav/webLogo.webp'
                            width={100}
                            height={100}
                            alt='logo'
                        />
                    )}
                    <button className={` bg-blue w-9 h-[34px] flex justify-center items-center rounded-lg  shadow-lg ${open ? 'ml-0' : 'ml-4'}`} onClick={() => setOpen(!open)} >
                        <LuAlignJustify size={20} className='text-white' />
                    </button>
                </div>
            </header>
        </>
    )
}

export default SidebarHeader;