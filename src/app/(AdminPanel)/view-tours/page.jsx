import React from 'react'
import Heading from '@/components/reuseable/Heading'
import ViewTours from '@/components/AdminPanel/tours/ViewTours'

async function page() {

    // const data = await getCategories()

    const data = []
    return (
        <>
            <Heading>
                View Tour
            </Heading>
            <ViewTours CategoryData={data?.data} />
        </>
    )
}

export default page