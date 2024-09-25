import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import HeadingOne from '../reuseable/HeadingOne'
import Image from 'next/image'
import DetailModal from './DetailModal'
import DetailMobileCarousel from './DetailMobileCarousel'

function DetailHero({ data }) {
    
    return (

        <section className='md:mt-[100px] mt-[70px]'>
            <MaxWidthWrapper>
                <div className='md:flex hidden flex-col sm:gap-y-2.5 gap-y-1'>
                    <div>
                        <HeadingOne className='md:text-4xl sm:text-4xl text-2xl'>
                            {data?.title}
                        </HeadingOne>
                    </div>
                </div>
                <div className='md:flex hidden gap-x-2 mt-6'>
                    <span>
                        <Image
                            src='/images/d1.webp'
                            width={600}
                            height={600}
                            loading='lazy'
                            alt='detail'
                            className='h-full w-full object-cover'
                        />
                    </span>
                    <span>
                        <Image
                            src='/images/d2.webp'
                            width={500}
                            height={200}
                            loading='lazy'
                            alt='detail'
                            className='h-full w-full object-cover'
                        />
                    </span>
                    <span className='flex flex-col gap-y-2'>
                        <Image
                            src='/images/d3.webp'
                            width={600}
                            height={200}
                            loading='lazy'
                            alt='detail'
                            className='h-full w-full object-cover'
                        />
                        <span className='relative'>
                            <Image
                                src='/images/d4.webp'
                                width={600}
                                height={200}
                                loading='lazy'
                                alt='detail'
                                className='h-full w-full object-cover '
                            />
                            <DetailModal />
                        </span>
                    </span>

                </div>
            </MaxWidthWrapper>
            <div className='md:hidden  '>
                <DetailMobileCarousel />
            </div>
            <MaxWidthWrapper>
                <div className='md:hidden flex  flex-col sm:gap-y-2.5 gap-y-1 mt-4'>
                    <div>
                        <HeadingOne className='md:text-4xl sm:text-4xl text-2xl'>
                            Hurghada: Dolphin Watching Boat Tour with Snorkeling & Lunch
                        </HeadingOne>
                    </div>
                </div>
            </MaxWidthWrapper>

        </section>
    )
}

export default DetailHero
