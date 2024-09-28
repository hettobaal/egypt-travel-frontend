import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getPopularTours } from '@/lib/siteApis'
import ViewPopularTour from '@/components/AdminPanel/popularTours/ViewPopularTour';

async function page() {

    const data = await getPopularTours()
    const tourData = data?.data
    console.log("tourData",tourData);
    

    return (
        <>
            <Heading>
                View Popular Tours
            </Heading>
            <ViewPopularTour TourData={tourData || []} />
        </>
    )
}

export default page