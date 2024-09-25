import React from 'react'
import dynamic from 'next/dynamic';
import Reviews from '@/components/reuseable/Reviews';
import Journey from '@/components/reuseable/Journey';
import { getSingleSubCategory } from '@/lib/siteApis';
const CatalogHero = dynamic(() => import('@/components/catalog/CatalogHero'));
const CatalogTour = dynamic(() => import('@/components/catalog/CatalogTour'));

// export async function generateStaticParams() {
//     const posts = categories;

//     const array = posts?.map((post) => ({
//         catalogId: post?.slug,
//     }));
//     return array;
// }


async function page({ params }) {

    const id = params?.catalogId;
    const decodedId = decodeURIComponent(id);
    const data = await getSingleSubCategory(decodedId)
    // const data = categories?.find((item) => item?.slug === decodedId);

    return (
        <>
            <CatalogHero />
            <CatalogTour />
            <Reviews />
            <Journey />
        </>
    )
}

export default page;
