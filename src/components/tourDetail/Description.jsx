import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingThree from '../reuseable/HeadingThree';
import MoreDescription from './MoreDescription';
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';

function Description({ data }) {
    console.log("details", data);


    return (
        <MaxWidthWrapper className='flex flex-col sm:mt-16 mt-10'>
            {/* first */}
            <div className=' border-t-2 border-b-2 border-[#e0e0e0] sm:py-6 py-4'>
                <div className='md:w-[70%] w-full flex gap-x-[205px] lg:flex-row flex-col '>
                    <span>
                        <HeadingThree className='text-xl font-semibold'>
                            Highlights
                        </HeadingThree>
                    </span>
                    <span className='max-w-screen-sm'>
                        <ul className='list-disc flex flex-col gap-y-2 lg:pl-0 lg:mt-0 mt-2  md:pl-8 sm:pl-6 pl-4'>
                            {
                                data?.highlights?.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className='text-base font-normal text-ocean'>
                                            {item?.point}
                                        </li>
                                    )
                                })

                            }
                        </ul>
                    </span>
                </div>
            </div>
            {/* Second */}
            <div className='border-b-2 border-[#e0e0e0] sm:py-6 py-4'>
                <div className='md:w-[70%] w-full flex gap-x-[142px] lg:flex-row flex-col '>
                    <span>
                        <HeadingThree className='text-xl font-semibold whitespace-nowrap '>
                            Full description
                        </HeadingThree>
                    </span>
                    <MoreDescription data={data} />
                </div>
            </div>
            {/* third */}
            <div className='border-b-2 border-[#e0e0e0] sm:py-6 py-4'>
                <div className='md:w-[75%] w-full flex gap-x-[195px] lg:flex-row flex-col '>
                    <span>
                        <HeadingThree className='text-xl font-semibold'>
                            Includes
                        </HeadingThree>
                    </span>
                    <span className='lg:mt-0 mt-2'>
                        <ul className='flex flex-col gap-y-2'>
                            {
                                data?.includes?.map((item, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className='flex items-center gap-x-2'
                                        >
                                            <span>
                                                <IoIosCheckmarkCircleOutline size={20} className='text-amber' />
                                            </span>
                                            <li className='text-base font-normal text-ocean'>
                                                {item?.point}
                                            </li>
                                        </span>
                                    )
                                })
                            }
                        </ul>
                    </span>
                </div>
            </div>
            {/* Fourth */}
            <div className=' border-b-2 border-[#e0e0e0] sm:py-6 py-4'>
                <div className='md:w-[70%] w-full flex gap-x-[92px] lg:flex-row flex-col '>
                    <span>
                        <HeadingThree className='lg:mt-0 mt-2 text-xl font-semibold whitespace-nowrap'>
                            Important information
                        </HeadingThree>
                    </span>
                    <span className='max-w-screen-sm'>
                        <HeadingThree>
                            {data?.heading}
                        </HeadingThree>
                        <ul className='mt-2 list-disc flex flex-col gap-y-2 lg:pl-0   md:pl-8 sm:pl-6 pl-4'>

                            {
                                data?.importantInformation?.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className='text-base font-normal text-ocean'>
                                            {item?.point}
                                        </li>
                                    )
                                })
                            }

                            {/* */}
                        </ul>
                    </span>
                </div>
            </div>

        </MaxWidthWrapper >
    )
}

export default Description;
