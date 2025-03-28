import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import { Button } from '../ui/button';
import TourCards from '../reuseable/TourCards';
import { PopularTourCards } from '@/asset/TourCardsData';
import HeadingOne from '../reuseable/HeadingOne';
import HeadingThree from '../reuseable/HeadingThree';
function CategoryRelatedTour() {
    return (
        <MaxWidthWrapper className='flex flex-col sm:gap-y-12 gap-y-8 sm:pb-7 sm:pt-2 pt-1 pb-8 px-2' >
            <span className='text-center sm:px-0 px-2'>
                <HeadingThree>Ausgewählte Touren</HeadingThree>
                <HeadingOne className='mt-2'>Die beliebtesten
                    {` `} <span className='text-amber'>
                        Touren in
                    </span> {` `}
                    Ägypten
                </HeadingOne>
            </span>
            <TourCards data={PopularTourCards} />
            <Button className='w-max mx-auto rounded-full bg-navy hover:bg-navy px-10 h-11'>
                SEE MORE
            </Button>
        </MaxWidthWrapper>
    )
}

export default CategoryRelatedTour;
