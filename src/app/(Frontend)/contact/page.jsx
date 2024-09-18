import React from 'react'
import dynamic from 'next/dynamic';
const ContactHero = dynamic(() => import('@/components/contact/ContactHero'));
const ContactBook = dynamic(() => import('@/components/contact/ContactBook'));
const OurLocation = dynamic(() => import('@/components/contact/OurLocation'));
const Frequently = dynamic(() => import('@/components/contact/Frequently'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));

function page() {
    return (
        <>
            <ContactHero />
            <ContactBook />
            <OurLocation />
            <Frequently />
            <Journey />
        </>
    )
}

export default page;
