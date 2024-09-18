import React from 'react'
import Heading from '@/components/reuseable/Heading'
import CreateReview from '@/components/AdminPanel/Reviews/CreateReview'

function page() {

    return (
        <>
            <Heading>
                Add Review
            </Heading>
            <CreateReview />
        </>
    )
}

export default page