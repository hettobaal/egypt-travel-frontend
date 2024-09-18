import React from 'react'
import Heading from '@/components/reuseable/Heading'
import CreateTour from '@/components/AdminPanel/tours/CreateTour'
import { getSubCategories } from '@/lib/siteApis'

async function page() {

    const data = await getSubCategories()

    return (
        <>
            <Heading>
                Add Tour
            </Heading>
            <CreateTour data={data?.data} />
        </>
    )
}

export default page