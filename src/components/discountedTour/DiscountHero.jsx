import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
function DiscountHero() {
    return (
        <section className=" w-full sm:h-[90vh] h-[80vh] bg-cover bg-center  bg-no-repeat relative  text-white sm:bg-[url('/images/discountHero.webp')] bg-[url('/images/discountHeroMob.webp')]" >
            <MaxWidthWrapper className='flex flex-col sm:gap-y-6 gap-y-4 justify-center items-center max-w-screen-lg mx-auto h-full   lg:px-0 md:px-8'>
                <h3 className='sm:text-xl text-base font-medium '>
                    Ermäßigte Touren
                </h3>
                <h1 className='md:text-[65px] text-2xl leading-tight font-semibold text-center'>
                    Muss Ermäßigte Touren
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

export default DiscountHero;
