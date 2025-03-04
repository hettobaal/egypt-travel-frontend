import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingOne from '../reuseable/HeadingOne';
import HeadingThree from '../reuseable/HeadingThree';
import HomeCard from '../home/HomeCard';
function CategoryTour({ data }) {
    return (
        <MaxWidthWrapper className='flex flex-col sm:gap-y-12 gap-y-8 sm:py-14 py-8 px-2' >
            <span className='text-center sm:px-0 px-2'>
                <HeadingThree>Ausgewählte Touren</HeadingThree>
                <HeadingOne className='mt-2'>
                    {data?.categoryName}
                </HeadingOne>
            </span>
            <div className='w-full flex flex-wrap justify-center items-center  sm:gap-5 gap-2'>
                <HomeCard subCategory={data?.subCategoryId} />
            </div>
        </MaxWidthWrapper>
    )
}

export default CategoryTour;
