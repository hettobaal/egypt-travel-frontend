"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './style.css';
import Image from 'next/image';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { IoStar } from 'react-icons/io5';
import Link from 'next/link';
import { reviewData } from '@/asset/ReviewsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';



function ReviewCarousel() {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.swiper.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.swiper.slideNext();
    };



    return (
        <>
            <div className='flex  items-center justify-center gap-x-2 '>
                <button
                    onClick={handlePrev}
                    className='lg:block hidden bg-navy p-2 rounded-full'>
                    <ChevronLeft size={28} strokeWidth={1.25} color='#FFFFFF' />
                </button>
                <Swiper
                    className="my-swiper "
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    loop={true}
                    ref={swiperRef}
                    spaceBetween={10}
                    pagination={true}
                    modules={[Pagination]}
                >
                    {
                        reviewData?.map((item, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                >
                                    <Link
                                        target='_blank'
                                        prefetch={false}
                                        href={item?.url}
                                    >
                                        <Card
                                            radius="none"
                                            shadow="none"
                                            className="rounded-[20.44px] bg-ice sm:pt-6 pt-6 sm:pb-4 pb-2 2xl:px-4 px-1 flex flex-col h-full justify-between items-center "
                                        >
                                            <div>
                                                <CardHeader className="p-0 flex justify-center items-center ">
                                                    <div className="flex justify-center items-center flex-col">
                                                        <Image
                                                            className="rounded-full"
                                                            src={item?.image}
                                                            loading="lazy"
                                                            width={60}
                                                            height={50}
                                                            alt="Reviews"
                                                        />
                                                        <div className="pt-2 pb-1 text-center">
                                                            <h2 className=" font-bold text-xl text-navy">
                                                                {item?.name}
                                                            </h2>
                                                        </div>
                                                        <div className="flex gap-x-0 items-center">
                                                            <h4 className="text-navy text-lg font-bold mr-2">
                                                                {item?.rating}
                                                            </h4>
                                                            {[...Array(5)].map((_, starIndex) => (
                                                                <IoStar key={starIndex} color='#FFC107' size={23} />
                                                            ))}
                                                        </div>

                                                        <div>
                                                            <p className="text-[#7D7D7D] text-[15px] font-medium mt-1">
                                                                {item?.date}
                                                            </p>
                                                        </div>
                                                        <div className="mt-1 flex justify-center items-center sm:px-4 px-2">
                                                            <p className="text-[#2C2C2C] font-normal sm:text-base text-sm text-center">
                                                                {item?.review}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </CardHeader>
                                            </div>
                                            <div className="flex justify-center items-center ">
                                                <CardBody className="flex flex-col justify-between  flex-grow items-center text-center px-2 max-w-[330px]">
                                                    <p className="text-navy     font-extrabold  text-[17px]">
                                                        Read More
                                                    </p>
                                                </CardBody>
                                            </div>
                                        </Card>

                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <button
                    onClick={handleNext}
                    className='lg:block hidden bg-navy p-2 rounded-full'>
                    <ChevronRight color='#ffffff' size={28} strokeWidth={1.25} />
                </button>

            </div>
        </>

    )
}

export default ReviewCarousel
