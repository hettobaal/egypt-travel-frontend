import React from 'react'
import Heading from '@/components/reuseable/Heading'
import ViewTours from '@/components/AdminPanel/tours/ViewTours'
import { getTours } from '@/lib/siteApis'

async function page() {

    const data = await getTours()
    
    return (
        <>
            <Heading>
                View Tour
            </Heading>
            <ViewTours TourData={data?.data} />
        </>
    )
}

export default page