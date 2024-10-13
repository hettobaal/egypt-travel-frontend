import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getUsers } from '@/lib/siteApis'
import ViewUsers from '@/components/AdminPanel/user/ViewUsers'

async function page() {

    const data = await getUsers()
    const Users = data?.data



    return (
        <>
            <Heading>
                View Users
            </Heading>
            <ViewUsers Users={Users?.length > 0 ? Users : []} />
        </>
    )
}

export default page