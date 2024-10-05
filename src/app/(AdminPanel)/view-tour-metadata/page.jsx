"use client"
import React, { useEffect, useState } from 'react'
import Heading from '@/components/reuseable/Heading'
import { getTourMetaData } from '@/lib/siteApis'
import ViewMetaData from '@/components/AdminPanel/metaData/ViewMetaData';

function page() {

    const [TourMetaData, setTourMetaData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTourMetaData()
                setTourMetaData(data?.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <Heading>
                View Tour MetaData
            </Heading>
            {TourMetaData?.length > 0 &&
                <ViewMetaData CategoryData={TourMetaData || []} />
            }
        </>
    )
}

export default page