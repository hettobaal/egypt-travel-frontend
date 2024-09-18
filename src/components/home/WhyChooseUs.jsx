import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import Image from 'next/image'
import HeadingThree from '../reuseable/HeadingThree'
import { Button } from '../ui/button'
import HeadingOne from '../reuseable/HeadingOne'

function WhyChooseUs() {
    return (
        <MaxWidthWrapper className='flex  lg:flex-row flex-col-reverse items-center  sm:pb-10 pt-2 pb-6  lg:gap-x-16 gap-x-6'>
            <Button className='mt-6 lg:hidden w-max  rounded-full bg-navy hover:bg-navy px-10 h-11'>
                READ MORE
            </Button>
            <div className='lg:w-1/2 w-full box-border  justify-center items-center mx-auto  '>
                <Image
                    src='/images/choose.webp'
                    width={700}
                    height={300}
                    loading='lazy'
                    alt='Why Choose Us'
                />
            </div>
            <div className='lg:w-1/2 w-full flex flex-col '>
                <HeadingThree>
                    Unsere Vorteilslisten
                </HeadingThree>
                <span className='sm:pt-4 sm:pb-10 pb-8'>
                    <HeadingOne className='mt-2'>Warum uns
                        {` `} <span className='text-amber'>
                            Wählen
                        </span>
                    </HeadingOne>
                    <ol className='sm:mt-4 mt-2 flex flex-col gap-y-2 sm:ps-4 ps-2 list-disc list-inside text-sm' >
                        <li className='text-[#313131] text-base font-normal '>

                            A quality standard service.</li>
                        <li className='text-[#313131] text-base font-normal'> Affordable prices.</li>
                        <li className='text-[#313131] text-base font-normal'> Free cancellation.</li>
                        <li className='text-[#313131] text-base font-normal'>Unforgettable experience.</li>
                        <li className='text-[#313131] text-base font-normal'>Our team is well trained & Can fulfill all your needs.</li>

                    </ol>
                </span>
                <Button className='lg:block hidden w-max  rounded-full bg-navy hover:bg-navy px-10 h-11'>
                    READ MORE
                </Button>
            </div>
        </MaxWidthWrapper>
    )
}

export default WhyChooseUs
