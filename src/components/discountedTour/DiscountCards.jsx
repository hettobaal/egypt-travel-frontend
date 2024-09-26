import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import DiscountTourCard from './DiscountTourCard';

function DiscountCards({ data }) {
    return (
        <MaxWidthWrapper className='sm:py-16 py-8'>
            <DiscountTourCard ToursData={data} />
        </MaxWidthWrapper>
    )
}

export default DiscountCards;
