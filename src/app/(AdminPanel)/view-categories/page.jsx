"use client"
// import React from 'react'
import Heading from '@/components/reuseable/Heading'
import ViewCategories from '@/components/AdminPanel/categories/ViewCategories'
import { getCategories } from '@/lib/siteApis'
import React, {useEffect, useState} from 'react'

    function ViewCategoriesPage() {
    
    
        const [categoryData, setCategoryData] = useState([]); // Initialize state
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const data = await getCategories()
                    // const data = await getSubCategories()
                    // const data = await getSellingTours(); // Fetch data
                    setCategoryData(data?.data); // Update state with the fetched data
                } catch (error) {
                    console.error("Error fetching tours:", error);
                }
            };
            fetchData(); // Invoke the async function
        }, []); // Empty dependency array ensures this runs once on mount
    




    return (
        <>
            <Heading>
                View Categories
            </Heading>
{            categoryData.length> 0 &&
            <ViewCategories CategoryData={categoryData || []} />}
        </>
    )
}

export default ViewCategoriesPage