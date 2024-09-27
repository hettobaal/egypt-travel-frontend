import React from 'react'
import dynamic from 'next/dynamic';
import { getDiscountTours } from '@/lib/siteApis';
const DiscountHero = dynamic(() => import('@/components/discountedTour/DiscountHero'));
const Search = dynamic(() => import('@/components/home/Search'));
const DiscountCards = dynamic(() => import('@/components/discountedTour/DiscountCards'));
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));
const InstagramFeed = dynamic(() => import('@/components/reuseable/InstagramFeed'));
async function page() {

    const data = await getDiscountTours()

    return (
        <>
            <DiscountHero />
            <Search />
            <DiscountCards data={data?.data || []} />
            <Reviews />
            <Journey />
            <InstagramFeed />
        </>
    )
}

export default page;
