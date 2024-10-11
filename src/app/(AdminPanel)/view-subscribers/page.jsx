import React from 'react'
import Heading from '@/components/reuseable/Heading'

async function page() {

    // const data = await GetContactMessage()
    // const userMessages = data?.data

    return (
        <>
            <Heading>
                View Subscribers
            </Heading>
            {/* <ViewContacts userMessages={userMessages?.length > 0 ? userMessages : []} /> */}
        </>
    )
}

export default page