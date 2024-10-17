import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingOne from '../reuseable/HeadingOne';
import BlogCards from './BlogCards';

function RelatedBlogs() {
    return (
        <>
            <MaxWidthWrapper className='mt-6'>
                <HeadingOne className='md:text-4xl sm:text-3xl text-2xl'>
                    Verwandter Blogbeitrag
                </HeadingOne>
            </MaxWidthWrapper>
            <div className='sm:mt-6 mt-4'>
                <BlogCards />
            </div>
        </>
    )
}

export default RelatedBlogs;
