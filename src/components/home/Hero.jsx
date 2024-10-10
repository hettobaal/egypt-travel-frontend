import React from 'react'
import ReactDOM from 'react-dom'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';

function Hero() {
    ReactDOM.preload('/images/testhero.webp', { as: 'image' })
    ReactDOM.preload('/images/testheromob.webp', { as: 'image' })

    return (
        <section className=" w-full sm:h-[90vh] h-[80vh] bg-cover bg-center  bg-no-repeat relative  text-white sm:bg-[url('/images/testhero.webp')] bg-[url('/images/testheromob.webp')]" >
            <MaxWidthWrapper className='flex flex-col sm:gap-y-6 gap-y-4 justify-center items-center max-w-screen-lg mx-auto h-full   lg:px-0 md:px-8'>
                <h1 className='md:text-[34px] text-2xl font-medium text-center '>
                    Dynamisches Vertragsmanagement
                </h1>
                <p className='md:text-[26px] text-[17px] leading-snug font-normal text-center'>
                    Schaffen Sie Erinnerungen Bei Ihrer nächsten Reise
                    Schaffen Sie Erinnerungen Bei Ihrer nächsten Reise
                    Schaffen Sie Erinnerungen Bei Ihrer nächsten Reise
                </p>
            </MaxWidthWrapper>
        </section >
    )
}

export default Hero;
