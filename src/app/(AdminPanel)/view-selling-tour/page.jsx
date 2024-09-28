import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getSellingTours } from '@/lib/siteApis'
import ViewSellingTour from '@/components/AdminPanel/bestsellingTour/ViewSellingTour';

async function page() {

    const data = await getSellingTours()
    const tourData = data?.data || [];


    return (
        <>
            <Heading>
                View Selling Tours
            </Heading>
            {/* <ViewSellingTour TourData={tourData.length > 0 ? tourData : []} /> */}
        </>
    )
}

export default page