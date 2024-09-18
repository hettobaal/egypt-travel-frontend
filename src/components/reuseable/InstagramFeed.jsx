import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import Image from 'next/image';
import HeadingOne from './HeadingOne';
import Para from './Para';
import { instagramData } from '@/asset/instagramData';

function InstagramFeed() {
    return (
        <MaxWidthWrapper className='flex flex-col gap-y-6 sm:pt-6 pt-6 sm:pb-6 pb-2'>
            <div>
                <h4 className='md:text-3xl text-xl font-semibold text-[#1A1C30] md:text-start text-center'>@Abenteuer Ägypten</h4>
                <span className='sm:mt-3 mt-1 flex lg:items-center items-start  sm:gap-x-2 gap-x-0'>
                    <Image
                        className='sm:mt-4 mt-3 '
                        src='/images/insta.svg'
                        width={25}
                        height={25}
                        loading='lazy'
                        alt='instagram'
                    />
                    <span className='text-center sm:px-0 px-2'>
                        <HeadingOne className='mt-2'>Folgen Sie uns für die
                            {` `} <span className='text-amber'>
                                neuesten Updates.
                            </span>
                        </HeadingOne>
                    </span>

                </span>
                <Para className='sm:mt-4 mt-2 md:text-start text-center'>
                    Lassen Sie mich nun sagen, wer ich als Person bin
                </Para>
            </div>
            <div className='min-w-[300px] overflow-x-auto flex sm:gap-x-4 gap-x-2 cards-scroll'>
                {
                    instagramData?.map((item, index) => {
                        return (
                            <Image
                                key={index}
                                className='sm:rounded-[17.21px] rounded-[10px]'
                                src={item?.image}
                                width={200}
                                height={100}
                                loading='lazy'
                                alt='inta 1'
                            />
                        )
                    })
                }
            </div>
        </MaxWidthWrapper>
    )
}

export default InstagramFeed;
