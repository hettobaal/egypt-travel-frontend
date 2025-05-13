"use client"
import React from 'react'
import Para from '../reuseable/Para';
import { Button } from '../ui/button';

function DiscountCard({ data }) {
    const { priceAdult, discountAmount } = data;
console.log("data", data.priceAdult);

    const handleScroll = () => {
        const bookingFormElement = document?.getElementById('booking-form');
        if (bookingFormElement) {
            bookingFormElement?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const tourPrice = data?.adultPriceAfterDiscount > 0 ? data?.adultPriceAfterDiscount : data?.priceAdult;

    const discountPercentage = priceAdult > 0
        ? ((discountAmount / priceAdult) * 100).toFixed(0)
        : null;

    const strikePrice = discountAmount > 0 && data?.priceAdult


    return (
        <div className='lg:w-[40%] w-full'>
            <div className='w-full flex flex-col gap-y-2  border-[#fbdbb3] border-2 '>
                <div className='bg-[#fbdbb3] py-2 px-3'>
                    {

                        data?.discountAmount > 0 && (
                            <h4 className='text-end text-amber font-semibold text-lg'>
                                bis zu  {discountPercentage}% sparen
                            </h4>
                        )
                    }

                </div>
                <div className='py-2 px-4 flex flex-col gap-y-2'>
                    <span className='flex justify-between gap-x-2 items-center'>
                        <span>
                            {
                                discountAmount > 0 && <Para className='text-slate font-semibold'>
                                    Ab {strikePrice}€
                                </Para>
                            }

                            <h4 className=' text-amber font-bold text-[22px]'>
                                € {tourPrice}
                            </h4>
                            <Para className='text-slate font-semibold'>
                                Pro Person
                            </Para>
                        </span>
                        <span>
                            <Button
                                onClick={handleScroll}
                                className='w-max mx-auto rounded-full bg-navy hover:bg-navy px-10 h-11'>
                                Jetzt buchen
                            </Button>
                        </span>
                    </span>
                    <span>
                        <Para className='font-medium text-ocean'>
                            <span className='text-amber'>
                                Reserve now & pay later
                            </span>
                            {` `} to book your spot and pay nothing today
                        </Para>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DiscountCard;
