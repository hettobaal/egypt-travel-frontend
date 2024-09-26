import React from 'react'
import dynamic from 'next/dynamic';
import { getSingleTour, getTours } from '@/lib/siteApis';
const Activity = dynamic(() => import('@/components/tourDetail/Activity'));
const BookingForm = dynamic(() => import('@/components/tourDetail/BookingForm'));
const DetailHero = dynamic(() => import('@/components/tourDetail/DetailHero'));
const Description = dynamic(() => import('@/components/tourDetail/Description'));
const RelatedTours = dynamic(() => import('@/components/tourDetail/RelatedTours'));
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));


export async function generateStaticParams() {
    const allTours = await getTours()
    const array = allTours?.data?.map((tour) => ({
        tourSlug: tour?.slug,
    }));
    return array;
}


async function page({ params }) {

    const slug = params?.tourSlug;
    const decodedSlug = decodeURIComponent(slug);
    // const CategoryData = await getCategories()
    // const SingleCategoryData = await getSingleCategory(decodedSlug)
    const tour = await getSingleTour(decodedSlug)
console.log(tour);
console.log(decodedSlug);



    // const slug = params?.tourSlug
    return (
        <>
            <DetailHero data={tour?.data} />
            <Activity data={tour?.data} />
            <div id="booking-form">
                <BookingForm data={tour?.data} />
            </div>
            <Description data={tour?.data} />
            <RelatedTours />
            <Reviews />
        </>
    )
}

export default page
