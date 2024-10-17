import React from 'react'
import BlogHero from '@/components/blogs/BlogHero';
import BlogCards from '@/components/blogs/BlogCards';
import Journey from '@/components/reuseable/Journey';
import { getBlogs } from '@/lib/siteApis';

async function page() {

    const blogs = await getBlogs()
    console.log("blogs", blogs);

    return (
        <>
            <BlogHero />
            <div className='md:mt-16 sm:mt-10 mt-8'>
                <BlogCards />
            </div>
            <Journey />
        </>
    )
}

export default page;
