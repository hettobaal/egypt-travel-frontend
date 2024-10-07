"use client"
import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import Link from 'next/link';
import Image from 'next/image';
import CategoryCarousel from './CategoryCarousel';
function CategoryHero({ id, data, ImageUrl, MobImageUrl }) {

    const [width, setWidth] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window?.innerWidth);
        };

        window?.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window?.removeEventListener('resize', handleResize);
        };
    }, []);

    const singleData = data?.filter((item) => item?.slug === id)

    return (
        <div
            style={{
                backgroundImage: `url(${width < 640 ? MobImageUrl : ImageUrl})`
            }}
            className="sm:h-[90vh] h-[80vh] bg-cover bg-center bg-no-repeat relative text-white flex flex-col justify-end items-center"
        >
            {/* <div className="sm:block hidden absolute  inset-0 bg-black opacity-50"></div> */}
            <MaxWidthWrapper className='flex flex-col sm:gap-y-6 gap-y-4 justify-center items-center max-w-screen-lg mx-auto h-full   lg:px-0 md:px-8 mt-8'
            >
                <h1 className='md:text-[34px] text-2xl font-medium text-center z-30'>
                    {singleData[0]?.bannerText}
                </h1>
                <p className='md:text-[26px] text-[17px] leading-snug font-normal text-center z-30'>
                    {singleData[0]?.bannerSlogan}
                </p>

            </MaxWidthWrapper>
            <MaxWidthWrapper className='w-full' >
                <div className='w-full xl:flex hidden justify-between  '>
                    {
                        data?.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={`/category/${item?.slug}`}
                                    scroll={false}
                                    className={`${id === item?.slug && 'bg-white'} flex justify-center items-center gap-x-2     py-2 px-8 rounded-t-xl  whitespace-nowrap z-30`}>
                                    {
                                        id === item?.slug ?
                                            < Image
                                                src='/images/worldBlack.svg'
                                                width={20}
                                                height={21}
                                                loading='lazy'
                                                alt='worldBlack'
                                            />
                                            :
                                            < Image
                                                src='/images/world.svg'
                                                width={20}
                                                height={21}
                                                loading='lazy'
                                                alt='world'
                                            />
                                    }

                                    <h5
                                        className={`text-xl font-semibold ${id === item?.slug ? 'text-black' : 'text-white'}`}
                                    >
                                        {item?.categoryName}
                                    </h5>
                                </Link>
                            )
                        })
                    }
                </div>
                <CategoryCarousel id={id} data={data} />
            </MaxWidthWrapper>
        </div >
    )
}

export default CategoryHero;
