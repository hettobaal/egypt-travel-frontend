import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getBookingTours } from '@/lib/siteApis';
import ViewPending from '@/components/AdminPanel/bookingTours/ViewPending';

async function page() {

    const data = await getBookingTours()
    const bookingData = data?.data;
    console.log("getBookingTours", bookingData);


    return (
        <>
            <Heading>
                View Pending Tours
            </Heading>
            <ViewPending TourData={bookingData?.length > 0 ? bookingData : []} />
        </>
    )
}

export default page