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
        </>
    )
}

export default page