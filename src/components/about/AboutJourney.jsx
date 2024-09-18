import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import HeadingThree from '../reuseable/HeadingThree'
import HeadingOne from '../reuseable/HeadingOne'
import Image from 'next/image'
import Para from '../reuseable/Para'

function AboutJourney() {
    return (
        <MaxWidthWrapper className='max-w-screen-lg sm:py-10 py-6'>
            <span className='text-center sm:px-0 px-2'>
                <HeadingThree>Unsere Geschichte</HeadingThree>
                <HeadingOne className='mt-2'> Unsere Reise durch
                    {` `} <span className='text-amber'>
                        die Zeit
                    </span>
                </HeadingOne>
            </span>
            <main className='flex flex-col sm:gap-y-10 gap-y-8 md:mt-14 mt-2'>
                <div className='flex lg:flex-row flex-col justify-between md:gap-y-8 gap-y-6 gap-x-4 items-center'>
                    <span className='flex flex-col sm:gap-y-3 gap-y-2 max-w-[450px]'>
                        <HeadingOne className='lg:text-start text-center text-amber md:text-4xl sm:text-4xl text-3xl'>
                            2010
                        </HeadingOne>
                        <HeadingOne className='lg:text-start text-center md:text-4xl sm:text-4xl text-3xl'>
                            Der Funke der Inspiration
                        </HeadingOne>
                        <Para className='lg:text-start text-center text-ocean'>
                            Agypten Travell is founded with a vision to revolutionize the travel industry, driven by a passion for exploration and a commitment to unparalleled customer experiences.
                        </Para>
                    </span>
                    <Image
                        src='/images/aj1.webp'
                        width={400}
                        height={100}
                        loading='lazy'
                        alt='journey one'
                    />
                </div>
                <div className='flex lg:flex-row flex-col-reverse justify-between md:gap-y-8 gap-y-6 gap-x-4 items-center'>
                    <Image
                        src='/images/aj2.webp'
                        width={400}
                        height={100}
                        loading='lazy'
                        alt='journey one'
                    />
                    <span className='flex flex-col sm:gap-y-3 gap-y-2 max-w-[450px]'>
                        <HeadingOne className='lg:text-start text-center text-amber md:text-4xl sm:text-4xl text-3xl'>
                            2015
                        </HeadingOne>
                        <HeadingOne className='lg:text-start text-center md:text-4xl sm:text-4xl text-3xl'>
                            Expansion und Innovation
                        </HeadingOne>
                        <Para className='lg:text-start text-center text-ocean'>
                            Agypten Travell is founded with a vision to revolutionize the travel industry, driven by a passion for exploration and a commitment to unparalleled customer experiences.
                        </Para>
                    </span>

                </div>
                <div className='flex lg:flex-row flex-col justify-between md:gap-y-8 gap-y-6 gap-x-4 items-center'>
                    <span className='flex flex-col sm:gap-y-3 gap-y-2 max-w-[450px]'>
                        <HeadingOne className='lg:text-start text-center text-amber md:text-4xl sm:text-4xl text-3xl'>
                            2024
                        </HeadingOne>
                        <HeadingOne className='lg:text-start text-center md:text-4xl sm:text-4xl text-3xl'>
                            Eine neue Ära der Erforschung
                        </HeadingOne>
                        <Para className='lg:text-start text-center text-ocean'>
                            Agypten Travell is founded with a vision to revolutionize the travel industry, driven by a passion for exploration and a commitment to unparalleled customer experiences.
                        </Para>
                    </span>
                    <Image
                        src='/images/aj3.webp'
                        width={400}
                        height={100}
                        loading='lazy'
                        alt='journey one'
                    />
                </div>
            </main>
        </MaxWidthWrapper>
    )
}

export default AboutJourney
