import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getDiscountTours } from '@/lib/siteApis'

async function page() {

    const data = await getDiscountTours()
    console.log("DiscountTours", data);


    return (
        <>
            <Heading>
                View Discount Tours
            </Heading>
            {/* <ViewTours TourData={data?.data} /> */}
        </>
    )
}

export default page