"use client"
import React, { useState } from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingThree from '../reuseable/HeadingThree';
import { Checkbox } from '../ui/checkbox';

function ReviewsContainer() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <MaxWidthWrapper className='flex flex-col gap-y-6 sm:mt-10 mt-6' >
            <div>
                <HeadingThree>
                    Customers  Reviews
                </HeadingThree>
            </div>
            <div>
                <div>
                    <Checkbox
                        id="terms1"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='peer shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue data-[state=checked]:text-white h-6 w-6' />
                </div>
                <div></div>
            </div>
        </MaxWidthWrapper>
    )
}

export default ReviewsContainer;
