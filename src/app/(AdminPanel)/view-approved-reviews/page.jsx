"use client"
import React, { useEffect, useState } from 'react'
import Heading from '@/components/reuseable/Heading'
import { getApprovedReviewsByStatus } from '@/lib/siteApis'
import ViewApprovedReviews from '@/components/AdminPanel/Reviews/ViewApprovedReviews';

function ApprovedReviews() {

    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getApprovedReviewsByStatus()
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
                View Approved Reviews
            </Heading>
            {reviewData?.length > 0 &&
                <ViewApprovedReviews reviewData={reviewData || []} />
            }
        </>
    )
}

export default ApprovedReviews;