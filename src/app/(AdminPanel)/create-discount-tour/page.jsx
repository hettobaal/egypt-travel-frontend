import CreateDiscountTour from '@/components/AdminPanel/discoutTours/CreateDiscountTour'
import Heading from '@/components/reuseable/Heading'
import { getTours } from '@/lib/siteApis'
import React from 'react'

async function page() {

    const data = await getTours()

    return (
        <>
            <Heading>
                Add Discount Tour
            </Heading>
            <CreateDiscountTour data={data?.data} />
        </>
    )
}

export default page