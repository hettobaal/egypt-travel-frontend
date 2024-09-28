"use client"
import React, { useState } from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import HeadingOne from '../reuseable/HeadingOne'
import Image from 'next/image'
import DetailModal from './DetailModal'
import DetailMobileCarousel from './DetailMobileCarousel'

function DetailHero({ data }) {

    const [selectedImage, setSelectedImage] = useState(null);
    const [openModal, setopenModal] = useState(false);

    const handleImageClick = (imageUrl) => {
      setSelectedImage(imageUrl);
      console.log("imageUrl ", imageUrl);
      
    };

    const imageUrls = [
        "https://picsum.photos/seed/image1/600/400",
        "https://picsum.photos/seed/image2/600/400",
        "https://picsum.photos/seed/image3/600/400",
        "https://picsum.photos/seed/image4/600/400",
        "https://picsum.photos/seed/image5/600/400",
        "https://picsum.photos/seed/image6/600/400",
        "https://picsum.photos/seed/image7/600/400",
        "https://picsum.photos/seed/image8/600/400",
        "https://picsum.photos/seed/image9/600/400",
        "https://picsum.photos/seed/image10/600/400"
    ];


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
                {/* <div className='md:flex hidden gap-x-2 mt-6'>
                    <span>
                        <Image
                            src='/images/d1.webp'
                            width={600}
                            height={600}
                            loading='lazy'
                            alt='detail'
                            className='h-full w-full object-cover'
                        />
                    </span>
                    <span>
                        <Image
                            src='/images/d2.webp'
                            width={500}
                            height={200}
                            loading='lazy'
                            alt='detail'
                            className='h-full w-full object-cover'
                        />
                    </span>
                    <span className='flex flex-col gap-y-2'>
                        <Image
                            src='/images/d3.webp'
                            width={600}
                            height={200}
                            loading='lazy'
                            alt='detail'
                            className='h-full w-full object-cover'
                        />
                        <span className='relative'>
                            <Image
                                src='/images/d4.webp'
                                width={600}
                                height={200}
                                loading='lazy'
                                alt='detail'
                                className='h-full w-full object-cover '
                            />
                            <DetailModal />
                        </span>
                    </span>

                </div> */}
                <div>

                    <div className='grid grid-cols-4 grid-rows-2 gap-4 br'>
                        <div className='col-span-2 row-span-2  br'>
                            <Image
                                src={imageUrls[0]}
                                width={100}
                                height={100}
                                alt='abc'

                                className='w-full h-full'

                                onClick={() => handleImageClick(imageUrls[0])}/>
                        </div>
                        <div className='col-span-1 row-span-2 border  border-blue'>
                            <Image
                                src={imageUrls[1]}
                                width={100}
                                height={100}
                                alt='abc'
                                className='w-full h-full'
                                onClick={() => handleImageClick(imageUrls[1])}

                            />
                        </div>
                        <div className='col-span-1 row-span-1  border  border-black'>
                            <Image
                                src={imageUrls[2]}
                                width={100}
                                height={100}
                                alt='abc'
                                className='w-full h-full'
                                onClick={() => handleImageClick(imageUrls[2])}

                            />
                        </div>
                        <div className='col-start-4 row-start-2 border relative  border-green-600'>
                            <Image
                                src={imageUrls[3]}
                                width={100}
                                height={100}
                                alt='abc'
                                className='w-full h-full relative'
                                onClick={() => handleImageClick(imageUrls[3])}
                            />
                            <DetailModal   openModal={openModal} setopenModal={setopenModal}  images={imageUrls} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                        </div>

                    </div>


                    {/* {imageUrls.map((image, i)=>{
        return(

            <div key={i}>
<Image
    src={image}
    width={100}
    height={100}
    alt='abc'
    />

            </div>
        )
    })} */}

                </div>

            </MaxWidthWrapper>
            <div className='md:hidden  '>
                <DetailMobileCarousel />
            </div>
            <MaxWidthWrapper>
                <div className='md:hidden flex  flex-col sm:gap-y-2.5 gap-y-1 mt-4'>
                    <div>
                        <HeadingOne className='md:text-4xl sm:text-4xl text-2xl'>
                            Hurghada: Dolphin Watching Boat Tour with Snorkeling & Lunch
                        </HeadingOne>
                    </div>
                </div>
            </MaxWidthWrapper>

        </section>
    )
}

export default DetailHero
