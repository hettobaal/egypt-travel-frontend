"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
// import { images } from '@/asset/carouselImages';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { DialogClose } from '../ui/dialog';
import './style.css'

function DetailCarousel({images}) {
    const carouselRef = useRef(null);

    const handleNext = () => {
        carouselRef?.current?.swiper?.slideNext();

    };

    const handlePrev = () => {
        carouselRef?.current?.swiper?.slidePrev()
    };



    return (
        <div className='relative w-full mx-auto flex justify-center items-center'>
            <div className='w-[60%] max-h-[60%] mx-auto flex justify-center items-center '>
                <Swiper
                    ref={carouselRef}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={false}
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
                                        src={item}
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
            </div>
            <span
                onClick={handlePrev}
                className='cursor-pointer absolute left-10 text-white top-0 bottom-0 flex justify-center items-center'
            >
                <ChevronLeft size={45} strokeWidth={1.25} />
            </span>
            <span
                onClick={handleNext}
                className='cursor-pointer absolute right-10 text-white top-0 bottom-0 flex justify-center items-center'
            >
                <ChevronRight size={45} strokeWidth={1.25} />
            </span>
            <DialogClose asChild>
                <span className='cursor-pointer absolute  text-white -top-4 right-16  flex justify-center items-center border-white border-1 rounded-full py-2 px-2'>
                    <X size={25} strokeWidth={1.25} />
                </span>
            </DialogClose>
        </div>
    )
}

export default DetailCarousel;
