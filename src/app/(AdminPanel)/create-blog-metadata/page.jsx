import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getBlogs } from '../../../lib/siteApis'
import CreateBlogMetaData from '@/components/AdminPanel/metaData/CreateBlogMetaData'

async function page() {

    const data = await getBlogs()
    const serializableData = JSON?.parse(JSON?.stringify(data))

    return (
        <>
            <Heading>
                Create Blog MetaData
            </Heading>
            <CreateBlogMetaData data={serializableData} />
        </>
    )
}

export default page