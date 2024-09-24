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
        sessionStorage?.setItem('activeIndex', index);
    };

    useEffect(() => {
        const storedIndex = sessionStorage?.getItem('activeIndex');
        if (storedIndex !== null && swiperInstance) {
            swiperInstance?.slideTo(parseInt(storedIndex, 10), 0, false);
        }
    }, [swiperInstance]);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper?.activeIndex); 
    };

    return (
        <main
            className='xl:hidden flex justify-end items-end -mb-2'
        >
            <Swiper
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                className='flex justify-end items-end '
                onSlideChange={handleSlideChange}
                spaceBetween={20}
                // allowTouchMove={false}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {

                    data?.map((item, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                            >
                                <Link
                                    scroll={false}
                                    onClick={() => handleSlideClick(index)}
                                    href={`/category/${item?.slug}`}
                                    className={`${id === item?.slug && 'bg-white'} flex xl:flex-row flex-col justify-center items-center gap-x-2 gap-y-2 py-4 px-8 rounded-t-xl  whitespace-nowrap`}>
                                    {
                                        id === item?.slug ?
                                            < Image
                                                src='/images/worldBlack.svg'
                                                width={20}
                                                height={21}
                                                loading='lazy'
                                                alt='worldBlack'
                                            />
                                            :
                                            < Image
                                                src='/images/world.svg'
                                                width={20}
                                                height={21}
                                                loading='lazy'
                                                alt='world'
                                            />
                                    }

                                    <h5
                                        className={`md:text-xl  text-base font-semibold ${id === item?.slug ? 'text-black' : 'text-white'}`}
                                    >
                                        {item?.categoryName}
                                    </h5>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
                <SwiperSlide >
                    <Link
                        scroll={false}
                        onClick={() => handleSlideClick(0, '/category/Action&Abenteuer')}
                        href='/category/Action&Abenteuer'
                        className={`${id === "Action&Abenteuer" && 'bg-white'} flex xl:flex-row flex-col justify-center items-center gap-x-2 gap-y-2 py-4 px-8 rounded-t-xl  whitespace-nowrap`}>
                        {
                            id === "Action&Abenteuer" ?
                                < Image
                                    src='/images/worldBlack.svg'
                                    width={20}
                                    height={21}
                                    loading='lazy'
                                    alt='worldBlack'
                                />
                                :
                                < Image
                                    src='/images/world.svg'
                                    width={20}
                                    height={21}
                                    loading='lazy'
                                    alt='world'
                                />
                        }

                        <h5
                            className={`md:text-xl  text-base font-semibold ${id === 'Action&Abenteuer' ? 'text-black' : 'text-white'}`}
                        >
                            Action & Abenteuer
                        </h5>
                    </Link>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <Link
                        scroll={false}
                        onClick={() => handleSlideClick(1, '/category/Rund-ums-Meer')}
                        href='/category/Rund-ums-Meer'
                        className={`${id === "Rund-ums-Meer" && 'bg-white'}  flex xl:flex-row flex-col justify-center items-center gap-x-2 gap-y-2 py-4 px-8 rounded-t-xl  whitespace-nowrap`}>
                        {
                            id === "Rund-ums-Meer" ?
                                < Image
                                    src='/images/ShellBlack.svg'
                                    width={25}
                                    height={22}
                                    loading='lazy'
                                    alt='ShellBlack'
                                />
                                :
                                < Image
                                    src='/images/shell.webp'
                                    width={25}
                                    height={22}
                                    loading='lazy'
                                    alt='shell'
                                />
                        }
                        <h5
                            className={`md:text-xl  text-base font-semibold ${id === 'Rund-ums-Meer' ? 'text-black' : 'text-white'}`}
                        >
                            Rund ums Meer
                        </h5>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link
                        scroll={false}
                        onClick={() => handleSlideClick(2, '/category/Lands-Leute')}
                        href='/category/Lands-Leute'
                        className={`${id === "Lands-Leute" && 'bg-white'}  flex xl:flex-row flex-col justify-center items-center gap-x-2 gap-y-2 py-4 px-8 rounded-t-xl  whitespace-nowrap`}>
                        {
                            id === "Lands-Leute" ?
                                < Image
                                    src='/images/sunraysBlack.svg'
                                    width={25}
                                    height={22}
                                    loading='lazy'
                                    alt='sunraysBlack'
                                />
                                :
                                < Image
                                    src='/images/sun.svg'
                                    width={25}
                                    height={22}
                                    loading='lazy'
                                    alt='sunrays'
                                />
                        }

                        <h5
                            className={`md:text-xl  text-base font-semibold ${id === 'Lands-Leute' ? 'text-black' : 'text-white'}`}
                        >
                            Lands & Leute
                        </h5>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link
                        scroll={false}
                        onClick={() => handleSlideClick(3, '/category/Familienausflüge')}
                        href='/category/Familienausflüge'
                        className={`${id === "Familienausflüge" && 'bg-white'} f flex xl:flex-row flex-col justify-center items-center gap-x-2 gap-y-2      py-4 px-8 rounded-t-xl  whitespace-nowrap`}>
                        {
                            id === "Familienausflüge" ?
                                < Image
                                    src='/images/starBlack.svg'
                                    width={25}
                                    height={22}
                                    loading='lazy'
                                    alt='starBlack'
                                />
                                :
                                < Image
                                    src='/images/star.svg'
                                    width={25}
                                    height={22}
                                    loading='lazy'
                                    alt='star'
                                />
                        }
                        <h5
                            className={`md:text-xl  text-base font-semibold ${id === 'Familienausflüge' ? 'text-black' : 'text-white'}`}
                        >
                            Familienausflüge
                        </h5>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link
                        scroll={false}
                        href='/category/Kultur'
                        className={`${id === "Kultur" && 'bg-white'}  flex xl:flex-row flex-col justify-center items-center gap-x-2 gap-y-2 py-4 px-8 rounded-t-xl  whitespace-nowrap`}>
                        {
                            id === "Kultur" ?
                                < Image
                                    src='/images/mountainBlack.svg'
                                    width={25}
                                    height={22}
                                    loading='lazy'
                                    alt='mountainBlack'
                                />
                                :
                                < Image
                                    src='/images/mountain.svg'
                                    width={25}
                                    height={22}
                                    loading='lazy'
                                    alt='mountain'
                                />
                        }
                        <h5
                            className={`md:text-xl  text-base font-semibold ${id === 'Kultur' ? 'text-black' : 'text-white'}`}
                        >
                            Kultur
                        </h5>
                    </Link>
                </SwiperSlide> */}
            </Swiper>
        </main>
    )
}

export default CategoryCarousel;
