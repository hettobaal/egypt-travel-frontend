import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getSellingTours } from '@/lib/siteApis'
import ViewSellingTour from '@/components/AdminPanel/bestsellingTour/ViewSellingTour';

async function page() {

    const data = await getSellingTours()
    const tourData = data?.data

    return (
        <>
            <Heading>
                View Popular Tours
            </Heading>
            <ViewSellingTour TourData={tourData || []} />
        </>
    )
}

export default page