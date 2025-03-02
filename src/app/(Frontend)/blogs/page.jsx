import React from 'react'
import BlogHero from '@/components/blogs/BlogHero';
import BlogCards from '@/components/blogs/BlogCards';
import Journey from '@/components/reuseable/Journey';
import { getBlogs } from '@/lib/siteApis';

async function page() {

    const data = await getBlogs()
    const blogData = data?.data
    console.log("blogData", blogData);



    return (
        <>
            <BlogHero />
            <div className='md:mt-16 sm:mt-10 mt-8'>
                <BlogCards blogData={blogData} />
            </div>
            <Journey />
        </>
    )
}

export default page;
