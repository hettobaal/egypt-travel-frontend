export const dynamicParams = true
import React from 'react'
import dynamic from 'next/dynamic';
import { getRelatedTours, getSingleTour, getTours } from '@/lib/siteApis';
import ReviewsContainer from '@/components/tourDetail/ReviewsContainer';
import Activity from '@/components/tourDetail/Activity';
import BookingForm from '@/components/tourDetail/BookingForm';
import DetailHero from '@/components/tourDetail/DetailHero';
import Description from '@/components/tourDetail/Description';
import RelatedTours from '@/components/tourDetail/RelatedTours';
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));


export async function generateStaticParams() {
    const data = await getTours()
    const posts = data?.data
    const array = posts?.map((tour) => ({
        tourSlug: tour?.slug,
    }));
    return array;
}


async function page({ params }) {

    const slug = params?.tourSlug;
    const decodedSlug = decodeURIComponent(slug);
    const tour = await getSingleTour(decodedSlug)
    const similarTour = await getRelatedTours(tour?.data?.tag)


    return (
        <>
            <DetailHero data={tour?.data} />
            <Activity data={tour?.data} />
            <div id="booking-form">
                <BookingForm data={tour?.data} />
            </div>
            <Description data={tour?.data} />
            <ReviewsContainer ReviewsData={tour?.data?.reviews} />
            <RelatedTours data={similarTour?.data} />
            <Reviews />
        </>
    )
}

export default page
