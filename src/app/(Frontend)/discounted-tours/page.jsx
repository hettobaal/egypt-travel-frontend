import React from 'react'
import dynamic from 'next/dynamic';
const DiscountHero = dynamic(() => import('@/components/discountedTour/DiscountHero'));
const Search = dynamic(() => import('@/components/home/Search'));
const DiscountCards = dynamic(() => import('@/components/discountedTour/DiscountCards'));
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));
const InstagramFeed = dynamic(() => import('@/components/reuseable/InstagramFeed'));
function page() {
    return (
        <>
            <DiscountHero />
            <Search />
            <DiscountCards />
            <Reviews />
            <Journey />
            <InstagramFeed />
        </>
    )
}

export default page;
