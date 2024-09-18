import React from 'react'
import { Input } from '../ui/input'
import { IoSearchOutline } from 'react-icons/io5'

function Search() {
    return (
        <section className='bg-[#DAE4EE] flex justify-center items-center sm:gap-x-4 gap-x-2 py-3  lg:px-10 md:px-8 sm:px-6 px-4'>
            <span className='w-full max-w-screen-lg '>
                <Input
                    className='w-full rounded-none ring-offset-background-none focus:outline-none sm:placeholder:text-[14px] placeholder:text-[12px]'
                    type="search"
                    placeholder="Suche nach ägyptischer Tour und Kategorien" />
            </span>
            <button className='p-2 bg-amber rounded-full'>
                <IoSearchOutline size={20} color='#FFFFFF' />
            </button>
        </section>
    )
}

export default Search
