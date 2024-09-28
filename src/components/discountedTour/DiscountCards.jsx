import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import DiscountTourCard from './DiscountTourCard';
import HeadingThree from '../reuseable/HeadingThree';

function DiscountCards({ data }) {

    return (
        <MaxWidthWrapper className='sm:py-16 py-8'>
            {
                data?.tourId?.length ?
                    <DiscountTourCard ToursData={data?.tourId} />
                    :
                    <HeadingThree className='text-center'>
                        No Tours Found
                    </HeadingThree>
            }
        </MaxWidthWrapper>
    )
}

export default DiscountCards;
