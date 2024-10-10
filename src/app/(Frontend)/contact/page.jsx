import React from 'react'
import dynamic from 'next/dynamic';
import ContactHero from '@/components/contact/ContactHero';
import ContactBook from '@/components/contact/ContactBook';
import OurLocation from '@/components/contact/OurLocation';
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
