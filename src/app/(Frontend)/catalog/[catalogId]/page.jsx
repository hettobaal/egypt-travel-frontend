// export const revalidate = 600;
export const dynamicParams = true
import React from 'react'
import dynamic from 'next/dynamic';
import Reviews from '@/components/reuseable/Reviews';
import Journey from '@/components/reuseable/Journey';
import { getSingleSubCategory, getSubCategories } from '@/lib/siteApis';
const CatalogHero = dynamic(() => import('@/components/catalog/CatalogHero'));
const CatalogTour = dynamic(() => import('@/components/catalog/CatalogTour'));

export async function generateStaticParams() {

    const data = await getSubCategories()


    const posts = data?.data;
    const array = posts?.map((post) => ({
        catalogId: post?.slug,
    }));
    return array;

}


async function page({ params }) {

    const id = params?.catalogId;
    const decodedId = decodeURIComponent(id);
    const data = await getSingleSubCategory(decodedId)
    return (
        <>
            <CatalogHero />
            <CatalogTour data={data?.data} /> :
            <Reviews />
            <Journey />
        </>
    )
}

export default page;
