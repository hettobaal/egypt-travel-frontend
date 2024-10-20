import React from 'react'
import dynamic from 'next/dynamic';
import { getCategories, getSingleCategory, getSingleMetaData } from '@/lib/siteApis';
import CategoryHero from '@/components/category/CategoryHero';
import CategoryRelatedTour from '@/components/category/CategoryRelatedTour';
import CategoryTour from '@/components/category/CategoryTour';
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));


export async function generateStaticParams() {
    const data = await getCategories()
    const posts = data?.data
    const array = posts?.map((post) => ({
        categoryId: post?.slug,
    }));
    return array;
}




export async function generateMetadata({ params }) {
    const id = params?.categoryId;
    const decodedId = decodeURIComponent(id);
    const data = await getSingleCategory(decodedId)
    const categoryId = data?.data?._id
    const categoryMetaData = await getSingleMetaData(categoryId)
    const metaData = categoryMetaData?.data
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

    const id = params?.categoryId;
    const decodedId = decodeURIComponent(id);
    const CategoryData = await getCategories()
    const SingleCategoryData = await getSingleCategory(decodedId)

    const currentData = Array?.isArray(CategoryData?.data)
        ? CategoryData?.data?.find(item => item?.slug?.toLowerCase() === decodedId?.toLowerCase())
        : null;


    const heroImageDesktop = currentData?.categoryImage
        ? `https://dccvcdil526gz.cloudfront.net/${currentData?.categoryImage}?v=${Date.now()}`
        : '';

    const heroImageMobile = currentData?.categoryMobImage
        ? `https://dccvcdil526gz.cloudfront.net/${currentData?.categoryMobImage}?v=${Date.now()}`
        : '';




    return (
        <>
            <CategoryHero
                id={decodedId}
                data={CategoryData?.data}
                ImageUrl={heroImageDesktop}
                MobImageUrl={heroImageMobile}

            />
            <CategoryTour data={SingleCategoryData?.data} />
            <CategoryRelatedTour />
            <Reviews />
            <Journey />
        </>
    )
}

export default page;
