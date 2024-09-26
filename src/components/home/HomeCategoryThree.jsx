import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import { Button } from '../ui/button'
import HomeCard from './HomeCard'

function HomeCategoryThree({ data }) {
    return (
        <MaxWidthWrapper className='w-full flex flex-col sm:gap-y-8 gap-y-6 justify-center items-center sm:mt-14 mt-10'>
            <div className='w-full flex justify-end items-end'>
                <div className='lg:w-[58%] w-full flex justify-between items-center '>
                    <span >
                        <h2 className='sm:text-2xl text-lg sm:font-semibold font-bold'>
                            {data?.categoryName}
                        </h2>
                    </span>
                    <Link
                        href={`/category/${data?.slug}`}
                        className=' flex justify-end items-end'
                    >
                        <Button className='w-max mx-auto rounded-full bg-navy hover:bg-navy sm:px-10 px-8  sm:h-11 h-10'>
                            View ALL
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='w-full flex flex-wrap justify-center items-center  sm:gap-5 gap-2' >
                <HomeCard subCategory={data?.subCategoryId} />
            </div>
        </MaxWidthWrapper >
    )
}

export default HomeCategoryThree
