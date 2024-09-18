'use client'
import React, { useState } from 'react'
import SidebarHeader from './SidebarHeader';
import SidebarContent from './SidebarContent';

function Sidebar() {

  const [open, setOpen] = useState(true)

  return (
    <aside className={`${open ? 'w-64' : 'tab:w-24 w-full '} dark:bg-darkMode dark:text-white  duration-300 relative tab:flex flex-col h-screen  hidden bg-white dark:text-light  `}>
      <SidebarHeader open={open} setOpen={setOpen} />
      <SidebarContent open={open} />
    </aside >
  )
}

export default Sidebar