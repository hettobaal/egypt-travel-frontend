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
    const posts = data?.data
    const array = posts?.map((post) => ({
        catalogId: post?.slug,
    }));
    return array;

}


async function page({ params }) {

    const id = params?.catalogId;
    const decodedId = decodeURIComponent(id);
    const data = await getSingleSubCategory(decodedId)

    const ImageData = data?.data
    const heroImageDesktop = ImageData?.subCategoryHeroImage
        ? `https://dccvcdil526gz.cloudfront.net/${ImageData.subCategoryHeroImage}?v=${Date.now()}`
        : '';

    const heroImageMobile = ImageData?.subCategoryMobHeroImage
        ? `https://dccvcdil526gz.cloudfront.net/${ImageData.subCategoryMobHeroImage}?v=${Date.now()}`
        : '';



    return (
        <>
            <CatalogHero
                data={data?.data}
                ImageUrl={heroImageDesktop}
                MobImageUrl={heroImageMobile}
            />
            <CatalogTour data={data?.data} />
            <Reviews />
            <Journey />
        </>
    )
}

export default page;
