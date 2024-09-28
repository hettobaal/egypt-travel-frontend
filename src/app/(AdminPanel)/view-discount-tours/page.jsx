import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getDiscountTours } from '@/lib/siteApis'
import ViewDiscountedTours from '@/components/AdminPanel/discoutTours/ViewDiscountedTours';

async function page() {

    const data = await getDiscountTours()
    const tourData = data?.data;
  

    return (
        <>
            <Heading>
                View Discount Tours
            </Heading>
            <ViewDiscountedTours TourData={tourData?.length > 0 ? tourData[0]?.tourId : []} />
        </>
    )
}

export default page