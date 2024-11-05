"use client"
import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { IoSearchOutline } from 'react-icons/io5';
import { getTours } from '@/lib/siteApis';
import Link from 'next/link';

function Search() {
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
            console.log("tours", tours);

            const filtered = tours?.data?.filter(tour =>
                tour.title.toLowerCase().includes(query.toLowerCase())  // Filter tours by search query
            );
            console.log("filtered", filtered);
            setFilteredTours(filtered);
            setIsDropdownVisible(true);
        } catch (error) {
            console.error('Error fetching or filtering tours:', error);
            setFilteredTours([]);
            setIsDropdownVisible(false);
        }
    };

    // Handle input changes
    const handleInputChange = (e) => {
        console.log("input", e.target.value);

        setSearchQuery(e.target.value);
    };

    return (
        <section className='relative bg-[#DAE4EE] flex justify-center items-center sm:gap-x-4 gap-x-2 py-3 lg:px-10 md:px-8 sm:px-6 px-4'>
            <span className='w-full max-w-screen-lg'>
                <Input
                    className='w-full rounded-none ring-offset-background-none focus:outline-none sm:placeholder:text-[14px] placeholder:text-[12px]'
                    type="search"
                    placeholder="Suche nach ägyptischer Tour"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </span>
            <button className='p-2 bg-amber rounded-full'>
                <IoSearchOutline size={20} color='#FFFFFF' />
            </button>

            {/* Dropdown for search results */}
            {isDropdownVisible && (
                <div className='absolute top-full mt-2 w-full max-w-screen-lg bg-white shadow-lg z-40 rounded br'>
                    {filteredTours?.length > 0 ? (
                        <ul className='divide-y divide-gray-200'>
                            {filteredTours?.map((tour) => (
                                <Link
                                    key={tour._id}
                                    className='cursor-pointer'
                                    prefetch={false}
                                    href={`/tourdetail/${tour?.slug}`}
                                >
                                    <li
                                        className='p-2 hover:bg-gray-100 '>
                                        {tour.title}
                                    </li>
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
        </section>
    );
}

export default Search;
