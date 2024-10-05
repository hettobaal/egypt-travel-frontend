"use client"
import Heading from '@/components/reuseable/Heading'
import { getSubCategories } from '@/lib/siteApis'
import ViewSubCategories from '@/components/AdminPanel/subcategories/ViewSubCategories'
import React, {useEffect, useState} from 'react'

function page() {


    const [SubCategoryData, setSubCategoryData] = useState([]); // Initialize state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSubCategories()
                // const data = await getSellingTours(); // Fetch data
                setSubCategoryData(data?.data); // Update state with the fetched data
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData(); // Invoke the async function
    }, []); // Empty dependency array ensures this runs once on mount

    // console.log("inside useEffect");


    return (
        <>
            <Heading>
                View SubCategory
            </Heading>

{            SubCategoryData.length > 0 &&
            <ViewSubCategories SubCategoryData={SubCategoryData || []} />}
        </>
    )
}

export default page