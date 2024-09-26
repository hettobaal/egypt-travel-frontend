// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;
 
// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

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
    console.log(data);
    
    
    return (
        <>
            <CatalogHero />
            {data?.data?.tourId.length ?
<CatalogTour data={data} /> : 
<h3 className='text-3xl font-bold text-center py-10'> No tours found in this Category.</h3>

            }
            <Reviews />
            <Journey />
        </>
    )
}

export default page;
