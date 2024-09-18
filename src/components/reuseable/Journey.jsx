import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import Image from 'next/image';
import Para from './Para';
import Subscribe from './Subscribe';

function Journey() {
    return (
        <MaxWidthWrapper className='w-full max-w-screen-lg flex md:flex-row  flex-col sm:py-10 py-6'>
            <div className='md:w-[46%] '>
                <Image
                    className='md:block hidden rounded-l-[25px]  '
                    src='/images/journey.webp'
                    width={600}
                    height={400}
                    loading='lazy'
                    alt='journey'
                />
                <Image
                    className='md:hidden'
                    src='/images/journeyMob.webp'
                    width={1000}
                    height={400}
                    loading='lazy'
                    alt='journey'
                />

            </div>
            <div className='md:w-[54%] md:mx-0 mx-auto  flex flex-col justify-center md:items-start items-center gap-y-4  bg-navy md:rounded-r-[25px] md:rounded-b-[0px] rounded-b-[16px] md:-ms-1 md:-mt-0 -mt-1 sm:px-6 px-3 md:py-0 py-8 md:text-start text-center'>
                <h2 className='text-white text-3xl font-semibold'>Ihre Reise beginnt hier</h2>
                <Para className='text-white'>
                    Sign up now for travel tips, personalized itineraries, and vacation inspiration straight to your inbox.
                </Para>
                <Subscribe />
            </div>
        </MaxWidthWrapper>
    )
}

export default Journey;
