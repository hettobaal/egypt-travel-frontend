import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getBookingTours } from '@/lib/siteApis';
import ViewPending from '@/components/AdminPanel/bookingTours/ViewPending';

async function page() {

    const data = await getBookingTours()
    const bookingData = data?.data;
    const pendingTours = bookingData?.filter((item) => item?.status === "Pending")

    return (
        <>
            <Heading>
                View Pending Tours
            </Heading>
            <ViewPending TourData={pendingTours?.length > 0 ? pendingTours : []} />
        </>
    )
}

export default page