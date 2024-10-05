"use client"
import React, { useEffect, useState } from 'react'
import Heading from '@/components/reuseable/Heading'
import { getCategoryMetaData } from '@/lib/siteApis'
import ViewMetaData from '@/components/AdminPanel/metaData/ViewMetaData';

function CategoryMetaData() {

    const [CategoryMetaData, setCategoryMetaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategoryMetaData()
                setCategoryMetaData(data?.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <Heading>
                View Categories MetaData
            </Heading>
            {CategoryMetaData?.length > 0 &&
                <ViewMetaData CategoryData={CategoryMetaData || []} />
            }
        </>
    )
}

export default CategoryMetaData