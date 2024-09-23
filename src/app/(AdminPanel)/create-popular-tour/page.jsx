import CreateDiscountTour from '@/components/AdminPanel/discoutTours/CreateDiscountTour'
import CreatePopularTour from '@/components/AdminPanel/popularTours/CreatePopularTour'
import Heading from '@/components/reuseable/Heading'
import { getTours } from '@/lib/siteApis'
import React from 'react'

async function page() {

    const data = await getTours()

    return (
        <>
            <Heading>
                Add Popular Tour
            </Heading>
            <CreatePopularTour data={data?.data} />
        </>
    )
}

export default page