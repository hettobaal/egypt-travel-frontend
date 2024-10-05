"use client"
import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getPopularTours } from '@/lib/siteApis'
import ViewPopularTour from '@/components/AdminPanel/popularTours/ViewPopularTour';

import { useState, useEffect } from "react";

function page() {
    const [popularTours, setPopularTours] = useState([]); // Initialize state

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const data = await getSellingTours(); // Fetch data
                const data = await getPopularTours()
                setPopularTours(data?.data); // Update state with the fetched data
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData(); // Invoke the async function
    }, []); // Empty dependency array ensures this runs once on mount

    // console.log("inside useEffect");

    // const tourData = data?.data;




    return (
        <>
            <Heading>
                View Popular Tours
            </Heading>
{            popularTours.length > 0 &&
            <ViewPopularTour TourData={popularTours?.length > 0 ? popularTours[0]?.tourId : []} />}
        </>
    )
}

export default page