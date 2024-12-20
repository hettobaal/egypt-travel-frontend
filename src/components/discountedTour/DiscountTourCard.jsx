import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import TourCardsCarousel from '../reuseable/TourCardsCarousel';
function DiscountTourCard({ ToursData }) {

    const calculateAverageRating = (reviews) => {
      
        if (!reviews?.length) return 0;
        const totalRating = reviews?.reduce((sum, review) => sum + review?.rating, 0);
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

    return (
        <>
            <section className='w-full md:grid hidden xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-5'>
                {
                    ToursData?.map((item, index) => {
                        const strikePrice = item?.discountAmount > 0 && item?.priceAdult
                        const price = item?.discountAmount > 0 ? item?.adultPriceAfterDiscount : item?.priceAdult
                        const averageRating = calculateAverageRating(item?.reviewsId);
                        return (
                            <Link
                                prefetch={false}
                                key={index}
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
                                            width={700}
                                            height={200}
                                            loading='lazy'
                                            alt="Popular Tour"
                                        />

                                        {item?.tag && <Button className='bg-amber hover:bg-amber px-6 -mt-4 h-8 mx-auto rounded-full'>
                                            {item?.tag}
                                        </Button>}
                                    </CardHeader>
                                    <CardBody className="py-6 px-2 flex flex-col justify-between h-full ">
                                        <div  >
                                            <h4 className='text-black font-bold sm:text-xl text-lg leading-tight'>
                                                {item?.title}
                                            </h4>
                                            <p className='mt-2 text-black font-medium text-base'>
                                                {item?.description}
                                            </p>
                                        </div>
                                        <div className='mt-2'>
                                            {
                                                item?.discountAmount > 0 && <h4 className="w-max text-base font-semibold text-black relative">
                                                    <span className="line-through text-black">
                                                        From ${strikePrice}
                                                    </span>
                                                    <span
                                                        className="absolute  inset-0 h-px bg-amber top-[50%]"
                                                    ></span>
                                                </h4>
                                            }
                                            <h5 className='text-amber font-bold sm:text-xl text-lg'>Away {price} {` `} <span className='text-[#363636] font-normal text-base '> per person</span></h5>
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
                        )
                    })
                }
            </section>
            <TourCardsCarousel data={ToursData} />
        </>
    )
}

export default DiscountTourCard;
