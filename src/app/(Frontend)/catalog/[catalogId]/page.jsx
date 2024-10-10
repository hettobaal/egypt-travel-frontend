export const dynamicParams = true
import React from 'react'
import Reviews from '@/components/reuseable/Reviews';
import Journey from '@/components/reuseable/Journey';
import { getSingleSubCategory, getSubCategories } from '@/lib/siteApis';
import CatalogHero from '@/components/catalog/CatalogHero';
import CatalogTour from '@/components/catalog/CatalogTour';
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
    // console.log("data", data?.data?.tourId);

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
