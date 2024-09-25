import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import HeadingThree from '../reuseable/HeadingThree'
import Para from '../reuseable/Para'
import { TbClockCancel } from 'react-icons/tb'
import { IoPersonOutline } from 'react-icons/io5'
import { Calendar } from 'lucide-react'
import { MdPayment } from 'react-icons/md'
import { Button } from '../ui/button'

function BookingDetail({ data }) {
    console.log("booking data", data);

    return (
        <MaxWidthWrapper className='sm:mt-8 mt-8  lg:px-10 md:px-8 sm:px-6 px-2'>
            <div className='lg:w-[60%] w-full flex flex-col gap-y-4 border-navy rounded-[18px] border-2  pt-4'>
                <div className='md:px-6 px-3'>
                    <HeadingThree className='text-[#131313] sm:text-[22px] font-semibold'>
                        {data?.title}
                    </HeadingThree>
                    <Para className='mt-1 lg:w-[85%] w-full'>
                        {data?.description}
                    </Para>
                </div>
                <div className=' md:px-6 px-3'>
                    <div className='lg:w-[60%] w-full  flex justify-between items-center'>
                        <span className='flex gap-x-2'>
                            <TbClockCancel size={25} />
                            <Para className='font-semibold text-ocean'>
                                {data?.duration} hours
                            </Para>
                        </span>
                        <span className='flex gap-x-2'>
                            <IoPersonOutline size={25} />
                            <Para className='font-semibold text-ocean'>
                                Guide : English
                            </Para>
                        </span>
                    </div>
                    <div className='border-t-2 border-b-2 border-[#e0e0e0] mt-6 py-2'>
                        <Para className='font-semibold text-ocean' >
                            Starting Time
                        </Para>
                        <Para className='font-semibold text-ocean'>
                            8.30 AM
                        </Para>

                    </div>
                    <div className='flex md:flex-row flex-col gap-y-6 justify-between md:items-center items-start mt-6'>
                        <div className='flex md:flex-row flex-col  gap-x-6  items-start'>
                            <div className='lg:w-[60%] w-full  flex-col gap-y-6'>
                                <span className='flex gap-x-2'>
                                    <Calendar size={28} strokeWidth={1.25} />
                                    <Para className='text-ocean font-semibold'>
                                        Cancel before 8:30 AM on May 13 for a full refund
                                    </Para>
                                </span>
                                <span className='md:flex hidden gap-x-2 mt-2'>
                                    <MdPayment size={28} />
                                    <Para className='text-ocean font-semibold'>
                                        You can {` `}
                                        <span className='text-amber underline-offset-1'>reserve now & pay letter</span>
                                        {` `}
                                        with this activity option
                                    </Para>
                                </span>
                            </div>
                            <div className=' flex  justify-between items-center md:mt-0 mt-4'>
                                <span className='flex flex-col gap-y-2'>
                                    <Para className='text-ocean font-semibold whitespace-nowrap'>
                                        Price breakdown
                                    </Para>
                                    <Para >
                                        Adult 2 x $24.70
                                    </Para>
                                </span>
                                <div className='flex md:hidden'>
                                    <Para >
                                        $30.19
                                    </Para>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex hidden'>
                            <Para >
                                $30.19
                            </Para>
                        </div>
                        <span className='flex md:hidden gap-x-2'>
                            <MdPayment size={28} />
                            <Para className='text-ocean font-semibold'>
                                You can {` `}
                                <span className='text-amber underline-offset-1'>reserve now & pay letter</span>
                                {` `}
                                with this activity option
                            </Para>
                        </span>
                    </div>
                </div>
                <div className=' bg-[#e6ebef]  flex justify-between  items-center gap-x-2  py-4 md:px-6 px-3 rounded-b-[18px]  '>
                    <span>
                        <Para>
                            Total price
                        </Para>
                        <h6 className='text-amber font-semibold md:text-2xl text-lg'>
                            $50.40
                        </h6>
                        <Para>
                            $ 52 {` `}
                            <span className='text-amber'>
                                -5%
                            </span>
                        </Para>
                        <Para>
                            All taxes & fee included
                        </Para>

                    </span>
                    <span>
                        <Button className='mt-4 px-10 rounded-full bg-navy hover:bg-navy h-11'>
                            BOOK NOW
                        </Button>
                    </span>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default BookingDetail
