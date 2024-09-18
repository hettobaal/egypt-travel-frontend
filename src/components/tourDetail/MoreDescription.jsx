"use client"
import React, { useState } from 'react'
import Para from '../reuseable/Para'

function MoreDescription() {

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <span className='max-w-screen-sm lg:mt-0 mt-2'>
            <Para className={`${isExpanded && 'limp-3'}`}>
                Embark on a relaxing cruise from Hurghada, exploring the Red Sea&apos;s coral reefs through ample opportunities for swimming and snorkeling. Keep an eye out for dolphins and marvel at the vibrant underwater world. Enjoy lunch, accompanied by unlimited soft and hot drinks on board and soak up the sunshine enjoy lunch, accompanied by unlimited soft and hot drinks on board and soak up the sunshine

            </Para>
            <button
                onClick={toggleText}
                className='text-amber underline'
            >
                {isExpanded ? 'See more' : 'See less'}
            </button>
        </span>
    )
}


export default MoreDescription
