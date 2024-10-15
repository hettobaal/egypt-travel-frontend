"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export function Profile() {

    const router = useRouter()

    const logOut = () => {
        Cookies?.remove("authToken")
        Cookies?.remove("isLogin")
        router?.push("/sign-in")
    }

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
                <Button
                    onClick={logOut}
                    variant='secondary'
                    className='w-full dark:bg-darkModeSecondary'>
                    Logout
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
