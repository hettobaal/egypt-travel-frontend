import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getTourMetaData } from '@/lib/siteApis'
import ViewMetaData from '@/components/AdminPanel/metaData/ViewMetaData';

async function page() {

    const data = await getTourMetaData()

    return (
        <>
            <Heading>
                View Tour MetaData
            </Heading>
            <ViewMetaData CategoryData={data?.data || []} />
        </>
    )
}

export default page