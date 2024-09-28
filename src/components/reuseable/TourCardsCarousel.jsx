"use client"
import React, { useRef } from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Button } from '../ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import { IoStar } from 'react-icons/io5';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
function TourCardsCarousel({ data }) {


    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.swiper.slideNext();
    };

    return (
        <section className='md:hidden flex items-center justify-center gap-x-2 '>
            <button
                onClick={handlePrev}
                className='bg-navy p-2.5 rounded-full'>
                <FaArrowLeftLong color='#ffffff' size={18} />
            </button>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop
                ref={swiperRef}
            >
                {
                    data?.map((item, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                <Link
                                    className='w-full'
                                    href={`/tourdetail/${item?.tourId?.slug}`}
                                >
                                    <Card
                                        shadow='none'
                                        className="h-full w-full p-0 border-2 border-[#ECECEC] rounded-[17.6px]"
                                    >
                                        <CardHeader className="p-0  flex-col items-start">
                                            <Image
                                                src={`https://tourbuckettest.s3.amazonaws.com/${item?.tourId?.cardImage}`}
                                                width={800}
                                                height={400}
                                                loading='lazy'
                                                alt="Popular Tour"
                                            />
                                            {item?.tourId?.tag && <Button className='bg-amber hover:bg-amber px-6 -mt-4 h-8 mx-auto rounded-full'>
                                                {item?.tourId?.tag}
                                            </Button>}
                                        </CardHeader>
                                        <CardBody className="py-6 px-2 flex flex-col justify-between h-full ">
                                            <div  >
                                                <h4 className='text-black font-bold sm:text-xl text-base leading-tight'> {item?.tourId?.title}</h4>
                                                <p className='mt-2 text-black font-medium sm:text-base text-sm'>
                                                    {item?.tourId?.description}
                                                </p>
                                            </div>
                                            <div className='mt-2'>
                                                {
                                                    item?.tourId?.strikePrice && <h4 className="w-max text-base font-semibold  text-black relative">
                                                        <span className="line-through text-black">
                                                            From ${item?.tourId?.strikePrice}
                                                        </span>
                                                        <span
                                                            className="absolute  inset-0 h-px bg-amber top-[50%]"
                                                        ></span>
                                                    </h4>
                                                }
                                                <h5 className='text-amber font-bold sm:text-xl text-base'>Away {item?.tourId?.priceAdult} {` `} <span className='text-[#363636] font-normal sm:text-base text-sm '> per person</span></h5>
                                                <div className='mt-1 flex gap-x-2 items-center'>
                                                    {
                                                        Array.from({ length: 5 }, (_, index) => (
                                                            <IoStar key={index} color='#FFBB4A' size={20} />
                                                        ))
                                                    }
                                                    <h6 className='text-base font-bold'>
                                                        5
                                                    </h6>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
            <button
                onClick={handleNext}
                className='bg-navy p-2.5 rounded-full'>
                <FaArrowRightLong color='#ffffff' size={18} />
            </button>
        </section>
    )
}

export default TourCardsCarousel
