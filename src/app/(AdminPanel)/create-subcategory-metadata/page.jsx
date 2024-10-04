import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getSubCategories } from '../../../lib/siteApis'
import CreateSubCategoryMetaData from '@/components/AdminPanel/metaData/CreateSubCategoryMetaData'

async function page() {

    const data = await getSubCategories()

    return (
        <>
            <Heading>
                Create Sub Category MetaData
            </Heading>
            <CreateSubCategoryMetaData data={data} />
        </>
    )
}

export default page