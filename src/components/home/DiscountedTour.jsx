import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import { Button } from '../ui/button';
import TourCards from '../reuseable/TourCards';
import HeadingOne from '../reuseable/HeadingOne';
import HeadingThree from '../reuseable/HeadingThree';
import Link from 'next/link';
import TourCardsCarousel from '../reuseable/TourCardsCarousel';

function DiscountedTour({ DiscountedTours }) {
    const initialTours = DiscountedTours?.data?.slice(0, 4);
    return (
        <MaxWidthWrapper className='flex flex-col sm:gap-y-12 gap-y-8 sm:pt-20 pt-12  sm:pb-5 pb-4 px-2' >
            <span className='text-center sm:px-0 px-2'>
                <HeadingThree>Ermäßigte Touren</HeadingThree>
                <HeadingOne className='mt-2'>Muss
                    {` `} <span className='text-amber'>
                        Ermäßigte
                    </span> {` `}
                    Touren
                </HeadingOne>
            </span>
            <TourCards ToursData={initialTours} />
            <TourCardsCarousel data={DiscountedTours} />
            <Link
                className='mx-auto'
                href="/discounted-tours"
            >
                <Button className='w-max  rounded-full bg-navy hover:bg-navy px-10 h-11'>
                    SEE MORE
                </Button>
            </Link>
        </MaxWidthWrapper >
    )
}

export default DiscountedTour
