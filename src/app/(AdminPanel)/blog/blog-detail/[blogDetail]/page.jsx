import { getSingleBlog } from '@/lib/siteApis'
import React from 'react'

async function page({ params }) {

    const slug = params?.blogDetail
    const data = await getSingleBlog(slug)
    console.log("data", data);
    const blog = data?.data?.content
    console.log("blog", blog);

    return (
        <div
            className="editor-width  prose prose-sm sm:prose-sm lg:prose-lg xl:prose-xl"
            dangerouslySetInnerHTML={{ __html: blog }}>
        </div >
    )
}

export default page;
