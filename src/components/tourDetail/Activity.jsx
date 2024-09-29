import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import Para from '../reuseable/Para'
import HeadingOne from '../reuseable/HeadingOne'
import HeadingThree from '../reuseable/HeadingThree'
import { RiCalendarCheckLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { TbClockCancel } from "react-icons/tb";
import { FaArrowTrendDown } from 'react-icons/fa6'
import { IoPersonOutline } from 'react-icons/io5'
import DiscountCard from './DiscountCard'
function Activity({ data }) {
    return (
        <MaxWidthWrapper className='flex lg:flex-row flex-col justify-between gap-x-16 sm:gap-y-10 gap-y-6 sm:mt-8 mt-4'>
            <div className='lg:w-[60%] w-full flex flex-col gap-y-3'>
                <Para>
                    {data?.description}
                </Para>
                <div className='flex flex-col gap-y-3'>
                    <span>
                        <HeadingOne className='md:text-4xl sm:text-3xl text-2xl'>
                            About this activity
                        </HeadingOne>
                    </span>
                    <span className='flex gap-x-2 items-start'>
                        <RiCalendarCheckLine size={25} className='mt-1' />
                        <div>
                            <HeadingThree >
                                Free cancellation
                            </HeadingThree>
                            <Para>
                                Cancel up to 24 hours in advance for a full refund
                            </Para>
                        </div>
                    </span>
                    <span className='flex gap-x-2 items-start'>
                        <MdPayment size={25} className='mt-1' />
                        <div>
                            <HeadingThree >
                                Reserve now & pay later
                            </HeadingThree>
                            <Para>
                                Keep your travel plans flexible — book your spot and pay nothing today
                            </Para>
                        </div>
                    </span>
                    <span className='flex gap-x-2 items-start'>
                        <TbClockCancel size={25} className='mt-1' />
                        <div>
                            <HeadingThree >
                                Duration {data?.duration} hours
                            </HeadingThree>
                            <Para>
                                Check availability to see starting times.
                            </Para>
                        </div>
                    </span>
                    <span className='flex gap-x-2 items-start'>
                        <FaArrowTrendDown size={25} className='mt-1' />
                        <div>
                            <HeadingThree >
                                Skip the line through a separate entrance
                            </HeadingThree>
                        </div>
                    </span>
                    <span className='flex gap-x-2 items-start'>
                        <IoPersonOutline size={25} className='mt-1' />
                        <div>
                            <HeadingThree >
                                Live tour guide
                            </HeadingThree>
                            <Para>
                                English, German
                            </Para>
                        </div>
                    </span>
                </div>
            </div>
            <DiscountCard data={data}/>
        </MaxWidthWrapper>
    )
}

export default Activity
