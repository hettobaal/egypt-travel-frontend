import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import HeadingThree from '../reuseable/HeadingThree'
import HeadingOne from '../reuseable/HeadingOne'
import { IoStar } from 'react-icons/io5'
import Para from '../reuseable/Para'
import { LuBadgeCheck } from 'react-icons/lu'
import Image from 'next/image'
import DetailModal from './DetailModal'
import DetailMobileCarousel from './DetailMobileCarousel'

function DetailHero() {
    return (

        <section className='md:mt-[110px] mt-[70px]'>
            <MaxWidthWrapper>
                <div className='md:flex hidden flex-col sm:gap-y-2.5 gap-y-1'>
                    <div>
                        <HeadingThree className='font-medium'>Water Activity</HeadingThree>
                    </div>
                    <div>
                        <HeadingOne className='md:text-4xl sm:text-4xl text-2xl'>
                            Hurghada: Dolphin Watching Boat Tour with Snorkeling & Lunch
                        </HeadingOne>
                    </div>
                    <div className='flex gap-x-3 flex-wrap items-center'>
                        <span className='flex gap-x-3 '>
                            <span className='flex gap-x-1'>
                                {
                                    Array.from({ length: 5 }, (_, index) => (
                                        <IoStar key={index} color='#FFBB4A' size={20} />
                                    ))
                                }
                            </span>
                            <span >
                                <Para className='text-ocean font-medium'>
                                    46/5
                                </Para>
                            </span>
                            <span>
                                <Para className='text-amber font-semibold'>
                                    9990 reviews
                                </Para>
                            </span>
                        </span>
                        <span className='flex gap-x-3 flex-wrap'>
                            <span className='flex gap-x-2 items-center'>
                                <LuBadgeCheck />
                                <Para className='text-ocean font-medium'>
                                    Certified by GetYourGuide
                                </Para>
                            </span>
                            <span >
                                <Para className='text-ocean font-medium'>
                                    Activity provider:
                                </Para>
                            </span>
                            <span>
                                <Para className='text-amber font-semibold'>
                                    Egyptra Travel Services
                                </Para>
                            </span>
                        </span>
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
                        <HeadingThree className='font-medium'>Water Activity</HeadingThree>
                    </div>
                    <div>
                        <HeadingOne className='md:text-4xl sm:text-4xl text-2xl'>
                            Hurghada: Dolphin Watching Boat Tour with Snorkeling & Lunch
                        </HeadingOne>
                    </div>
                    <div className='flex gap-x-3 flex-wrap items-center'>
                        <span className='flex gap-x-3 '>
                            <span className='flex gap-x-1'>
                                {
                                    Array.from({ length: 5 }, (_, index) => (
                                        <IoStar key={index} color='#FFBB4A' size={20} />
                                    ))
                                }
                            </span>
                            <span >
                                <Para className='text-ocean font-medium'>
                                    46/5
                                </Para>
                            </span>
                            <span>
                                <Para className='text-amber font-semibold'>
                                    9990 reviews
                                </Para>
                            </span>
                        </span>
                        <span className='flex gap-x-3 flex-wrap'>
                            <span className='flex gap-x-2 items-center'>
                                <LuBadgeCheck />
                                <Para className='text-ocean font-medium'>
                                    Certified by GetYourGuide
                                </Para>
                            </span>
                            <span >
                                <Para className='text-ocean font-medium'>
                                    Activity provider:
                                </Para>
                            </span>
                            <span>
                                <Para className='text-amber font-semibold'>
                                    Egyptra Travel Services
                                </Para>
                            </span>
                        </span>
                    </div>
                </div>
            </MaxWidthWrapper>

        </section>
    )
}

export default DetailHero
