import BlogContent from '@/components/blogs/BlogContent';
import BlogDetailHero from '@/components/blogs/BlogDetailHero';
import RelatedBlogs from '@/components/blogs/RelatedBlogs';
import Journey from '@/components/reuseable/Journey';
import { getBlogs } from '@/lib/siteApis';
import React from 'react'

async function page() {

    const blogs = await getBlogs()
    console.log("blogs detail", blogs);

    return (
        <>
            <BlogDetailHero />
            <BlogContent data={blogs?.data[0]} />
            <RelatedBlogs />
            <Journey />
        </>
    )
}

export default page;
