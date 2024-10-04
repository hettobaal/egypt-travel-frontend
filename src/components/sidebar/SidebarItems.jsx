import React from 'react'
import Link from 'next/link'
function SidebarItems({ data, isDropDown, router }) {
    return (
        <>
            {data.subMenu.map((subItem, i) => {
                return (
                    <div key={i} className={`${isDropDown ? 'h-full' : 'hidden'} duration-300`}>
                        <Link className={` ${router === subItem.url ? 'bg-blue text-white' : 'text-gray'} w-full hover:text-white dark:text-white hover:bg-blue mt-1 flex justify-center duration-300 py-2 rounded-md whitespace-nowrap`} href={subItem.url}>{subItem.subTitle}</Link>
                    </div>
                )
            })}
        </>
    )
}

export default SidebarItems