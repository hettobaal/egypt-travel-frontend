import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingThree from '../reuseable/HeadingThree';
import HeadingOne from '../reuseable/HeadingOne';
import { Button } from '../ui/button';
import Link from 'next/link';
import HomeCard from './HomeCard';

function HomeCategoryOne({ data }) {
  
    return (
        <MaxWidthWrapper className='lg:px-10 md:px-8 sm:px-6 px-4'>
            <span className='text-center sm:px-0 px-2'>
                <HeadingThree>Featured tours</HeadingThree>
                <HeadingOne className='mt-2'> Unsere
                    {` `} <span className='text-amber'>
                        Beliebtesten
                    </span> {` `}
                    Kategorien
                </HeadingOne>
            </span>
            {

                data?._id &&
                <div className='w-full flex flex-col sm:gap-y-8 gap-y-6 justify-center items-center sm:mt-10 mt-8'>
                    <div className='w-full flex justify-end items-end'>
                        <div className='lg:w-[58%] w-full flex justify-between items-center '>
                            <span >
                                <h2 className='sm:text-2xl text-lg sm:font-semibold font-bold'>{data?.categoryName}
                                </h2>
                            </span>
                            <Link
                                prefetch={false}
                                href={`/category/${data?.slug}`}
                                className=' flex justify-end items-end'
                            >
                                <Button className='w-max mx-auto rounded-full bg-navy hover:bg-navy sm:px-10 px-8  sm:h-11 h-10'>
                                    View ALL
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap justify-center items-center  sm:gap-5 gap-2'>
                        {
                            data?.subCategoryId?.length ?
                                <HomeCard subCategory={data?.subCategoryId} />
                                :
                                <HeadingThree className='text-center'>No SubCategory Available</HeadingThree>
                        }
                    </div>
                </div>
            }



        </MaxWidthWrapper >

    )
}

export default HomeCategoryOne;
