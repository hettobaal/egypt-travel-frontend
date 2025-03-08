import React from 'react'
import UpdateBlog from '@/components/blogs/UpdateBlog';
import { getSingleBlog } from '@/lib/siteApis';

async function page({ params }) {

    const slug = params?.blogId
    const data = await getSingleBlog(slug)


    const entireBlog = data?.data

    return (
        <>
            <UpdateBlog entireBlog={entireBlog} />
        </>
    )
}

export default page;
