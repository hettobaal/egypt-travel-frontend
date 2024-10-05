"use client"

import React, { useEffect, useState } from 'react'
import Heading from '@/components/reuseable/Heading'
import { getSellingTours } from '@/lib/siteApis'
import ViewSellingTour from '@/components/AdminPanel/bestsellingTour/ViewSellingTour';

// import { useState, useEffect } from "react";

export default function SellingTours() {
    const [tourData, setTourData] = useState([]); // Initialize state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSellingTours(); // Fetch data
                setTourData(data?.data); // Update state with the fetched data
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData(); // Invoke the async function
    }, []); // Empty dependency array ensures this runs once on mount

    console.log("inside useEffect");

    return (
        <>
            <Heading>View Selling Tours</Heading>
           {tourData.length > 0 && <ViewSellingTour
                TourData={tourData.length > 0 ? tourData[0]?.tourId : []} // Conditional rendering
            />  }
        </>
    );
}
