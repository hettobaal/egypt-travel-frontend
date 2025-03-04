import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getBlogs } from '@/lib/siteApis';
import CreateBlogMetaData from '@/components/AdminPanel/metaData/CreateBlogMetaData';


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
