"use client"
import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { Card, VisuallyHidden } from '@nextui-org/react';
import HeadingOne from '../reuseable/HeadingOne';
import HeadingThree from '../reuseable/HeadingThree';
import Para from '../reuseable/Para';
import { DialogClose } from '@radix-ui/react-dialog';
import { IoIosClose } from 'react-icons/io';

function AboutVideo() {
    return (
        <MaxWidthWrapper className='max-w-screen-lg sm:py-10 py-6 lg:px-8 md:px-6 sm:px-6 px-4'>
            <Dialog>

                <div className="w-full  relative  ">
                    <Image
                        className='sm:flex hidden'
                        src='/images/about.webp'
                        width={1500}
                        height={1000}
                        alt='about'
                    />
                    <Image
                        className='sm:hidden'
                        src='/images/aboutMob.webp'
                        width={800}
                        height={300}
                        alt='about'
                    />
                    <DialogTrigger>
                        <div className='absolute  md:top-[15%] sm:top-[10%] top-[8%] left-0 right-0 z-30 flex justify-center w-full'>
                            <div className='max-w-max bg-[#FFFFFF54] md:p-2.5 p-1.5 rounded-full'>
                                <div className='bg-white md:p-6 p-4  rounded-full flex justify-center items-center'>
                                    <Image
                                        src='/images/resume.svg'
                                        width={15}
                                        height={15}
                                        alt='about'
                                    />
                                </div>
                            </div>
                        </div>
                    </DialogTrigger>
                    <Card
                        className='sm:-mt-[20%] -mt-[50%] max-w-[900px] md:mx-10 mx-2 lg:px-12 sm:px-4 px-2'
                        shadow='lg'
                        radius='md'
                    >
                        <div className='flex flex-col gap-y-1 md:py-12 py-6  '>

                            <span className='text-center sm:px-0'>
                                <HeadingThree>
                                    über uns
                                </HeadingThree>
                                <HeadingOne className='mt-2'> Unser Engagement,
                                    {` `} <span className='text-amber'>
                                        unsere Vision
                                    </span> {` `}
                                    und unsere Mission,
                                </HeadingOne>
                            </span>
                            <Para className='text-ocean text-center mt-2'>
                                At The Agypten Travel, our foundation is built upon a steadfast commitment to excellence, a visionary approach to travel, a clear mission, and a set of deeply ingrained values. Our commitment drives every aspect of our operations, ensuring that every traveler&apos;s experience exceeds expectations. From meticulously curated itineraries to personalized customer service, we spare no effort in delivering unforgettable journeys.
                            </Para>
                        </div>

                    </Card>
                </div>
                <DialogContent
                    aria-label='DialogContent'
                    className='bg-transparent border-none sm:max-w-[80%] max-w-[98%] sm:p-6 p-2 '
                >
                    <VisuallyHidden>
                        <DialogTitle></DialogTitle>
                    </VisuallyHidden>
                    <div className='relative'>
                        <video src="/video/about.mp4" controls autoPlay></video>
                        <DialogClose className='absolute top-1 right-1'>
                            <IoIosClose size={40} />
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>

        </MaxWidthWrapper >
    )
}

export default AboutVideo;
