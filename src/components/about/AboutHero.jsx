import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';

function AboutHero() {
    return (
        <section className="relative w-full sm:h-[90vh] h-[80vh] bg-cover bg-center  bg-no-repeat   text-white sm:bg-[url('/images/aboutHero.webp')] bg-[url('/images/aboutHeroMob.webp')]" >
            <div className="sm:block hidden absolute  inset-0 bg-black opacity-50"></div>
            <MaxWidthWrapper className='flex flex-col sm:gap-y-6 gap-y-4 justify-center items-center max-w-screen-md mx-auto h-full   lg:px-0 md:px-8 '>
                <h1 className='md:text-[34px] text-2xl font-medium text-center z-30 '>
                    Dynamisches Vertragsmanagement
                </h1>
                <p className='md:text-[26px] text-[17px] leading-snug font-normal text-center z-30'>
                    Schaffen Sie Erinnerungen Bei Ihrer nächsten Reise
                    Schaffen Sie Erinnerungen Bei Ihrer nächsten Reise
                    Schaffen Sie Erinnerungen Bei Ihrer nächsten Reise
                </p>
            </MaxWidthWrapper>
        </section >
    )
}

export default AboutHero;
