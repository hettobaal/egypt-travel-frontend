import BlogContent from '@/components/blogs/BlogContent';
import BlogDetailHero from '@/components/blogs/BlogDetailHero';
import RelatedBlogs from '@/components/blogs/RelatedBlogs';
import Journey from '@/components/reuseable/Journey';
import { getBlogs, getSingleBlog } from '@/lib/siteApis';
import React from 'react'


export async function generateStaticParams() {
    const blogsData = await getBlogs()
    const blogs = blogsData?.data || {}
    const array = [blogs]?.map((blog) => ({
        blogSlug: blog?.slug,
    }));
    return array;
}

async function page({ params }) {
    const slug = params?.blogSlug;
    const blog = await getSingleBlog(slug)
    console.log("blog detail", blog);

    return (
        <>
            <BlogDetailHero />
            <BlogContent blog={blog.data} />
            <RelatedBlogs />
            <Journey />
        </>
    )
}

export default page;
