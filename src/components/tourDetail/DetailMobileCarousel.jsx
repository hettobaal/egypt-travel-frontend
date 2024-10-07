"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import './style.css'

function DetailMobileCarousel({ imageUrls }) {
    const [currentIndex, setCurrentIndex] = useState(1);
    return (
        <div className=' relative w-full mx-auto flex justify-center items-center h-full'>
            <div className='w-full sm:max-h-[55vh] max-h-[45vh] sm:h-[55vh] h-[45vh] mx-auto flex justify-center items-center '>
                <Swiper
                    pagination={{
                        type: 'fraction',
                        clickable: true,
                    }}
                    navigation={true}
                    spaceBetween={20}
                    onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
                    loop
                    modules={[Navigation]}
                    className="mySwiper custom-pagination w-full h-full"
                >
                    {
                        imageUrls?.map((item, index) => {
                            return (
                                <SwiperSlide
                                    key={index}>
                                    <div className='h-full flex items-center justify-center sm:max-h-[55vh] max-h-[45vh]'>
                                        <Image
                                            className='mx-auto w-full h-full '
                                            src={item}
                                            width={800}
                                            height={500}
                                            loading='lazy'
                                            alt={`detail ${index}`}
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white z-20 bg-black/50 px-4 py-2 rounded-lg">
                    <span>
                        {currentIndex} / {imageUrls?.length}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DetailMobileCarousel;
