import Heading from '@/components/reuseable/Heading'
import React from 'react'
import { getCategories } from '@/lib/siteApis'
import CreateCategoryMetadata from '@/components/AdminPanel/metaData/CreateCategoryMetadata'

async function page() {

    const data = await getCategories()


    return (
        <>
            <Heading>
                Create Category MetaData
            </Heading>
            <CreateCategoryMetadata data={data}/>
        </>
    )
}

export default page