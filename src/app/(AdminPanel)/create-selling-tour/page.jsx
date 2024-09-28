import CreateSellingTour from '@/components/AdminPanel/bestsellingTour/CreateSellingTour'
import Heading from '@/components/reuseable/Heading'
import { getTours } from '@/lib/siteApis'
import React from 'react'

async function page() {

    const data = await getTours()
    console.log("getTours", data?.data);


    return (
        <>
            <Heading>
                Add Selling Tour
            </Heading>
            <CreateSellingTour data={data?.data || []} />
        </>
    )
}

export default page