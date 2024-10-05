"use client"
import React, { useEffect, useState } from 'react'
import Heading from '@/components/reuseable/Heading'
import { getSubCategoryMetaData } from '@/lib/siteApis'
import ViewMetaData from '@/components/AdminPanel/metaData/ViewMetaData';

function SubCategoryMetaData() {

    const [SubCategoryMetaData, setSubCategoryMetaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSubCategoryMetaData()
                setSubCategoryMetaData(data?.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <Heading>
                View SubCategories MetaData
            </Heading>
            {SubCategoryMetaData?.length > 0 &&
                <ViewMetaData CategoryData={SubCategoryMetaData || []} />
            }
        </>
    )
}

export default SubCategoryMetaData