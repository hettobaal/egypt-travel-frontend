"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { DialogClose } from '../ui/dialog';
import './style.css'
import { Pagination, Navigation } from 'swiper/modules';

function DetailCarousel({ images, selectedImage, setSelectedImage }) {
    const carouselRef = useRef(null);
    const selectedIndex = images?.indexOf(selectedImage);


    const handleNext = () => {
        carouselRef?.current?.swiper?.slideNext();

    };

    const handlePrev = () => {
        carouselRef?.current?.swiper?.slidePrev()
    };



    return (
        <div className='relative w-full mx-auto flex justify-center items-center max-h-[60vh] h-[60vh]'>
            <div className='w-[80%] max-h-[60vh] h-[60vh] mx-auto flex justify-center items-center '>
                <Swiper
                    ref={carouselRef}
                    initialSlide={selectedIndex}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={false}
                    spaceBetween={20}
                    loop
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        images?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='h-full flex items-center justify-center max-h-[80vh]'>
                                        <Image
                                            className='mx-auto'
                                            src={item}
                                            // src='https://fastly.picsum.photos/id/385/600/400.jpg?hmac=FzH4BJIpsE8XYDW8tWE6kHgIMm0LKCtG8UqNAjHkaJY'
                                            width={800}
                                            height={300}
                                            loading='lazy'
                                            alt={`detail ${index}`}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
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
            <DialogClose asChild
                onClick={() => { setSelectedImage(null); }}
            >
                <span className='cursor-pointer absolute text-white -top-4 right-16 flex justify-center items-center rounded-full py-2 px-2'>
                    <X size={25} strokeWidth={1.25} />
                </span>
            </DialogClose>
        </div>
    )
}

export default DetailCarousel;
