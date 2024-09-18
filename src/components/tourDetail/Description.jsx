import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingThree from '../reuseable/HeadingThree';
import MoreDescription from './MoreDescription';
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';

function Description() {
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
                            <li className='text-base font-normal text-ocean'>
                                Have a fantastic cruise experience with breathtaking views of the Red Sea
                            </li>
                            <li className='text-base font-normal text-ocean'>
                                Go snorkeling at two of the best coral reef locations in the middle of the sea
                            </li>
                            <li className='text-base font-normal text-ocean'>
                                Engage in fun activities like banana boat and tablet watersports on a speedboat
                            </li>
                            <li className='text-base font-normal text-ocean'>
                                Be welcomed by a friendly crew. Savor the taste of a buffet lunch and drinks
                            </li>
                            <li className='text-base font-normal text-ocean'>
                                Embark on a voyage to observe, search, swim, or snorkel with the lovely dolphins
                            </li>
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
                    <MoreDescription />
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
                            <span className='flex items-center gap-x-2'>
                                <span>
                                    <IoIosCheckmarkCircleOutline size={20} className='text-amber' />
                                </span>                                <li className='text-base font-normal text-ocean'>
                                    Pickup and drop-off
                                </li>
                            </span>
                            <span className='flex items-center gap-x-2'>
                                <span>
                                    <IoIosCheckmarkCircleOutline size={20} className='text-amber' />
                                </span>                                <li className='text-base font-normal text-ocean'>
                                    Air-conditioned transportation
                                </li>
                            </span>
                            <span className='flex items-center gap-x-2'>
                                <span>
                                    <IoIosCheckmarkCircleOutline size={20} className='text-amber' />
                                </span>
                                <li className='text-base font-normal text-ocean'>
                                    Private transfer (if option selected)
                                </li>
                            </span>
                            <span className='flex items-center gap-x-2'>
                                <span>
                                    <IoIosCheckmarkCircleOutline size={20} className='text-amber' />
                                </span>
                                <li className='text-base font-normal text-ocean'>
                                    Boat cruise
                                </li>
                            </span>
                            <span className='flex items-center gap-x-2'>
                                <span>
                                    <IoIosCloseCircleOutline size={20} />
                                </span>
                                <li className='text-base font-normal text-ocean'>
                                    Tourist tax (2.50 $€£ or 125 EGP per adult or child to be paid on the day)
                                </li>
                            </span>
                            <span className='flex items-center gap-x-2'>
                                <span>
                                    <IoIosCloseCircleOutline size={20} />
                                </span>
                                <li className='text-base font-normal text-ocean'>
                                    Pickup and drop-off from Makadi Bay, Sahl Hasheesh, and El Gouna
                                </li>
                            </span>
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
                            What to bring
                        </HeadingThree>
                        <ul className='mt-2 list-disc flex flex-col gap-y-2 lg:pl-0   md:pl-8 sm:pl-6 pl-4'>
                            <li className='text-base font-normal text-ocean'>
                                Towel
                            </li>
                        </ul>
                        <HeadingThree className='mt-2'>
                            Know before you go
                        </HeadingThree>
                        <ul className='list-disc flex flex-col gap-y-2 lg:pl-0  mt-2  md:pl-8 sm:pl-6 pl-4'>
                            <li className='text-base font-normal text-ocean'>
                                Seeing and swimming with dolphins is a possibility for 95% of our customers, particularly during good weather.
                            </li>
                        </ul>
                    </span>
                </div>
            </div>

        </MaxWidthWrapper>
    )
}

export default Description;
