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
import { getCategories } from '@/lib/siteApis';

function WebHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
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
    const writeReview = route?.startsWith('/write-review');
    const blog = route?.startsWith('/blog-detail');
    const DataPolicy = route?.startsWith('/data-policy');
    const PrivacyPolicy = route?.startsWith('/privacy-policy');


    useEffect(() => {
        const getData = async () => {
            const data = await getCategories()
            setCategoryData(data?.data)
        }
        getData()

    }, [])


    return (
        <header className={`w-full lg:h-[75px] h-[65px] fixed z-50 top-0 lg:py-2 py-3 box-border transition-colors duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
            <MaxWidthWrapper className='w-full flex justify-between items-center'>
                <Link
                    href='/'
                    prefetch={false}
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
                        className='lg:hidden'
                        src='/nav/webLogo.webp'
                        priority
                        width={105}
                        height={100}
                        alt='web Logo'
                    />
                </Link>
                <ul className='lg:flex hidden items-center gap-x-8'>
                    <li>
                        <Link
                            prefetch={false}
                            href='/'
                            className={`text-base font-medium tracking-wider ${route === '/' ? 'text-amber border-b-2 pb-[1px] border-amber' : blog || writeReview || DataPolicy || PrivacyPolicy || isTourDetailPage ? 'text-[#252525]' : scrolled ? 'text-black' : 'text-white'}`}
                        >
                            Startseite
                        </Link>
                    </li>
                    <li>
                        <Link
                            prefetch={false}
                            href='/about-us'
                            className={`text-base font-medium tracking-wider ${route === '/about-us' ? 'text-amber border-b-2 pb-[1px] border-amber' : blog || writeReview || DataPolicy || PrivacyPolicy || isTourDetailPage ? 'text-[#252525]' : scrolled ? 'text-black' : 'text-white'}`}
                        >
                            Über uns
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

                                        className={`cursor-pointer text-base font-medium tracking-wider ${route?.startsWith('/category') ? 'text-amber ' : blog || DataPolicy || PrivacyPolicy || writeReview || isTourDetailPage ? 'text-[#252525]' : scrolled ? 'text-black' : 'text-white'}`}
                                    >
                                        Kategorien
                                    </span>
                                    <span className='p-0'>
                                        <ChevronDown
                                            color={`${route?.startsWith('/category') ? '#F18700' : blog || writeReview || DataPolicy || PrivacyPolicy || isTourDetailPage ? '#252525' : scrolled ? '#000000' : '#FFFFFF'}`}
                                            size={20}
                                            className={`transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                        />
                                    </span>

                                </div>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Static Actions"
                            >
                                {
                                    categoryData?.map((item, index) => {
                                        return (
                                            <DropdownItem
                                                key={index}
                                                className=' data-[hover=true]:bg-default-0  border-b-1 border-[#F1870059] rounded-none px-0'
                                            >
                                                <Link
                                                    prefetch={false}
                                                    href={`/category/${item?.slug}`}
                                                    className='text-base font-medium text-black'
                                                >
                                                    {item?.categoryName}
                                                </Link>
                                            </DropdownItem>
                                        )
                                    })
                                }
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li>
                        <Link
                            prefetch={false}
                            href='/blogs'
                            className={`text-base font-medium tracking-wider ${route === '/blogs' ? 'text-amber border-b-2 pb-[1px] border-amber' : blog || DataPolicy || writeReview || DataPolicy || PrivacyPolicy || isTourDetailPage ? 'text-[#252525]' : scrolled ? 'text-black' : 'text-white'}`}
                        >
                            Reiseblog
                        </Link>
                    </li>
                    <li>
                        <Link
                            prefetch={false}
                            href='/discounted-tours'
                            className={`text-base font-medium tracking-wider ${route === '/discounted-tours' ? 'text-amber border-b-2 pb-[1px] border-amber' : blog || writeReview || DataPolicy || PrivacyPolicy || isTourDetailPage ? 'text-[#252525]' : scrolled ? 'text-black' : 'text-white'}`}
                        >
                            ermäßigte Touren
                        </Link>
                    </li>
                </ul>
                <Link
                    prefetch={false}
                    href='/contact' className='lg:block hidden'>
                    <Button className='bg-amber rounded-full px-6 hover:bg-amber text-lg'>
                        Kontakt
                    </Button>
                </Link>
                <span className='lg:hidden'>
                    <MobileMenu scrolled={scrolled} isTourDetailPage={isTourDetailPage} writeReview={writeReview} blog={blog} categoryData={categoryData} DataPolicy={DataPolicy} PrivacyPolicy={PrivacyPolicy} />
                </span>
            </MaxWidthWrapper>
        </header >
    )
}

export default WebHeader;
