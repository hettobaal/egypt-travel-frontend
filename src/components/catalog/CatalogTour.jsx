import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import { Button } from '../ui/button';
import HeadingOne from '../reuseable/HeadingOne';
import HeadingThree from '../reuseable/HeadingThree';
import { CatalogData } from '@/asset/catalogData';
import CatalogCards from './CatalogCards';
function CatalogTour() {

    return (
        <MaxWidthWrapper className='flex flex-col sm:gap-y-12 gap-y-8 sm:py-14 py-8 px-2' >
            <span className='text-center sm:px-0 px-2'>
                <HeadingThree>Ausgewählte Touren</HeadingThree>
                <HeadingOne className='mt-2'>
                    Bootsausfluge
                    {/* {data?.category} */}
                    {` `}
                    {/* <span className='text-amber'>
                    Touren in
                </span> {` `}
                Ägypten */}
                </HeadingOne>
            </span>
            <CatalogCards data={CatalogData} />
            <Button className='w-max mx-auto rounded-full bg-navy hover:bg-navy px-10 h-11'>
                SEE MORE
            </Button>
        </MaxWidthWrapper>
    )
}

export default CatalogTour
