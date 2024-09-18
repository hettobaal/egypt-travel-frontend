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
                    Buchen
                    {` `} <span className='text-amber'>
                        Sie jetzt Ihre
                    </span> {` `}
                    unvergessliche Reise!
                </HeadingOne>
                <Para className='text-ocean'>
                    Embark on an unforgettable travel journey with our expert assistance. Let us handle the details while you focus on creating lasting memories. Our dedicated team is here to ensure your trip is seamless and stress-free from start to finish. Let us turn your travel dreams into reality.
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
