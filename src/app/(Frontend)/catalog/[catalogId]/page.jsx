export const dynamicParams = true
import React from 'react'
import Reviews from '@/components/reuseable/Reviews';
import Journey from '@/components/reuseable/Journey';
import { getSingleMetaData, getSingleSubCategory, getSubCategories } from '@/lib/siteApis';
import CatalogHero from '@/components/catalog/CatalogHero';
import CatalogTour from '@/components/catalog/CatalogTour';
export async function generateStaticParams() {
    const data = await getSubCategories()
    const posts = data?.data || []
    const array = posts?.map((post) => ({
        catalogId: post?.slug,
    }));
    return array;

}

export async function generateMetadata({ params }) {
    const id = params?.catalogId;
    const decodedId = decodeURIComponent(id);
    const data = await getSingleSubCategory(decodedId)
    console.log("data", data);
    const categoryId = data?.data[0]?._id
    console.log("categoryId", categoryId);
    const SubcategoryMetaData = await getSingleMetaData(categoryId)
    const metaData = SubcategoryMetaData?.data
    console.log("SubcategoryMetaData", SubcategoryMetaData);

    const title = metaData?.title || 'Aegypten mal anders';
    const description = metaData?.description || 'Aegypten mal anders';
    const canonical = metaData?.canonical || 'https://aegyptenmalanders.de';
    const ogSitename = metaData?.ogSitename || 'Aegypten mal anders';
    const ogTitle = metaData?.ogTitle || title;
    const ogDescription = metaData?.ogDescription || description;
    const ogURL = metaData?.ogURL || `https://aegyptenmalanders.de/imageslocal/metadata/${decodedId}?v=${Date.now()}`;
    const ogImageAlt = metaData?.ogImageAlt || 'Image Description';
    const ogImage = metaData?.ogImageId || '';
    console.log("ogImage", ogImage);

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
                    secureUrl: `https://aegyptenmalanders.de/imageslocal/metadata/${metaData?.ogImageId}?v=${Date.now()}`,
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
                    secureUrl: `https://aegyptenmalanders.de/imageslocal/metadata/${metaData?.ogImageId}?v=${Date.now()}`,
                    width: 1200,
                    height: 627,
                    alt: `${ogImageAlt}`,
                },
            ],
        },
    };

}


async function page({ params }) {

    const id = params?.catalogId;
    const decodedId = decodeURIComponent(id);
    const data = await getSingleSubCategory(decodedId)

    const ImageData = data?.data
    const heroImageDesktop = ImageData[0]?.subCategoryHeroImage
        ? `https://aegyptenmalanders.de/imageslocal/subCategory/${ImageData[0]?.subCategoryHeroImage}`
        : '';

    const heroImageMobile = ImageData[0]?.subCategoryMobHeroImage
        ? `https://aegyptenmalanders.de/imageslocal/subCategory/${ImageData[0]?.subCategoryMobHeroImage}`
        : '';


    return (
        <>
            <CatalogHero
                data={data?.data[0]}
                ImageUrl={heroImageDesktop}
                MobImageUrl={heroImageMobile}
            />
            <CatalogTour data={data?.data[0]?.tourId} />
            <Reviews />
            <Journey />
        </>
    )
}

export default page;
