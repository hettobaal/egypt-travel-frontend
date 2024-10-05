"use client"
import Heading from '@/components/reuseable/Heading'
import { getSubCategories } from '@/lib/siteApis'
import ViewSubCategories from '@/components/AdminPanel/subcategories/ViewSubCategories'
import React, { useEffect, useState } from 'react'

function ViewSubCategoriesPage() {


    const [SubCategoryData, setSubCategoryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSubCategories()
                setSubCategoryData(data?.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);



    return (
        <>
            <Heading>
                View SubCategory
            </Heading>

            {SubCategoryData.length > 0 &&
                <ViewSubCategories SubCategoryData={SubCategoryData || []} />}
        </>
    )
}

export default ViewSubCategoriesPage