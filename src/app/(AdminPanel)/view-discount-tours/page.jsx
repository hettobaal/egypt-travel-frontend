"use client"
import React, { useEffect, useState } from 'react'
import Heading from '@/components/reuseable/Heading'
import { getDiscountTours } from '@/lib/siteApis'
import ViewDiscountedTours from '@/components/AdminPanel/discoutTours/ViewDiscountedTours';

function DiscountTours() {


    const [toursData, setToursData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDiscountTours()
                setToursData(data?.data);
                
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Heading>
                View Discount Tours
            </Heading>
            {toursData?.length > 0 &&
                <ViewDiscountedTours TourData={toursData[0]?.tourId || []} />
            }
        </>
    )
}

export default DiscountTours