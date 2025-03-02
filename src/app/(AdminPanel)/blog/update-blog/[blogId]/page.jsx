import React from 'react'
import UpdateBlog from '@/components/blogs/UpdateBlog';
import { getSingleBlog } from '@/lib/siteApis';

async function page({ params }) {

    const slug = params?.blogId
    const data = await getSingleBlog(slug)
    // console.log("data", data);

    const entireBlog = data?.data
    console.log("entireBlog", entireBlog);

    return (
        <>
            <UpdateBlog entireBlog={entireBlog} />
        </>
    )
}

export default page;
