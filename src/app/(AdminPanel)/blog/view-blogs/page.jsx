import React from 'react'
import Heading from '@/components/reuseable/Heading';
import ViewBlogs from '@/components/blogs/ViewBlogs';
import { getBlogs } from '@/lib/siteApis';


export default async function page() {

    const data = await getBlogs()
    const blogData = data?.data



    return (
        <>
            <Heading>
                View Blogs
            </Heading>
            <ViewBlogs blogData={blogData || []} />
        </>
    )
}


