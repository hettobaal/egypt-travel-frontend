import React from 'react'
import BlogHero from '@/components/blogs/BlogHero';
import BlogCards from '@/components/blogs/BlogCards';
import Journey from '@/components/reuseable/Journey';
import { getBlogs } from '@/lib/siteApis';

async function page() {
const  blogs = await getBlogs()



return (
        <>
            <BlogHero />
            <BlogCards blogsData={blogs?.data[2]} />
            <Journey />
        </>
    )
}

export default page;
