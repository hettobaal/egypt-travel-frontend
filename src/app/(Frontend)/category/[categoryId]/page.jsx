import React from 'react'
import dynamic from 'next/dynamic';
import { categories } from '@/asset/HomeCategoryData';
import { getCategories, getSingleCategory } from '@/lib/siteApis';
const CategoryHero = dynamic(() => import('@/components/category/CategoryHero'));
const CategoryRelatedTour = dynamic(() => import('@/components/category/CategoryRelatedTour'));
const CategoryTour = dynamic(() => import('@/components/category/CategoryTour'));
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));


export async function generateStaticParams() {
    const posts = categories;

    const array = posts?.map((post) => ({
        categoryId: post?.slug,
    }));
    return array;
}


async function page({ params }) {

    const id = params?.categoryId;
    const decodedId = decodeURIComponent(id);
    const CategoryData = await getCategories()
    const SingleCategoryData = await getSingleCategory(decodedId)

    const currentData = CategoryData?.data?.find(item => {
        return item?.slug?.toLowerCase() === id?.toLowerCase();
    });


    const heroImageDesktop = `https://drive.google.com/thumbnail?id=${currentData?.categoryImage}&sz=w1000&v=${Date.now()}`
    const heroImageMobile = currentData
        ? `https://drive.google.com/thumbnail?id=${currentData?.categoryImage}&sz=w500&v=${Date.now()}`
        : '/images/aboutHeroMob.webp';

    // console.log("heroImageDesktop", heroImageDesktop);

    const backgroundImageStyle = {
        backgroundImage: `url(${heroImageDesktop})`,
    };

    return (
        <>
            <CategoryHero id={decodedId} data={CategoryData?.data} ImageUrl={backgroundImageStyle} />
            <CategoryTour data={SingleCategoryData?.data} />
            <CategoryRelatedTour />
            <Reviews />
            <Journey />
        </>
    )
}

export default page;
