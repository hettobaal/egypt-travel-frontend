"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ChevronDown } from 'lucide-react';

function WebHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const route = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isTourDetailPage = route?.startsWith('/tourdetail');

    return (
        <header className={`w-full lg:h-[75px] h-[65px] fixed z-50 top-0 lg:py-2 py-3 box-border transition-colors duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
            <MaxWidthWrapper className='w-full flex justify-between items-center'>
                <Link
                    href='/'
                >
                    <Image
                        className='lg:block hidden'
                        src='/nav/webLogo.webp'
                        width={130}
                        height={100}
                        alt='web Logo'
                    />
                    <Image
                        className='lg:hidden'
                        src='/nav/webLogo.webp'
                        width={105}
                        height={100}
                        alt='web Logo'
                    />
                </Link>
                <ul className='lg:flex hidden items-center gap-x-8'>
                    <li>
                        <Link
                            href='/'
                            className={`text-base font-medium tracking-wider ${route === '/' ? 'text-amber border-b-2 pb-[1px] border-amber' : isTourDetailPage ? 'text-[#252525]' : scrolled ? 'text-black' : 'text-white'}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/about-us'
                            className={`text-base font-medium tracking-wider ${route === '/about-us' ? 'text-amber border-b-2 pb-[1px] border-amber' : isTourDetailPage ? 'text-[#252525]' : scrolled ? 'text-black' : 'text-white'}`}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className='ms-1'>
                        <Dropdown
                            className='rounded-none min-w-[150px] px-4 pt-2 pb-4'
                            classNames={{
                                base: 'ms-16'
                            }}
                            onOpenChange={setIsDropdownOpen}
                        >
                            <DropdownTrigger>
                                <div className={`flex items-center aria-expanded:opacity-100 aria-expanded:scale-[1] ${route?.startsWith('/category') && 'border-b-2 pb-[2px] border-amber'} `}>
                                    <span

                                        className={`cursor-pointer text-base font-medium tracking-wider ${route?.startsWith('/category') ? 'text-amber ' : isTourDetailPage ? 'text-[#252525]' : scrolled ? 'text-black' : 'text-white'}`}
                                    >
                                        Categories
                                    </span>
                                    <span className='p-0'>
                                        <ChevronDown
                                            color={`${route?.startsWith('/category') ? '#F18700' : isTourDetailPage ? '#252525' : scrolled ? '#000000' : '#FFFFFF'}`}
                                            size={20}
                                            className={`transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                        />
                                    </span>

                                </div>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Static Actions"
                            >
                                <DropdownItem
                                    key="new"
                                    className='data-[hover=true]:bg-default-0  border-b-1 border-[#F1870059] rounded-none px-0'
                                >
                                    <Link
                                        href={'/category/Action&Abenteuer'}
                                        className='text-base font-medium text-black'
                                    >
                                        Action & Abenteuer
                                    </Link>
                                </DropdownItem>
                                <DropdownItem
                                    key="new"
                                    className='data-[hover=true]:bg-default-0  border-b-1 border-[#F1870059] rounded-none px-0'
                                >
                                    <Link
                                        href={'/category/Rund-ums-Meer'}
                                        className='text-base font-medium text-black'
                                    >
                                        Rund ums Meer
                                    </Link>
                                </DropdownItem>
                                <DropdownItem
                                    key="new"
                                    className='data-[hover=true]:bg-default-0  border-b-1 border-[#F1870059] rounded-none px-0'
                                >
                                    <Link
                                        href={'/category/Lands-Leute'}
                                        className='text-base font-medium text-black'
                                    >
                                        Lands & Leute
                                    </Link>
                                </DropdownItem>
                                <DropdownItem
                                    key="new"
                                    className='data-[hover=true]:bg-default-0  border-b-1 border-[#F1870059] rounded-none px-0'
                                >
                                    <Link
                                        href={'/category/Familienausflüge'}
                                        className='text-base font-medium text-black'
                                    >
                                        Familienausflüge
                                    </Link>
                                </DropdownItem>
                                <DropdownItem
                                    key="new"
                                    className='data-[hover=true]:bg-default-0  border-b-1 border-[#F1870059] rounded-none px-0'
                                >
                                    <Link
                                        href={'/category/Kultur'}
                                        className='text-base font-medium text-black'
                                    >
                                        Kultur
                                    </Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li>
                        <Link
                            href='/blogs'
                            className={`text-base font-medium tracking-wider ${route === '/blogs' ? 'text-amber border-b-2 pb-[1px] border-amber' : isTourDetailPage ? 'text-[#252525]' : scrolled ? 'text-black' : 'text-white'}`}
                        >
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/discounted-tours'
                            className={`text-base font-medium tracking-wider ${route === '/discounted-tours' ? 'text-amber border-b-2 pb-[1px] border-amber' : isTourDetailPage ? 'text-[#252525]' : scrolled ? 'text-black' : 'text-white'}`}
                        >
                            Discounted Tours
                        </Link>
                    </li>
                </ul>
                <Link href='/contact' className='lg:block hidden'>
                    <Button className='bg-amber rounded-full px-6 hover:bg-amber text-lg'>
                        Contact US
                    </Button>
                </Link>
                <span className='lg:hidden'>
                    <MobileMenu scrolled={scrolled} isTourDetailPage={isTourDetailPage} />
                </span>
            </MaxWidthWrapper>
        </header >
    )
}

export default WebHeader;
