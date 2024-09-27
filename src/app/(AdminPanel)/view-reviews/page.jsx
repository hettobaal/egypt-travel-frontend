import dynamic from 'next/dynamic'

import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getReviews } from '@/lib/siteApis'
const ViewReviews = dynamic(() => import('@/components/AdminPanel/Reviews/ViewReviews'),{ ssr: false });

async function page() {

    const data = await getReviews()

    return (
        <>
            <Heading>
                View Reviews
            </Heading>
            <ViewReviews reviewsData={data?.data || []} />
        </>
    )
}

export default page