export const dynamicParams = true
import React from 'react'
import dynamic from 'next/dynamic';
import { getRelatedTours, getReviews, getSingleTour, getTours } from '@/lib/siteApis';
import ReviewsContainer from '@/components/tourDetail/ReviewsContainer';
const Activity = dynamic(() => import('@/components/tourDetail/Activity'));
const BookingForm = dynamic(() => import('@/components/tourDetail/BookingForm'));
const DetailHero = dynamic(() => import('@/components/tourDetail/DetailHero'));
const Description = dynamic(() => import('@/components/tourDetail/Description'));
const RelatedTours = dynamic(() => import('@/components/tourDetail/RelatedTours'));
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
    const ReviewsData = await getReviews()



    return (
        <>
            <DetailHero data={tour?.data} />
            <Activity data={tour?.data} />
            <div id="booking-form">
                <BookingForm data={tour?.data} />
            </div>
            <Description data={tour?.data} />
            <ReviewsContainer ReviewsData={ReviewsData?.data} />
            <RelatedTours data={similarTour?.data} />
            <Reviews />
        </>
    )
}

export default page
