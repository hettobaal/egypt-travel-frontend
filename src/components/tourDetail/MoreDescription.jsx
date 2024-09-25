"use client"
import React, { useState } from 'react'
import Para from '../reuseable/Para'

function MoreDescription({ data }) {

    const description = data?.fullDescription

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    // Define a limit for characters (or lines)
    const characterLimit = 150;

    const isLongText = description.length > characterLimit;

    return (
        <span className='max-w-screen-sm lg:mt-0 mt-2'>
            <Para className={`${!isExpanded && isLongText ? 'line-clamp-3' : ''}`}>
                {description}
            </Para>
            {isLongText && (
                <button
                    onClick={toggleText}
                    className='text-amber underline'
                >
                    {isExpanded ? 'See less' : 'See more'}
                </button>
            )}
        </span>
    )
}

export default MoreDescription;
