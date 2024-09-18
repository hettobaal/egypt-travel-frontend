import React from 'react'
import Link from 'next/link';
import { Button } from '../ui/button';
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';

function Hero() {
    return (
        <section className=" w-full sm:h-[90vh] h-[80vh] bg-cover bg-center  bg-no-repeat relative  text-white sm:bg-[url('/images/homeHero.webp')] bg-[url('/images/homeHeroMob.webp')]" >
            <MaxWidthWrapper className='flex flex-col sm:gap-y-6 gap-y-4 justify-center items-center max-w-screen-lg mx-auto h-full   lg:px-0 md:px-8'>
                <h3 className='sm:text-xl text-base font-medium '>
                    Dynamisches Vertragsmanagement
                </h3>
                <h1 className='md:text-[65px] text-2xl leading-tight font-semibold text-center'>
                    Schaffen Sie Erinnerungen Bei Ihrer nächsten Reise
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

export default Hero;
