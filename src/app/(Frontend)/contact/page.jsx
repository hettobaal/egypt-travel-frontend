import React from 'react'
import dynamic from 'next/dynamic';
import ContactHero from '@/components/contact/ContactHero';
import ContactBook from '@/components/contact/ContactBook';
import OurLocation from '@/components/contact/OurLocation';
const Frequently = dynamic(() => import('@/components/contact/Frequently'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));

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
            <ContactHero />
            <ContactBook />
            {/* <OurLocation /> */}
            {/* <Frequently /> */}
            <Journey />
        </>
    )
}

export default page;
