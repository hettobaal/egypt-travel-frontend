"use client"
import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';

function CatalogHero({ ImageUrl, MobImageUrl, data }) {

    const [width, setWidth] = useState(null);
    console.log("12");

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

    return (
        <section
            style={{
                backgroundImage: `url(${width < 640 ? MobImageUrl : ImageUrl})`
            }}
            className="sm:h-[90vh] h-[80vh]  bg-cover bg-center  bg-no-repeat relative  text-white   flex flex-col justify-end items-center" >
            <MaxWidthWrapper className='flex flex-col sm:gap-y-6 gap-y-4 justify-center items-center max-w-screen-lg mx-auto h-full   lg:px-0 md:px-8 mt-8'
            >
                <h1 className='md:text-[34px] text-2xl font-medium text-center z-30 '>
                    {data?.subCategoryTitle}
                </h1>
                <p className='md:text-[26px] text-[17px] leading-snug font-normal text-center z-30'>
                    {data?.subCategoryText}
                </p>
            </MaxWidthWrapper>
        </section >
    )
}

export default CatalogHero;
