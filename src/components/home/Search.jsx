"use client";
import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { IoSearchOutline } from 'react-icons/io5';
import { getTours } from '@/lib/siteApis';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTours, setFilteredTours] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Reset dropdown when search query changes
    useEffect(() => {
        if (!searchQuery) {
            setFilteredTours([]);
            setIsDropdownVisible(false);
        }
    }, [searchQuery]);

    // Fetch all tours from the API and filter locally
    const fetchTours = async () => {
        if (!searchQuery) return;  // Only search if query is not empty

        try {
            const tours = await getTours();  // Fetch tours using the getTours API function
            const filtered = tours?.data?.filter(tour =>
                tour.title.toLowerCase().includes(searchQuery.toLowerCase())  // Filter tours by search query
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

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchTours();
        }
    };

    return (
        <div className='relative bg-[#DAE4EE] flex justify-center items-center sm:gap-x-4 gap-x-2 py-3 lg:px-10 md:px-8 sm:px-6 px-4'>
            <span className='w-full max-w-screen-lg'>
                <Input
                    className='w-full rounded-none ring-offset-background-none focus:outline-none sm:placeholder:text-[14px] placeholder:text-[12px]'
                    type="search"
                    placeholder="Suche nach ägyptischer Tour"
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}  // Trigger search on Enter key press
                />
            </span>
            <button
                onClick={fetchTours}  // Trigger search only when clicked
                className='p-2 bg-amber rounded-full'
            >
                <IoSearchOutline size={20} color='#FFFFFF' />
            </button>

            {/* Dropdown for search results */}
            {isDropdownVisible && (
                <div
                    className='absolute top-full mt-2 flex justify-center items-center mx-auto z-40 lg:max-w-screen-lg max-w-[300px]'
                    style={{ width: '100%', left: '16px', right: '16px' }}
                >
                    <div className='bg-white shadow-lg rounded w-full'>
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
                            <div className='p-2 text-gray-500 m:text-xl text-base font-medium'>
                                No tours found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
