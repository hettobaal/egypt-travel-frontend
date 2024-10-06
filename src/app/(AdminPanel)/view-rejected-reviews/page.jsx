"use client"
import React, { useEffect, useState } from 'react'
import Heading from '@/components/reuseable/Heading'
import { getRejectedReviewsByStatus } from '@/lib/siteApis'
import ViewRejectedReviews from '@/components/AdminPanel/Reviews/ViewRejectedReviews';

function RejectedReviews() {

    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRejectedReviewsByStatus()
                setReviewData(data?.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <Heading>
                View Rejected Reviews
            </Heading>
            {reviewData?.length > 0 &&
                <ViewRejectedReviews reviewData={reviewData || []} />
            }
        </>
    )
}

export default RejectedReviews;