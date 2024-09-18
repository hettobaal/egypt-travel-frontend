import React from 'react'
import dynamic from 'next/dynamic';
const AboutHero = dynamic(() => import('@/components/about/AboutHero'));
const AboutVideo = dynamic(() => import('@/components/about/AboutVideo'));
const AboutJourney = dynamic(() => import('@/components/about/AboutJourney'));
const AboutClients = dynamic(() => import('@/components/about/AboutClients'));
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
