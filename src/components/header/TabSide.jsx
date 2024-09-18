'use client'
import React, { useState } from 'react'
import { LuAlignJustify } from 'react-icons/lu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import SidebarContent from '../sidebar/SidebarContent';

function TabSide() {
    const [open, setOpen] = useState(true)
    const side = 'left'
    return (
        <>
            <aside className='tab:hidden gap-2 flex items-center  dark:bg-darkMode dark:text-white z-50   h-16  bg-white top-0 bottom-0 relative'>
                <Sheet >
                    <SheetTrigger>
                        <LuAlignJustify
                            size={25}
                            className='text-[#18aefa]' />

                    </SheetTrigger>
                    <SheetContent side={side} className='w-64'>
                        <SheetHeader>
                            <SidebarContent open={open} setOpen={setOpen} />
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </aside>
        </>
    )
}

export default TabSide