import React from 'react'
import Link from 'next/link';
import { Button } from '../ui/button';
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';

function AboutHero() {
    return (
        <section className="relative w-full sm:h-[90vh] h-[80vh] bg-cover bg-center  bg-no-repeat   text-white sm:bg-[url('/images/aboutHero.webp')] bg-[url('/images/aboutHeroMob.webp')]" >
            <div className="sm:block hidden absolute  inset-0 bg-black opacity-50"></div>
            <MaxWidthWrapper className='flex flex-col sm:gap-y-6 gap-y-4 justify-center items-center max-w-screen-md mx-auto h-full   lg:px-0 md:px-8 '>
                <h3 className='sm:text-xl text-base font-medium z-30'>
                    uns
                </h3>
                <h1 className='md:text-[65px] text-2xl leading-tight font-semibold text-center z-30'>
                    gwt, mehr über uns zu erfahren
                </h1>
                <Link href='/' className='sm:mt-2 mt-1 z-30'>
                    <Button className='bg-amber rounded-full px-8 h-12 hover:bg-amber text-base '>
                        BOOK A TRIP
                    </Button>
                </Link>
            </MaxWidthWrapper>
        </section >
    )
}

export default AboutHero;
