"use client"
import Heading from '@/components/reuseable/Heading'
import ViewCategories from '@/components/AdminPanel/categories/ViewCategories'
import { getCategories } from '@/lib/siteApis'
import React, { useEffect, useState } from 'react'

function ViewCategoriesPage() {


    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategories()
                setCategoryData(data?.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);



    return (
        <>
            <Heading>
                View Categories
            </Heading>
            {categoryData?.length > 0 &&
                <ViewCategories CategoryData={categoryData || []} />}
        </>
    )
}

export default ViewCategoriesPage