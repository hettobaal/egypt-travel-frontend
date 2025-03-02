import React from 'react'
import Heading from '@/components/reuseable/Heading'
import CreateBlogMetaData from '@/components/blogs/CreateBlogMetadata';
import { getBlogs } from '@/lib/apis';

async function page() {
    const blogs = await getBlogs()
    const data = blogs?.data
    return (
        <>
            <Heading>
                Create Blog MetaData
            </Heading>
            <CreateBlogMetaData data={data} />
        </>
    )
}

export default page;
