"use client"
import React, { useRef } from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Button } from '../ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
function TourCardsCarousel({ data }) {



    const calculateAverageRating = (reviews) => {
        if (!reviews?.length) return 0;
        const totalRating = reviews?.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / reviews?.length;
    };

    const renderStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math?.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {Array.from({ length: fullStars }).map((_, index) => (
                    <IoStar key={`full-${index}`} color='#FFC107' size={20} />
                ))}
                {halfStar && <IoStarHalf key="half" color='#FFC107' size={20} />}
                {Array.from({ length: emptyStars }).map((_, index) => (
                    <IoStarOutline key={`empty-${index}`} color='#FFBB4A' size={20} />
                ))}
            </>
        );
    };

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
                        const strikePrice = item?.discountAmount > 0 && item?.priceAdult
                        const price = item?.discountAmount > 0 ? item?.adultPriceAfterDiscount : item?.priceAdult
                        const averageRating = calculateAverageRating(item?.reviewsId);
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                <Link
                                    prefetch={false}
                                    className='w-full'
                                    href={`/tourdetail/${item?.slug}`}
                                >
                                    <Card
                                        shadow='none'
                                        className="h-full w-full p-0 border-2 border-[#ECECEC] rounded-[17.6px]"
                                    >
                                        <CardHeader className="p-0  flex-col items-start">
                                            <Image
                                                src={`https://aegyptenmalanders.de/imageslocal/tour/${item?.cardImage}`}
                                                width={800}
                                                height={400}
                                                loading='lazy'
                                                alt="Popular Tour"
                                            />
                                            {item?.tag && <Button className='bg-amber hover:bg-amber px-6 -mt-4 h-8 mx-auto rounded-full'>
                                                {item?.tag}
                                            </Button>}
                                        </CardHeader>
                                        <CardBody className="py-6 px-2 flex flex-col justify-between h-full ">
                                            <div  >
                                                <h4 className='text-black font-bold sm:text-xl text-base leading-tight'> {item?.title}</h4>
                                                <p className='mt-2 text-black font-medium sm:text-base text-sm'>
                                                    {item?.description}
                                                </p>
                                            </div>
                                            <div className='mt-2'>
                                                {
                                                    item?.discountAmount > 0 && <h4 className="w-max text-base font-semibold  text-black relative">
                                                        <span className="line-through text-black">
                                                            From ${strikePrice}
                                                        </span>
                                                        <span
                                                            className="absolute  inset-0 h-px bg-amber top-[50%]"
                                                        ></span>
                                                    </h4>
                                                }
                                                <h5 className='text-amber font-bold sm:text-xl text-base'>Away {price} {` `} <span className='text-[#363636] font-normal sm:text-base text-sm '> per person</span></h5>
                                                <div className='mt-1 flex gap-x-2 items-center'>
                                                    {renderStars(averageRating)}
                                                    <h6 className='text-base font-bold'>
                                                        {averageRating?.toFixed(1)}
                                                    </h6>
                                                    <span className='text-sm text-gray-500'>
                                                        ({item?.reviewsId?.length || 0} reviews)
                                                    </span>
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
