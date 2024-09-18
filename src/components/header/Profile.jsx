"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";
export function Profile() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <span  >
                    <Button variant="secondary" className='dark:bg-darkModeSecondary' >
                        <h1>Administrator</h1>
                        <IoIosArrowDown size={15} className={`ml-2`} />
                    </Button>
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 ">
                <Button variant='secondary' className='w-full dark:bg-darkModeSecondary'>
                    Logout
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
