import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import { Button } from '../ui/button';
import TourCards from '../reuseable/TourCards';
import { PopularTourCards } from '@/asset/TourCardsData';
import HeadingOne from '../reuseable/HeadingOne';
import HeadingThree from '../reuseable/HeadingThree';
function HomeSellingTour() {
    return (
        <MaxWidthWrapper className='flex flex-col sm:gap-y-12 gap-y-8 sm:py-14 py-8 px-2' >
            <span className='text-center sm:px-0 px-2'>
                <HeadingThree>Am meisten verkauft</HeadingThree>
                <HeadingOne className='mt-2'>Meistverkaufte
                    {` `} <span className='text-amber'>
                        Touren
                    </span>
                </HeadingOne>
            </span>
            <TourCards data={PopularTourCards} />
            <Button className='w-max mx-auto rounded-full bg-navy hover:bg-navy px-10 h-11'>
                SEE MORE
            </Button>
        </MaxWidthWrapper>
    )
}

export default HomeSellingTour;
