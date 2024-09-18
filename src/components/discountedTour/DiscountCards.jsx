import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import TourCards from '../reuseable/TourCards';
import { PopularTourCards } from '@/asset/TourCardsData';

function DiscountCards() {
    return (
        <MaxWidthWrapper className='sm:py-16 py-8'>
            <TourCards data={PopularTourCards} />
        </MaxWidthWrapper>
    )
}

export default DiscountCards;
