import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import { Button } from '../ui/button';
import Link from 'next/link';

function CatalogHero() {
    return (
        <section
            className="sm:h-[90vh] h-[80vh]  bg-cover bg-center  bg-no-repeat relative  text-white sm:bg-[url('/images/category.webp')] bg-[url('/images/categoryMob.webp')] flex flex-col justify-end items-center" >
            <MaxWidthWrapper className='flex flex-col sm:gap-y-6 gap-y-4 justify-center items-center max-w-screen-lg mx-auto h-full   lg:px-0 md:px-8 mt-8'
            >
                <h3 className='sm:text-xl text-base font-medium '>
                    Dynamisches Vertragsmanagement
                </h3>
                <h1 className='md:text-[65px] text-2xl leading-tight font-semibold text-center'>
                    Sammeln Sie Erinnerungen auf Ihrer Ägyptenreise
                </h1>
                <Link href='/' className='sm:mt-2 mt-1'>
                    <Button className='bg-amber rounded-full px-8 h-12 hover:bg-amber text-base'>
                        BOOK A TRIP
                    </Button>
                </Link>
            </MaxWidthWrapper>
        </section >
    )
}

export default CatalogHero;
