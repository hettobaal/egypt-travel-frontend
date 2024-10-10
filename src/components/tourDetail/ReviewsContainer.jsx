"use client";
import React, { useState, useEffect } from 'react';
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingThree from '../reuseable/HeadingThree';
import Para from '../reuseable/Para';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';



function ReviewsContainer({ ReviewsData }) {
    const [selectedStars, setSelectedStars] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState(ReviewsData);

    const toggleStarFilter = (star) => {
        if (star === 'all') {
            setSelectedStars([]);
        } else {
            if (selectedStars.includes(star)) {
                setSelectedStars(selectedStars.filter(s => s !== star));
            } else {
                setSelectedStars([...selectedStars, star]);
            }
        }
    };

    useEffect(() => {
        if (selectedStars?.length === 0) {
            setFilteredReviews(ReviewsData);
        } else {
            setFilteredReviews(ReviewsData.filter(review => selectedStars.includes(review.rating)));
        }
    }, [selectedStars]);

    return (
        <MaxWidthWrapper className='flex flex-col sm:gap-y-6 gap-y-4 sm:mt-10 mt-6'>
            <div>
                <HeadingThree>Customers Reviews</HeadingThree>
            </div>
            <div className='flex lg:flex-row flex-col sm:gap-y-8 gap-y-6 gap-x-16'>
                <div className='flex flex-col gap-y-4'>
                    <span className='flex gap-x-3 items-center whitespace-nowrap'>
                        <input
                            className='cursor-pointer w-5 h-5 border-1 border-black'
                            type="checkbox"
                            onChange={() => toggleStarFilter('all')}
                            checked={selectedStars?.length === 0}
                        />
                        <Para className={'text-[#1A2B49]'}>All Star ratings</Para>
                    </span>

                    {[5, 4, 3, 2, 1].map(star => (
                        <span key={star} className='flex gap-x-3 items-center whitespace-nowrap '>
                            <input
                                className='cursor-pointer w-5 h-5 border-1 border-black'
                                type="checkbox"
                                onChange={() => toggleStarFilter(star)}
                                checked={selectedStars.includes(star)}
                            />
                            <Para>{`${star} stars`}</Para>
                            <span className='flex gap-x-2'>
                                {Array.from({ length: star }).map((_, i) => (
                                    <IoIosStar key={i} size={20} color="#FFC107" />
                                ))}
                                {Array.from({ length: 5 - star }).map((_, i) => (
                                    <IoIosStarOutline key={i} size={20} />
                                ))}
                            </span>
                        </span>
                    ))}
                </div>
                <div className='w-full flex flex-col gap-y-4'>
                    {filteredReviews?.length > 0 ? (
                        filteredReviews?.map(review => {
                            const date = review?.reviewDate;
                            const dateOnly = date?.split("T")[0];

                            return (
                                <div key={review._id} className='flex flex-col gap-y-2 border-b-2 border-[#e0e0e0] pb-2'>
                                    <span className="flex gap-x-1.5">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <IoIosStar key={i} size={22} color="#FFC107" />
                                        ))}
                                        {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                            <IoIosStarOutline key={i} size={22} />
                                        ))}
                                    </span>
                                    <span>
                                        <HeadingThree className='text-[22px]'>
                                            {review?.firstName}  {' '}  {review?.lastName}
                                        </HeadingThree>
                                        <Para>
                                            {dateOnly}
                                        </Para>
                                    </span>
                                    <Para>
                                        {review?.reviewText}
                                    </Para>
                                </div>
                            );
                        })
                    ) : (
                        <Para>No reviews available for the selected rating.</Para>
                    )}
                </div>
            </div>
        </MaxWidthWrapper>

    );
}

export default ReviewsContainer;
