import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getSubCategoryMetaData } from '@/lib/siteApis'
import ViewMetaData from '@/components/AdminPanel/metaData/ViewMetaData';

async function page() {

    const data = await getSubCategoryMetaData()

    return (
        <>
            <Heading>
                View SubCategories MetaData
            </Heading>
            <ViewMetaData CategoryData={data?.data || []} />
        </>
    )
}

export default page