import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getBookingTours } from '@/lib/siteApis';
import ViewConfirmed from '@/components/AdminPanel/bookingTours/ViewConfirmed';

async function page() {

    const data = await getBookingTours()
    const bookingData = data?.data;
    const pendingTours = bookingData?.filter((item) => item?.status === "Confirmed")

    return (
        <>
            <Heading>
                View Pending Tours
            </Heading>
            <ViewConfirmed TourData={pendingTours?.length > 0 ? pendingTours : []} />
        </>
    )
}

export default page