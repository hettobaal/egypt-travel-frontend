"use client"
import React, { useState } from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import HeadingOne from '../reuseable/HeadingOne'
import Image from 'next/image'
import dynamic from 'next/dynamic';
const DetailModal = dynamic(() => import('./DetailModal'), {
    loading: () => <div>Loading...</div>,
});
const DetailMobileCarousel = dynamic(() => import('./DetailMobileCarousel'), {
    loading: () => <div>Loading...</div>,
});

function DetailHero({ data }) {


    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const imageUrls = data?.tourImages?.map((item) => {
        return (
            `https://aegyptenmalanders.de/imageslocal/tour/${item}`
        )
    })


    return (

        <section className='md:mt-[100px] mt-[70px]'>
            <MaxWidthWrapper>
                <div className='md:flex hidden flex-col sm:gap-y-2.5 gap-y-1'>
                    <div>
                        <HeadingOne className='md:text-4xl sm:text-4xl text-2xl'>
                            {data?.title}
                        </HeadingOne>
                    </div>
                </div>
                <div>

                    <div className='md:grid hidden grid-cols-4 grid-rows-2 gap-4 md:mt-4'>
                        <div className='col-span-2 row-span-2  cursor-pointer'>
                            <Image
                                src={imageUrls[0]}
                                width={1000}
                                height={600}
                                alt='Agypten'
                                className='w-full h-full'
                                onClick={() => handleImageClick(imageUrls[0])} />
                        </div>
                        <div className='col-span-1 row-span-2 cursor-pointer'>
                            <Image
                                src={imageUrls[1]}
                                width={1000}
                                height={600}
                                alt='Agypten'
                                className='w-full h-full object-cover'
                                onClick={() => handleImageClick(imageUrls[1])}

                            />
                        </div>
                        <div className='col-span-1 row-span-1 cursor-pointer'>
                            <Image
                                src={imageUrls[2]}
                                width={1000}
                                height={600}
                                alt='Agypten'
                                className='w-full h-full' onClick={() => handleImageClick(imageUrls[2])}

                            />
                        </div>
                        <div className='col-start-4 row-start-2  relative cursor-pointer  '>
                            <Image
                                src={imageUrls[3]}
                                width={1000}
                                height={600}
                                alt='Agypten'
                                className='w-full h-full relative'
                                onClick={() => handleImageClick(imageUrls[3])}
                            />
                            <DetailModal images={imageUrls} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                        </div>
                    </div>
                </div>

            </MaxWidthWrapper>
            <div className='md:hidden  '>
                <DetailMobileCarousel imageUrls={imageUrls} />
            </div>
            <MaxWidthWrapper>
                <div className='md:hidden flex  flex-col sm:gap-y-2.5 gap-y-1 mt-4'>
                    <div>
                        <HeadingOne className='md:text-4xl sm:text-4xl text-2xl'>
                            {data?.title}
                        </HeadingOne>
                    </div>
                </div>
            </MaxWidthWrapper>

        </section>
    )
}

export default DetailHero
