"use client"
import Heading from '@/components/reuseable/Heading'
import ViewTours from '@/components/AdminPanel/tours/ViewTours'
import { getTours } from '@/lib/siteApis'
import React, { useEffect, useState } from 'react'

function ViewToursPage() {


    const [toursData, setToursData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTours()
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
                View Tour
            </Heading>
            {toursData?.length > 0 &&
                <ViewTours TourData={toursData || []} />}
        </>
    )
}

export default ViewToursPage