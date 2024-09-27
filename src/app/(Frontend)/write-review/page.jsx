import MaxWidthWrapper from '@/components/reuseable/MaxWidthWrapper'
import AddReview from '@/components/reviews/AddReview'
import React from 'react'

function page() {
    return (
        <>
            <MaxWidthWrapper className='md:mt-[120px] mt-[100px] mx-auto flex justify-center items-center pb-12'>
                <AddReview />
            </MaxWidthWrapper>
        </>
    )
}

export default page
