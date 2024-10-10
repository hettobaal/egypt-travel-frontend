import React from 'react'
import BlogHero from '@/components/blogs/BlogHero';
import BlogCards from '@/components/blogs/BlogCards';
import Journey from '@/components/reuseable/Journey';
async function page() {

    return (
        <>
            <BlogHero />
            <BlogCards />
            <Journey />
        </>
    )
}

export default page;
