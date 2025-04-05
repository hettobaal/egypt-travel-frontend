import React from 'react'
import dynamic from 'next/dynamic';
import { getCategories, getRelatedTours, getSingleCategory, getSingleMetaData } from '@/lib/siteApis';
import CategoryHero from '@/components/category/CategoryHero';
import CategoryRelatedTour from '@/components/category/CategoryRelatedTour';
import CategoryTour from '@/components/category/CategoryTour';
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));


export async function generateStaticParams() {
    const data = await getCategories()
    const posts = data?.data || []
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
    console.log("categoryMetaData",categoryMetaData);
    console.log("categoryId",categoryId);
    
    const metaData = categoryMetaData?.data
    const title = metaData?.title || 'Default Title';
    const description = metaData?.description || 'Default Description';
    const canonical = metaData?.canonical || 'https://aegyptenmalanders.de';
    const ogSitename = metaData?.ogSitename || 'Agypten';
    const ogTitle = metaData?.ogTitle || title;
    const ogDescription = metaData?.ogDescription || description;
    const ogURL = metaData?.ogURL || `https://aegyptenmalanders.de/catalog/${decodedId}`;
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
                    secureUrl: `https://aegyptenmalanders.de/imageslocal/metadata/${metaData?.ogImage}`,
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
        ? `https://aegyptenmalanders.de/imageslocal/category/${currentData?.categoryImage}`
        : '';

    const heroImageMobile = currentData?.categoryMobImage
        ? `https://aegyptenmalanders.de/imageslocal/category/${currentData?.categoryMobImage}`
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
            {/* <CategoryRelatedTour /> */}
            <Reviews />
            <Journey />
        </>
    )
}

export default page;
