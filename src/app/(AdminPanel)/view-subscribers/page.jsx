import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getSubscribers } from '@/lib/siteApis'
import ViewSubscribers from '@/components/AdminPanel/subscribers/ViewSubscribers'

async function page() {

    const data = await getSubscribers()
    const SubscribersData = data?.data


    return (
        <>
            <Heading>
                View Subscribers
            </Heading>
            <ViewSubscribers SubscribersData={SubscribersData?.length > 0 ? SubscribersData : []} />
        </>
    )
}

export default page