export const dynamicParams = true
import React from 'react'
import dynamic from 'next/dynamic';
import { getRelatedTours, getSingleMetaData, getSingleTour, getTours } from '@/lib/siteApis';
import ReviewsContainer from '@/components/tourDetail/ReviewsContainer';
import Activity from '@/components/tourDetail/Activity';
import BookingForm from '@/components/tourDetail/BookingForm';
// import DetailHero from '@/components/tourDetail/DetailHero';
import Description from '@/components/tourDetail/Description';
import RelatedTours from '@/components/tourDetail/RelatedTours';
const DetailHero = dynamic(() => import('@/components/tourDetail/DetailHero'), {
    ssr: false,
});
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'), {
    ssr: false,
});


export async function generateStaticParams() {
    const data = await getTours()
    const posts = data?.data || []
    const array = posts?.map((tour) => ({
        tourSlug: tour?.slug,
    }));
    return array;
}




export async function generateMetadata({ params }) {

    const id = params?.tourSlug;
    const decodedId = decodeURIComponent(id);
    const data = await getSingleTour(decodedId)
    const tourId = data?.data?._id
    const tourMetaData = await getSingleMetaData(tourId)
    const metaData = tourMetaData?.data
    const title = metaData?.title || 'Aegypten mal anders';
    const description = metaData?.description || 'Aegypten mal anders';
    const canonical = metaData?.canonical || 'https://aegyptenmalanders.de';
    const ogSitename = metaData?.ogSitename || 'Aegypten mal anders';
    const ogTitle = metaData?.ogTitle || title;
    const ogDescription = metaData?.ogDescription || description;
    const ogURL = metaData?.ogURL || `https://aegyptenmalanders.de/imageslocal/metadata/${decodedId}`;
    const ogImageAlt = metaData?.ogImageAlt || 'Aegypten mal anders';
    const ogImage =  `https://aegyptenmalanders.de/imageslocal/metadata/${metaData?.ogImageId}`  || '';


    return {
        title,
        description,
        canonical: canonical,
        openGraph: {
            siteName: ogSitename,
            title: ogTitle,
            description: ogDescription,
            url: ogURL,
            images: [
                {
                    url: ogImage,
                    secureUrl: `https://aegyptenmalanders.de/imageslocal/metadata/${metaData?.ogImage}`,
                    width: 1200,
                    height: 627,
                    alt: `${ogImageAlt}`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: ogTitle,
            description: ogDescription,
            images: [
                {
                    url: ogImage,
                    secureUrl: `https://aegyptenmalanders.de/imageslocal/metadata/${metaData?.ogImage}?v=${Date.now()}`,
                    width: 1200,
                    height: 627,
                    alt: `${ogImageAlt}`,
                },
            ],
        },
    };

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
            <ReviewsContainer ReviewsData={tour?.data?.reviewsId} />
            <RelatedTours data={similarTour?.data} />
            <Reviews />
        </>
    )
}

export default page
