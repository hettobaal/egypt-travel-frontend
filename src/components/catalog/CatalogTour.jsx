"use client"
import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingOne from '../reuseable/HeadingOne';
import HeadingThree from '../reuseable/HeadingThree';
import CatalogCards from './CatalogCards';
function CatalogTour({ data }) {

    // console.log("data abc", data);

    return (
        <MaxWidthWrapper className='flex flex-col sm:gap-y-12 gap-y-8 sm:py-14 py-8 px-2' >
            <span className='text-center sm:px-0 px-2'>
                <HeadingThree>Ausgewählte Touren</HeadingThree>
                <HeadingOne className='mt-2'>
                    {data?.subCategoryName}
                </HeadingOne>
            </span>
            {
                data ?
                    <CatalogCards Catalog={data[0]?.tourDetails || []} />
                    :
                    <HeadingThree className='text-center'>No Tour Available</HeadingThree>
            }

        </MaxWidthWrapper>
    )
}

export default CatalogTour
