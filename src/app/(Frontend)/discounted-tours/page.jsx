import React from 'react'
import dynamic from 'next/dynamic';
import { getDiscountTours } from '@/lib/siteApis';
import DiscountHero from '@/components/discountedTour/DiscountHero';
import Search from '@/components/home/Search';
import DiscountCards from '@/components/discountedTour/DiscountCards';
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
