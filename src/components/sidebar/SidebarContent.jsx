'use client'
import React, { useState } from 'react'
import SidebarItems from './SidebarItems'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu } from '@/asset/sidebar'
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from 'next/navigation'

function SidebarContent({ open }) {

    const [activeDropdown, setActiveDropdown] = useState(null);
    const [role, setRole] = useState("admin");
    const router = usePathname()

    const toggleDropdown = (index) => {
        setActiveDropdown((prevActive) => (prevActive === index ? null : index));
    };

    return (
        <>
            <ScrollArea className=' max-h-[100vh] scroll-bar overflow-y-scroll   py-4  '>
                <ul className='flex flex-col justify-center  gap-4 tab:px-3 '>
                    {
                        Menu.map((item, i) => {
                            if (item.title === 'Dashboard' && role !== 'admin') return null;
                            return (
                                <div key={i}>
                                    {open && item.heading && <h3 className='text-lightGray dark:text-white text-muted-foreground text-sm'>{item.heading}</h3>}
                                    {item.title && (
                                        <>
                                            <li className={`${activeDropdown === i ? 'text-blue' : 'text-gray'}
                                            ${router === '/' && item.title === 'Dashboard' ? 'text-blue' : 'text-gray'} cursor-pointer dark:text-darkModeText flex items-center py-2 transition-all hover:text-blue duration-300 justify-center  tab:hover:-mr-3  hover:-mr-1  `} onClick={() => toggleDropdown(i)} >
                                                <item.Icon size={20} />
                                                {
                                                    open && <h1 className='ml-3 text-base font-medium'>{item.title}</h1>
                                                }
                                                {
                                                    open && item.subMenu && (
                                                        <IoIosArrowForward size={18} className={`ml-auto sm:mr-0 mr-1 ${activeDropdown === i && 'rotate-90'} duration-300`} />
                                                    )

                                                }
                                            </li>
                                            {
                                                item.subMenu && activeDropdown === i && open &&
                                                <SidebarItems
                                                    data={item}
                                                    isDropDown={activeDropdown === i}
                                                    router={router}
                                                />
                                            }
                                        </>
                                    )
                                    }
                                </div>
                            )
                        })
                    }
                </ul>
            </ScrollArea >
        </>
    )
}

export default SidebarContent