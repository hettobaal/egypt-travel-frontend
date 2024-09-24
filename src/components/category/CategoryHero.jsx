import React from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import CategoryCarousel from './CategoryCarousel';

async function CategoryHero({ id, data }) {

    const currentData = data?.find(item => {
        return item?.slug?.toLowerCase() === id?.toLowerCase();
    });

    // console.log("currentData", currentData);


    const heroImageDesktop = `https://drive.google.com/thumbnail?id=${currentData?.categoryImage}&sz=w1000&v=${Date.now()}`
    // const heroImageMobile = currentData
    //     ? `https://drive.google.com/thumbnail?id=${currentData?.categoryImage}&sz=w500&v=${Date.now()}`
    //     : '/images/aboutHeroMob.webp';

    // console.log("heroImageDesktop", heroImageDesktop);

    const backgroundImageStyle = {
        backgroundImage: `url(${heroImageDesktop})`,
    };

    console.log("backgroundImageStyle", backgroundImageStyle);

    // sm:bg-[url('${heroImageDesktop})]
    return (
        <div
            style={backgroundImageStyle} // Use inline style for background image
            className="sm:h-[90vh] h-[80vh] bg-cover bg-center bg-no-repeat relative text-white flex flex-col justify-end items-center"


        >
            <MaxWidthWrapper className='flex flex-col sm:gap-y-6 gap-y-4 justify-center items-center max-w-screen-lg mx-auto h-full   lg:px-0 md:px-8 mt-8'
            >
                <h3 className='sm:text-xl text-base font-medium '>
                    Dynamisches Vertragsmanagement
                </h3>
                <h1 className='md:text-[65px] text-2xl leading-tight font-semibold text-center'>
                    Sammeln Sie Erinnerungen auf Ihrer Ägyptenreise
                </h1>
                <Link href='/' className='sm:mt-2 mt-1'>
                    <Button className='bg-amber rounded-full px-8 h-12 hover:bg-amber text-base'>
                        BOOK A TRIP
                    </Button>
                </Link>

            </MaxWidthWrapper>
            <MaxWidthWrapper className='' >
                <div className='xl:flex hidden justify-between '>
                    {
                        data?.map((item, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={`/category/${item?.slug}`}
                                    scroll={false}
                                    className={`${id === item?.slug && 'bg-white'} flex justify-center items-center gap-x-2     py-2 px-8 rounded-t-xl  whitespace-nowrap`}>
                                    {
                                        id === item?.slug ?
                                            < Image
                                                src='/images/worldBlack.svg'
                                                width={20}
                                                height={21}
                                                loading='lazy'
                                                alt='worldBlack'
                                            />
                                            :
                                            < Image
                                                src='/images/world.svg'
                                                width={20}
                                                height={21}
                                                loading='lazy'
                                                alt='world'
                                            />
                                    }

                                    <h5
                                        className={`text-xl font-semibold ${id === item?.slug ? 'text-black' : 'text-white'}`}
                                    >
                                        {item?.categoryName}
                                    </h5>
                                </Link>
                            )
                        })
                    }
                </div>
                <CategoryCarousel id={id} data={data} />
            </MaxWidthWrapper>
        </div >
    )
}

export default CategoryHero;
