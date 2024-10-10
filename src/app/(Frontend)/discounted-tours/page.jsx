import React from 'react'
import dynamic from 'next/dynamic';
import { getDiscountTours } from '@/lib/siteApis';
import DiscountHero from '@/components/discountedTour/DiscountHero';
import Search from '@/components/home/Search';
import DiscountCards from '@/components/discountedTour/DiscountCards';
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));
const InstagramFeed = dynamic(() => import('@/components/reuseable/InstagramFeed'));
async function page() {

    const data = await getDiscountTours()

    return (
        <>
            <DiscountHero />
            <Search />
            <DiscountCards data={data?.data?.length > 0 ? data?.data[0] : []} />
            <Reviews />
            <Journey />
            <InstagramFeed />
        </>
    )
}

export default page;
