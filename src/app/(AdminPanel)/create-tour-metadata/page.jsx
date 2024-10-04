import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getTours } from '../../../lib/siteApis'
import CreateTourMetadata from '@/components/AdminPanel/metaData/CreateTourMetadata'

async function page() {

    const data = await getTours()


    return (
        <>
            <Heading>
                Create Tour MetaData
            </Heading>
            <CreateTourMetadata data={data} />
        </>
    )
}

export default page