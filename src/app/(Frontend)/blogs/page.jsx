import React from 'react'
import dynamic from 'next/dynamic';
// import { getSubCategories } from '@/lib/siteApis';
const BlogHero = dynamic(() => import('@/components/blogs/BlogHero'));
const BlogCards = dynamic(() => import('@/components/blogs/BlogCards'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));
async function page() {
    // const data = await getSubCategories()
    // console.log("data", data);

    return (
        <>
            <BlogHero />
            <BlogCards />
            <Journey />
        </>
    )
}

export default page;
