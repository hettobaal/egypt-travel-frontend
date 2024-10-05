"use client"
// import React from 'react'
import Heading from '@/components/reuseable/Heading'
import ViewTours from '@/components/AdminPanel/tours/ViewTours'
import { getTours } from '@/lib/siteApis'
    import React, {useEffect, useState} from 'react'

    function ViewToursPage() {
    
    
        const [toursData, setToursData] = useState([]); // Initialize state
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await getTours()
                    // const data = await getSellingTours(); // Fetch data
                    setToursData(data?.data); // Update state with the fetched data
                } catch (error) {
                    console.error("Error fetching tours:", error);
                }
            };
            fetchData(); // Invoke the async function
        }, []); // Empty dependency array ensures this runs once on mount



    return (
        <>
            <Heading>
                View Tour
            </Heading>
{            toursData.length> 0 &&
            <ViewTours TourData={toursData || []} />}
        </>
    )
}

export default ViewToursPage