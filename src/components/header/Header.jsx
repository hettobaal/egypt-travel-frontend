import React from 'react'
import { ModeToggle } from '../DarkToggle';
import { Profile } from './Profile';
import FullScreen from './FullScreen';
import TabSide from './TabSide';

function Header() {
    return (
        <>
            <header className='bg-white dark:bg-darkMode bg-blur-xl tab:px-6 sm:px-4 px-2 w-full  h-16  fixed top-0 z-50 flex justify-between gap-1 items-center '>
                <TabSide />
                <div className='max-w-72 flex justify-end ml-auto lg:gap-4 gap-3'>
                    <FullScreen />
                    <ModeToggle />
                    <Profile />
                </div>
            </header>

        </>
    )
}

export default Header