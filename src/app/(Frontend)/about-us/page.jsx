import React from 'react'
import dynamic from 'next/dynamic';
import AboutHero from '@/components/about/AboutHero';
import AboutVideo from '@/components/about/AboutVideo';
import AboutJourney from '@/components/about/AboutJourney';
import AboutClients from '@/components/about/AboutClients';
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));
const InstagramFeed = dynamic(() => import('@/components/reuseable/InstagramFeed'));
function page() {
    return (
        <>
            <AboutHero />
            <AboutVideo />
            <AboutJourney />
            <AboutClients />
            <Reviews />
            <Journey />
            <InstagramFeed />
        </>
    )
}

export default page;
