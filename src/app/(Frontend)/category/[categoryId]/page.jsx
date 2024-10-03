import React from 'react'
import dynamic from 'next/dynamic';
import { getCategories, getSingleCategory } from '@/lib/siteApis';
const CategoryHero = dynamic(() => import('@/components/category/CategoryHero'));
const CategoryRelatedTour = dynamic(() => import('@/components/category/CategoryRelatedTour'));
const CategoryTour = dynamic(() => import('@/components/category/CategoryTour'));
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));


export async function generateStaticParams() {
    const data = await getCategories()
    const posts = data?.data
    const array = posts?.map((post) => ({
        categoryId: post?.slug ,
    }));
    return array;
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
