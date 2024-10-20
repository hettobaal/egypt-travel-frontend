export const dynamicParams = true
import React from 'react'
import Reviews from '@/components/reuseable/Reviews';
import Journey from '@/components/reuseable/Journey';
import { getSingleMetaData, getSingleSubCategory, getSubCategories } from '@/lib/siteApis';
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

export async function generateMetadata({ params }) {
    const id = params?.catalogId;
    const decodedId = decodeURIComponent(id);
    const data = await getSingleSubCategory(decodedId)
    const categoryId = data?.data?._id
    const SubcategoryMetaData = await getSingleMetaData(categoryId)
    const metaData = SubcategoryMetaData?.data

    const title = metaData?.title || 'Default Title';
    const description = metaData?.description || 'Default Description';
    const canonical = metaData?.canonical || 'https://egypt-travel-frontend.vercel.app';
    const ogSitename = metaData?.ogSitename || 'Agypten';
    const ogTitle = metaData?.ogTitle || title;
    const ogDescription = metaData?.ogDescription || description;
    const ogURL = metaData?.ogURL || `https://egypt-travel-frontend.vercel.app/catalog/${decodedId}`;
    const ogImageAlt = metaData?.ogImageAlt || 'Image Description';
    const ogImage = metaData?.ogImage || '';

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
                    secureUrl: `https://dccvcdil526gz.cloudfront.net/${metaData?.ogImage}`,
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
                    secureUrl: `https://dccvcdil526gz.cloudfront.net/${metaData?.ogImage}`,
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
    // console.log("data", data?.data);

    const ImageData = data?.data
    const heroImageDesktop = ImageData[0]?.subCategoryHeroImage
        ? `https://dccvcdil526gz.cloudfront.net/${ImageData[0]?.subCategoryHeroImage}?v=${Date.now()}`
        : '';

    const heroImageMobile = ImageData[0]?.subCategoryMobHeroImage
        ? `https://dccvcdil526gz.cloudfront.net/${ImageData[0]?.subCategoryMobHeroImage}?v=${Date.now()}`
        : '';



    return (
        <>
            <CatalogHero
                data={data?.data[0]}
                ImageUrl={heroImageDesktop}
                MobImageUrl={heroImageMobile}
            />
            <CatalogTour data={data?.data[0]} />
            <Reviews />
            <Journey />
        </>
    )
}

export default page;
