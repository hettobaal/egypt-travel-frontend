import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getBookingTours } from '@/lib/siteApis';
import ViewCancelled from '@/components/AdminPanel/bookingTours/ViewCancelled';

async function page() {

    const data = await getBookingTours()
    const bookingData = data?.data;
    const pendingTours = bookingData?.filter((item) => item?.status === "Cancelled")

    return (
        <>
            <Heading>
                View Pending Tours
            </Heading>
            <ViewCancelled TourData={pendingTours?.length > 0 ? pendingTours : []} />
        </>
    )
}

export default page