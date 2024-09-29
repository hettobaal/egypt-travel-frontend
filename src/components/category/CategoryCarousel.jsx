"use client"
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';

function CategoryCarousel({ id, data }) {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideClick = (index) => {
        setActiveIndex(index);
        if (typeof window !== 'undefined') {
            sessionStorage?.setItem('activeIndex', index);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && swiperInstance) {
            const storedIndex = sessionStorage?.getItem('activeIndex');
            if (storedIndex !== null) {
                swiperInstance?.slideTo(parseInt(storedIndex, 10), 0, false);
            }
        }
    }, [swiperInstance]);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <main className='w-full xl:hidden flex justify-end items-end -mb-2'>
            <Swiper
                onSwiper={setSwiperInstance}
                onSlideChange={handleSlideChange}
                spaceBetween={20}
                loop={false}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link
                            scroll={false}
                            onClick={() => handleSlideClick(index)}
                            href={`/category/${item?.slug}`}
                            className={`${id === item?.slug && 'bg-white'} flex xl:flex-row flex-col justify-center items-center gap-x-2 gap-y-2 py-4 px-8 rounded-t-xl  whitespace-nowrap`}
                        >
                            <Image
                                src={id === item?.slug ? '/images/worldBlack.svg' : '/images/world.svg'}
                                width={20}
                                height={21}
                                loading="lazy"
                                alt={id === item?.slug ? 'worldBlack' : 'world'}
                            />
                            <h5 className={`md:text-xl text-base font-semibold ${id === item?.slug ? 'text-black' : 'text-white'}`}>
                                {item?.categoryName}
                            </h5>
                        </Link>
                    </SwiperSlide>
                ))}
                {/* Add additional SwiperSlides here if needed */}
            </Swiper>
        </main>
    );
}

export default CategoryCarousel;
