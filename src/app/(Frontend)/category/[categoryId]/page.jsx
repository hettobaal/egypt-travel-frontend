import React from 'react'
import dynamic from 'next/dynamic';
import { categories } from '@/asset/HomeCategoryData';
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


function page({ params }) {

    const id = params?.categoryId;
    const decodedId = decodeURIComponent(id);
    const data = categories?.find((item) => item?.slug === decodedId);

    return (
        <>
            <CategoryHero id={decodedId} />
            <CategoryTour data={data} />
            <CategoryRelatedTour />
            <Reviews />
            <Journey />
        </>
    )
}

export default page;
