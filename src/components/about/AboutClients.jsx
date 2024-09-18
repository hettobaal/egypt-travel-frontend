import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingOne from '../reuseable/HeadingOne';
import Para from '../reuseable/Para';

function AboutClients() {
    return (
        <MaxWidthWrapper className='max-w-screen-xl  sm:pt-4 sm:pb-6 pb-6 pt-2 grid lg:grid-cols-4 grid-cols-2 gap-4'>
            <div className='bg-ice flex justify-center items-center py-8 px-4 rounded-[10px]'>
                <span>
                    <HeadingOne className='text-navy lg:text-start text-center'>
                        95%
                    </HeadingOne>
                    <Para className='text-ocean whitespace-nowrap'>
                        Client Satisfaction
                    </Para>
                </span>
            </div>
            <div className='bg-ice flex justify-center items-center py-8 px-4 rounded-[10px] '>
                <span>
                    <HeadingOne className='text-navy lg:text-start text-center'>
                        55+
                    </HeadingOne>
                    <Para className='text-ocean  whitespace-nowrap'>
                        Destinations
                    </Para>
                </span>
            </div>
            <div className='bg-ice flex justify-center items-center py-8 px-4 rounded-[10px] '>
                <span>
                    <HeadingOne className='text-navy lg:text-start text-center '>
                        500+
                    </HeadingOne>
                    <Para className='text-ocean whitespace-nowrap'>
                        Tours and Activities
                    </Para>
                </span>
            </div>
            <div className='bg-ice flex justify-center items-center py-8 px-4 rounded-[10px] '>
                <span>
                    <HeadingOne className='text-navy lg:text-start text-center'>
                        24/7
                    </HeadingOne>
                    <Para className='text-ocean whitespace-nowrap'>
                        Customer Support
                    </Para>
                </span>
            </div>
        </MaxWidthWrapper>
    )
}

export default AboutClients;
