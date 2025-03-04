import React from 'react'
import Heading from '@/components/reuseable/Heading';
import ViewBlogMetaData from '@/components/blogs/ViewBlogMetaData';
import { getBlogMetaData } from '@/lib/siteApis';

async function page() {
    const data = await getBlogMetaData('blog')
    const metaData = data?.data

    return (
        <>
            <Heading>
                View Blog MetaData
            </Heading>
            <ViewBlogMetaData metaData={metaData || []} />
        </>
    )
}

export default page;
