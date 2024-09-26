"use client"
import React, { useState } from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import { Button } from '../ui/button';
import TourCards from '../reuseable/TourCards';
import HeadingOne from '../reuseable/HeadingOne';
import HeadingThree from '../reuseable/HeadingThree';
import TourCardsCarousel from '../reuseable/TourCardsCarousel';

function PopularTour({ popularToursData }) {
    const [showAll, setShowAll] = useState(false);

    const toursToDisplay = showAll ? popularToursData : popularToursData?.slice(0, 4);


    const handleSeeMore = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    return (
        <MaxWidthWrapper className='flex flex-col sm:gap-y-12 gap-y-8 sm:py-14 py-8 px-2' >
            <span className='text-center sm:px-0 px-2'>
                <HeadingThree>Ausgewählte Touren</HeadingThree>
                <HeadingOne className='mt-2'>Die beliebtesten
                    {` `} <span className='text-amber'>
                        Touren in
                    </span> {` `}
                    Ägypten
                </HeadingOne>
            </span>
            <TourCards ToursData={toursToDisplay} />
            {/* <TourCardsCarousel data={popularToursData} /> */}
            <div className='mx-auto md:block hidden'>
                {!showAll ? (
                    <Button
                        onClick={handleSeeMore}
                        className='w-max rounded-full bg-navy hover:bg-navy px-10 h-11'
                    >
                        SEE MORE
                    </Button>
                ) : (
                    <Button
                        onClick={handleShowLess}
                        className='w-max rounded-full bg-navy hover:bg-navy px-10 h-11'
                    >
                        SHOW LESS
                    </Button>
                )}
            </div>
        </MaxWidthWrapper >
    )
}

export default PopularTour;
