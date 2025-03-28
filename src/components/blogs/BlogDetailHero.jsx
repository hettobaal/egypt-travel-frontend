import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingOne from '../reuseable/HeadingOne';
import Image from 'next/image';

function BlogDetailHero({ bannerImage }) {
    return (
        <section className='md:mt-[100px] mt-[75px]'>
            <MaxWidthWrapper className='flex flex-col '>
                {/* <div>
                    <div>
                        <span>
                            <time>October 17, 2024</time>
                        </span>
                    </div>
                    <div className='max-w-[768px]'>
                        <HeadingOne className='sm:mt-3 mt-1  sm:text-4xl text-xl'>
                            The Guiding Principles: Steering
                            GetYourGuide Forward
                        </HeadingOne>
                    </div>
                </div> */}
                <div className='max-w-screen-lg mx-auto  sm:mt-10 mt-6'>
                    <Image
                        // src={"/images/blogDetail.webp"}
                        // src={`http://localhost:4000/imageslocal/blogs/${bannerImage}`}
                        src={`https://aegyptenmalanders.de/imageslocal/blogs/${bannerImage}`}
                        // src={`https://aegyptenmalanders.de/imageslocal/blogs/${bannerImage}`}
                        width={1000}
                        height={1000}
                        className='w-full h-full rounded-md'
                        alt='blog detail image'
                    />
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default BlogDetailHero;
