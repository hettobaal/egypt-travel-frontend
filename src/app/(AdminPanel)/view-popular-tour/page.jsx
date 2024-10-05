"use client"
import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getPopularTours } from '@/lib/siteApis'
import ViewPopularTour from '@/components/AdminPanel/popularTours/ViewPopularTour';

import { useState, useEffect } from "react";

function ViewPopularTourPage() {
    const [popularTours, setPopularTours] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPopularTours()
                setPopularTours(data?.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);



    return (
        <>
            <Heading>
                View Popular Tours
            </Heading>
            {popularTours.length > 0 &&
                <ViewPopularTour TourData={popularTours?.length > 0 ? popularTours[0]?.tourId : []} />}
        </>
    )
}

export default ViewPopularTourPage