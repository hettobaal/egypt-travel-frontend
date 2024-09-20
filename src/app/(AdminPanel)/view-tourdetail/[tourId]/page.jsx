import Heading from '@/components/reuseable/Heading'
import React from 'react'
import { getSingleTour } from '@/lib/siteApis'
import ViewTourDetail from '@/components/AdminPanel/tours/ViewTourDetail'

async function page({ params }) {

    const id = params?.tourId
    const data = await getSingleTour(id)
    return (
        <>
            <Heading>
                Tour Detail
            </Heading>
            <ViewTourDetail data={data?.data} />
        </>
    )
}

export default page