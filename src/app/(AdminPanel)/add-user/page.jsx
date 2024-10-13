import React from 'react'
import Heading from '@/components/reuseable/Heading'
import AddUser from '@/components/AdminPanel/user/AddUser'

function page() {

    return (
        <>
            <Heading>
                Add User
            </Heading>
            <AddUser />
        </>
    )
}

export default page