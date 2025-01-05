import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingOne from '../reuseable/HeadingOne';
import Para from '../reuseable/Para';
import Image from 'next/image';
import ContactForm from './ContactForm';

function ContactBook() {
    return (
        <MaxWidthWrapper className='flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center gap-x-4  sm:gap-y-12 gap-y-8 sm:py-10 py-6'>
            <div className='lg:w-1/2 lg:max-w-lg w-full flex flex-col sm:gap-y-6 gap-y-4 lg:text-start text-center'>
                <HeadingOne>
                    Abenteuer
                    {` `} <span className='text-amber'>
                        erwarten Sie–jetzt
                    </span> {` `}
                    Ihre Ausflüge sichern!
                </HeadingOne>
                <Para className='text-ocean'>
                    Buchen Sie jetzt Ihre unvergesslichen und erlebnisreichen Ausflüge in Ägypten von Hurghada aus! Entdecken Sie die faszinierenden Schätze des alten Ägyptens, erleben Sie aufregende Wüstensafaris, und genießen Sie entspannende Stunden an den traumhaften Stränden des Roten Meeres. Von den majestätischen Pyramiden in Gizeh bis zu den Unterwasserwundern im Roten Meer – Ihre Abenteuer beginnen direkt in Hurghada. Sichern Sie sich noch heute Ihr unvergessliches Erlebnis!
                </Para>
                <Image
                    src='/images/contactBook.webp'
                    className='rounded-[11px] mx-auto'
                    width={500}
                    height={300}
                    loading='lazy'
                    alt='contact'
                />
            </div>
            <ContactForm />
        </MaxWidthWrapper>
    )
}

export default ContactBook;
