import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getSubCategories } from '../../../lib/siteApis'
import CreateSubCategoryMetaData from '@/components/AdminPanel/metaData/CreateSubCategoryMetaData'

async function page() {

    const data = await getSubCategories()
    const serializableData = JSON?.parse(JSON?.stringify(data))

    return (
        <>
            <Heading>
                Create Sub Category MetaData
            </Heading>
            <CreateSubCategoryMetaData data={serializableData} />
        </>
    )
}

export default page