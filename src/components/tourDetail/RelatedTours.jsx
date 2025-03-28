import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingThree from '../reuseable/HeadingThree';
import HeadingOne from '../reuseable/HeadingOne';
import TourCards from '../reuseable/TourCards';
import TourCardsCarousel from '../reuseable/TourCardsCarousel';

function RelatedTours({ data }) {


    return (
        <MaxWidthWrapper className='flex flex-col sm:gap-y-12 gap-y-8 sm:py-14 py-8 px-2' >
            <span className='text-center sm:px-0 px-2'>
                <HeadingThree>entsprechende Touren</HeadingThree>
                <HeadingOne className='mt-2'>Das könnte
                    {` `} <span className='text-amber'>
                        Ihnen auch
                    </span> {` `}
                    gefallen
                </HeadingOne>
            </span>
            <TourCards ToursData={data} />
            <TourCardsCarousel data={data} />
        </MaxWidthWrapper>
    )
}

export default RelatedTours;
