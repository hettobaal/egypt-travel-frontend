"use client"
import React, { useEffect, useState } from 'react'
import Heading from '@/components/reuseable/Heading'
import { getPendingReviewsByStatus } from '@/lib/siteApis'

function PendingReviews() {

    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPendingReviewsByStatus()
                setReviewData(data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <Heading>
                View Pending Reviews
            </Heading>
            {/* {reviewData?.length > 0 &&
                <ViewMetaData CategoryData={reviewData || []} />
            } */}
        </>
    )
}

export default PendingReviews;