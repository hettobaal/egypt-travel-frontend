import React from 'react';
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import Para from '../reuseable/Para';

function ContactHero() {
    return (
        <section className="relative w-full sm:h-[90vh] h-[80vh] bg-cover bg-center bg-no-repeat text-white sm:bg-[url('/images/contactHero.webp')] bg-[url('/images/contactHeroMob.webp')]">
            <div className="sm:block hidden absolute  inset-0 bg-black opacity-50"></div>
            <MaxWidthWrapper className='relative flex flex-col sm:gap-y-3 gap-y-2 justify-center items-center max-w-screen-md mx-auto h-full lg:px-0 md:px-8'>
                <h1 className='md:text-[65px] text-2xl leading-tight font-semibold text-center'>
                    Kontaktiere uns
                </h1>
                <Para className='text-center sm:text-xl text-base'>
                    Feel free to reach out to us at any time! Whether you have questions, feedback, or inquiries about our services, our team is here to assist you.
                </Para>
            </MaxWidthWrapper>
        </section>
    );
}

export default ContactHero;
