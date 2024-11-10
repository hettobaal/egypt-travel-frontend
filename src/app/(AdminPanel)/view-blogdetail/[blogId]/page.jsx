import Heading from '@/components/reuseable/Heading'
import React from 'react'
import { getSingleBlog } from '@/lib/siteApis'

async function page({ params }) {

    const id = params?.blogId
    const data = await getSingleBlog(id)
    return (
        <>
            <Heading>
                {/* {data?.data?.categoryName} */}
            </Heading>
            {/* <CategoryDetails CategoryData={data?.data?.subCategoryId || []} /> */}
        </>
    )
}

export default page