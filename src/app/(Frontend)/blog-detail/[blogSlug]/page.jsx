import BlogContent from '@/components/blogs/BlogContent';
import BlogDetailHero from '@/components/blogs/BlogDetailHero';
import RelatedBlogs from '@/components/blogs/RelatedBlogs';
import Journey from '@/components/reuseable/Journey';
import { getBlogs } from '@/lib/siteApis';
import React from 'react'

async function page() {

    const blogs = await getBlogs()
    console.log("blogs", blogs);

    return (
        <>
            <BlogDetailHero />
            <BlogContent />
            <RelatedBlogs />
            <Journey />
        </>
    )
}

export default page;
