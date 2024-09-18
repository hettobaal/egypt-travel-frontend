import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingOne from '../reuseable/HeadingOne';

function OurLocation() {
    return (
        <MaxWidthWrapper className='pt-6 pb-4 px-0'>
            <HeadingOne className='text-center'>
                Our Locations
            </HeadingOne>
            <main className='w-full mt-6'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11733.043939017146!2d72.57971364999999!3d23.0224846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2aa3a7a2b3f1%3A0x6b98c084c01aa577!2sStree%20Swaminarayan%20International%20School!5e0!3m2!1sen!2sin!4v1690641967489!5m2!1sen!2sin"
                    width="100%"
                    className='rounded-md sm:h-[500px] h-[300px]'
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </main>
        </MaxWidthWrapper>
    )
}

export default OurLocation;
