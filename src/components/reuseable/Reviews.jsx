import React from 'react'
import HeadingOne from './HeadingOne'
import MaxWidthWrapper from './MaxWidthWrapper'
import { IoStar } from 'react-icons/io5'
import ReviewCarousel from './ReviewCarousel'

function Reviews() {
    return (
        <MaxWidthWrapper className='flex flex-col sm:gap-y-12 gap-y-8 sm:pt-6 pt-3  sm:pb-5 pb-4 ' >
            <div className='text-center sm:px-0 px-2'>
                <div className='flex justify-center items-center'>
                    <span className='sm:flex hidden  gap-x-1 items-center justify-center'>
                        {
                            Array.from({ length: 5 }, (_, index) => (
                                <IoStar key={index} color='#FFB623' size={25} />
                            ))
                        }
                    </span>
                    <span className='sm:hidden flex gap-x-1 items-center justify-center'>
                        {
                            Array.from({ length: 5 }, (_, index) => (
                                <IoStar key={index} color='#FFB623' size={20} />
                            ))
                        }
                    </span>
                    <h6 className='text-base font-medium ps-2'>
                        4.9 rating of 39 reviews
                    </h6>
                </div>
                <HeadingOne className='mt-2'>Tausende
                    {` `} <span className='text-amber'>
                        begeisterte
                    </span> {` `}
                    Kunden
                </HeadingOne>
            </div>
            <ReviewCarousel />
        </MaxWidthWrapper>
    )
}

export default Reviews
