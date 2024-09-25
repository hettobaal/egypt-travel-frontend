import React from 'react'
import dynamic from 'next/dynamic';
import { getSingleTour } from '@/lib/siteApis';
const Activity = dynamic(() => import('@/components/tourDetail/Activity'));
const BookingForm = dynamic(() => import('@/components/tourDetail/BookingForm'));
const DetailHero = dynamic(() => import('@/components/tourDetail/DetailHero'));
const Description = dynamic(() => import('@/components/tourDetail/Description'));
const RelatedTours = dynamic(() => import('@/components/tourDetail/RelatedTours'));
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));

async function page({ params }) {
    const id = params?.tourDetailId
    const data = await getSingleTour(id)
    return (
        <>
            <DetailHero data={data?.data} />
            <Activity data={data?.data} />
            <BookingForm data={data?.data} />
            <Description data={data?.data} />
            <RelatedTours />
            <Reviews />
        </>
    )
}

export default page
