import dynamic from 'next/dynamic'

import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getReviews } from '@/lib/siteApis'
// import ViewReviews from '@/components/AdminPanel/Reviews/ViewReviews'


const ViewReviews = dynamic(() => import('@/components/AdminPanel/Reviews/ViewReviews'),{ ssr: false });

// dynamic(
//     () => import('../components/BrowserOnlyComponent'),
//     { ssr: false }
//   )

async function page() {

    const data = await getReviews()
    console.log(data);


    return (
        <>
            <Heading>
                View Reviews
            </Heading>
            <ViewReviews reviewsData={data?.data} />
        </>
    )
}

export default page