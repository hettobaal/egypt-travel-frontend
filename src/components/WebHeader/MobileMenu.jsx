"use client"
import React, { useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
// req acess
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Input } from '../ui/input';
import { ChevronDown } from 'lucide-react';

function MobileMenu({ scrolled, isTourDetailPage, writeReview, categoryData }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen} >
                <SheetTrigger>
                    {
                        isOpen ? '' : <>
                            {writeReview || isTourDetailPage || scrolled ? (
                                <Image
         loading='lazy'
         
                                src='/nav/blackToggle.svg'
                                    width={24}
                                    height={20}
                                    alt='web Logo'
                                />
                            ) : (
                                <Image
                           loading='lazy'
         
                                src='/nav/toggle.svg'
                                    width={24}
                                    height={20}
                                    alt='web Logo'
                                />
                            )}
                        </>
                    }
                </SheetTrigger>
                <SheetContent side='left' className=' p-0 px-2 py-4 flex flex-col h-full justify-between'>
                    <div className="w-full flex flex-col gap-y-8">
                        <div className='w-full flex justify-between items-center '>
                            <Link
                            prefetch={false}
                                href='/'
                            >
                                <Image
                                    className='lg:block hidden'
                                    src='/nav/webLogo.webp'
                           priority
         
                                    width={130}
                                    height={100}
                                    alt='web Logo'
                                />
                                <Image
                           priority
                                
                                    className='lg:hidden'
                                    src='/nav/webLogo.webp'
                                    width={105}
                                    height={100}
                                    alt='web Logo'
                                />
                            </Link>
                            <span onClick={() => setIsOpen(false)} className='p-1 rounded-full bg-amber' >
                                <IoMdClose className='text-white' size={20} />
                            </span>
                        </div>
                        <span>
                            <Input
                                className='rounded-full h-10 placeholder:text-[12px] font-normal border-[#F1870059] border-1 ring-offset-background-none focus:outline-none'
                                type="search"
                                placeholder="Suche nach ägyptischer Tour und Kategorien...." />
                        </span>
                        <ul className='w-full flex  flex-col items-start gap-y-3 ps-2'>
                            <Link
                            prefetch={false}
                                onClick={handleLinkClick}
                                href='/'
                                className='w-full border-b-1 border-[#00000038]  pb-3 text-base font-medium tracking-wider text-slate '
                            >
                                Home
                            </Link>
                            <Link
                            prefetch={false}
                                onClick={handleLinkClick}
                                href='/about-us'
                                className='w-full border-b-1 border-[#00000038] pb-3 text-base font-medium tracking-wider text-slate'
                            >
                                About Us
                            </Link>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className='w-full border-b-1 border-[#00000038] pb-3  flex items-center gap-x-1'>
                                <span
                                    className=' text-base font-medium tracking-wider text-slate'
                                >
                                    Categories
                                </span>
                                <ChevronDown color='#000000' size={18}
                                    className={`transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                />

                            </button>
                            {
                                isDropdownOpen && (
                                    <div className='w-full flex flex-col  gap-y-2'>
                                        {
                                            categoryData?.map((item, index) => {
                                                return (
                                                    <Link
                                                    prefetch={false}
                                                    key={index}
                                                        onClick={handleLinkClick}
                                                        href={`/category/${item?.slug}`}
                                                        className='w-full border-b-1 border-[#00000038] pb-3 ps-4 text-base font-medium tracking-wider text-slate'
                                                    >
                                                        {item?.categoryName}
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                            <Link
                            prefetch={false}
                                onClick={handleLinkClick}
                                href='/blogs'
                                className='w-full border-b-1 border-[#00000038] pb-3 text-base font-medium tracking-wider text-slate'
                            >
                                Blogs
                            </Link>
                            <Link
                            prefetch={false}
                                onClick={handleLinkClick}
                                href='/discounted-tours'
                                className='w-full border-b-1 border-[#00000038] pb-3 text-base font-medium tracking-wider text-slate'
                            >
                                Discounted Tours
                            </Link>
                            <Link
                            prefetch={false}
                                onClick={handleLinkClick}
                                href='/contact'
                                className='w-full border-b-1 border-[#00000038] pb-3 text-base font-medium tracking-wider text-slate'
                            >
                                Contact Us
                            </Link>
                        </ul>
                    </div>
                    <Link
                    prefetch={false}
                        onClick={handleLinkClick}
                        href='/' className='w-full flex justify-center items-center mb-4'>
                        <Button className='sm:w-max w-[95%] bg-navy hover:bg-navy rounded-full  px-16 h-12 text-base'>
                            BOOK A TOUR
                        </Button>
                    </Link>
                </SheetContent>
            </Sheet>
        </div >
    );
}

export default MobileMenu;
