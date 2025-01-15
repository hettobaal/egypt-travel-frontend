import React from 'react'
import dynamic from 'next/dynamic';
import AboutHero from '@/components/about/AboutHero';
import AboutVideo from '@/components/about/AboutVideo';
import AboutJourney from '@/components/about/AboutJourney';
import AboutClients from '@/components/about/AboutClients';
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));
const InstagramFeed = dynamic(() => import('@/components/reuseable/InstagramFeed'));



export const metadata = {
    title: 'Agypten',
    description: 'Agypten',
    // openGraph: {
    //   title: 'Website Design, Custom Development & SEO Services',
    //   description: 'Infusion is a reliable website design, development, and SEO services company. We offer custom solutions to grow your business in digital marketing competition.',
    //   url: 'https://infusiontechnologies.co/',
    //   images: [
    //     {
    //       url: 'https://infusiontechnologies.co/ogImages/homepageOg.webp',
    //       secureUrl: 'https://infusiontechnologies.co/ogImages/homepageOg.webp',
    //       width: 1200,
    //       height: 630,
    //       alt: 'Preview image for Infusion Tech',
    //     }
    //   ],
    //   site_name: 'Infusion Technologies',
    // },
    // alternates: {
    //   canonical: 'https://infusiontechnologies.co/',
    // },

};


function page() {
    return (
        <>
            <AboutHero />
            {/* <AboutVideo />
            <AboutJourney />
            <AboutClients /> */}
            <Reviews />
            <Journey />
            <InstagramFeed />
        </>
    )
}

export default page;
