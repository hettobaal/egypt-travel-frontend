"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { images } from '@/asset/carouselImages';
import './style.css'

function DetailMobileCarousel() {
    return (
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            spaceBetween={20}
            loop
            modules={[Pagination, Navigation]}
            className="mySwiper custom-pagination"
        >
            {
                images?.map((item, index) => {
                    return (
                        <SwiperSlide

                            key={index}>
                            <Image
                                className='mx-auto'
                                src={item?.pic}
                                width={800}
                                height={500}
                                loading='lazy'
                                alt={`detail ${index}`}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default DetailMobileCarousel;
