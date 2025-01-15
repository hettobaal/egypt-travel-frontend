"use client"
import React, { useEffect, useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
// req acess2
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Input } from '../ui/input';
import { ChevronDown } from 'lucide-react';
import { getTours } from '@/lib/siteApis';
import { FaArrowRight } from 'react-icons/fa';

function MobileMenu({ scrolled, isTourDetailPage, writeReview, categoryData, blog, DataPolicy }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };



    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTours, setFilteredTours] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Fetch tours and filter them based on search query
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery) {
                fetchTours(searchQuery);
            } else {
                setFilteredTours([]);
                setIsDropdownVisible(false);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery]);

    // Fetch all tours from the API and filter locally
    const fetchTours = async (query) => {
        try {
            const tours = await getTours();  // Fetch tours using the getTours API function
            const filtered = tours?.data?.filter(tour =>
                tour.title.toLowerCase().includes(query.toLowerCase())  // Filter tours by search query
            );
            setFilteredTours(filtered);
            setIsDropdownVisible(true);
        } catch (error) {
            setFilteredTours([]);
            setIsDropdownVisible(false);
        }
    };

    // Handle input changes
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };






    return (
        <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen} >
                <SheetTrigger>
                    {
                        isOpen ? '' : <>
                            {blog || writeReview || isTourDetailPage || DataPolicy || scrolled ? (
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
                        <span className='relative'>
                            <Input
                                value={searchQuery}
                                onChange={handleInputChange}
                                className=' rounded-full h-10 placeholder:text-[12px] font-normal border-[#F1870059] border-1 ring-offset-background-none focus:outline-none'
                                type="search"
                                placeholder="Suche nach ägyptischer Tour und Kategorien...." />

                            {isDropdownVisible && (
                                <div className='absolute top-full mt-2 w-full max-w-screen-lg bg-white shadow-lg z-40 rounded '>
                                    {filteredTours?.length > 0 ? (
                                        <ul className='divide-y divide-gray-200'>
                                            {filteredTours?.map((tour) => (
                                                <Link
                                                    key={tour._id}
                                                    className='cursor-pointer flex justify-between items-center'
                                                    prefetch={false}
                                                    href={`/tourdetail/${tour?.slug}`}
                                                >
                                                    <li className='sm:text-xl text-base font-medium p-2 hover:bg-gray-100'>
                                                        {tour.title}
                                                    </li>
                                                    <span className='pr-4'>
                                                        <FaArrowRight />
                                                    </span>
                                                </Link>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className='p-2 text-gray-500'>
                                            No tours found
                                        </div>
                                    )}
                                </div>
                            )}

                        </span>
                        <ul className='w-full flex  flex-col items-start gap-y-3 ps-2'>
                            <Link
                                prefetch={false}
                                onClick={handleLinkClick}
                                href='/'
                                className='w-full border-b-1 border-[#00000038]  pb-3 text-base font-medium tracking-wider text-slate '
                            >
                                Startseite
                            </Link>
                            <Link
                                prefetch={false}
                                onClick={handleLinkClick}
                                href='/about-us'
                                className='w-full border-b-1 border-[#00000038] pb-3 text-base font-medium tracking-wider text-slate'
                            >
                                Über uns
                            </Link>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className='w-full border-b-1 border-[#00000038] pb-3  flex items-center gap-x-1'>
                                <span
                                    className=' text-base font-medium tracking-wider text-slate'
                                >
                                    Kategorien
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
                                Reiseblog
                            </Link>
                            <Link
                                prefetch={false}
                                onClick={handleLinkClick}
                                href='/discounted-tours'
                                className='w-full border-b-1 border-[#00000038] pb-3 text-base font-medium tracking-wider text-slate'
                            >
                                ermäßigte Touren
                            </Link>
                            <Link
                                prefetch={false}
                                onClick={handleLinkClick}
                                href='/contact'
                                className='w-full border-b-1 border-[#00000038] pb-3 text-base font-medium tracking-wider text-slate'
                            >
                                Kontakt
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
