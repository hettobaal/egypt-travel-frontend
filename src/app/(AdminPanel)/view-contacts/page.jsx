import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { GetContactMessage } from '@/lib/siteApis'
import ViewContacts from '@/components/AdminPanel/contacts/ViewContacts'

async function page() {

    const data = await GetContactMessage()
    const userMessages = data?.data

    return (
        <>
            <Heading>
                View Messages
            </Heading>
            <ViewContacts userMessages={userMessages?.length > 0 ? userMessages : []} />
        </>
    )
}

export default page