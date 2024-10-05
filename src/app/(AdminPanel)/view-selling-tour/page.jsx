"use client"

import React, { useEffect, useState } from 'react'
import Heading from '@/components/reuseable/Heading'
import { getSellingTours } from '@/lib/siteApis'
import ViewSellingTour from '@/components/AdminPanel/bestsellingTour/ViewSellingTour';


export default function SellingTours() {
    const [tourData, setTourData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSellingTours();
                setTourData(data?.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Heading>View Selling Tours</Heading>
            {tourData.length > 0 && <ViewSellingTour
                TourData={tourData.length > 0 ? tourData[0]?.tourId : []}
            />}
        </>
    );
}
