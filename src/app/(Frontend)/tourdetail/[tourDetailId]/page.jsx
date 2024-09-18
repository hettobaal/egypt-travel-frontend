import React from 'react'
import dynamic from 'next/dynamic';

const Activity = dynamic(() => import('@/components/tourDetail/Activity'), {
    ssr: false
});
const BookingForm = dynamic(() => import('@/components/tourDetail/BookingForm'), {
    ssr: false
});
const DetailHero = dynamic(() => import('@/components/tourDetail/DetailHero'), {
    ssr: false
});
const Description = dynamic(() => import('@/components/tourDetail/Description'), {
    ssr: false
});
const RelatedTours = dynamic(() => import('@/components/tourDetail/RelatedTours'), {
    ssr: false
});
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'), {
    ssr: false
});
function page() {
    return (
        <>
            <DetailHero />
            <Activity />
            <BookingForm />
            <Description />
            <RelatedTours />
            <Reviews />
        </>
    )
}

export default page
