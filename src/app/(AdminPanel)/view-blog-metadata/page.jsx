"use client"
import React, { useEffect, useState } from 'react'
import Heading from '@/components/reuseable/Heading'
import { getBlogMetaData } from '@/lib/siteApis'
import ViewMetaData from '@/components/AdminPanel/metaData/ViewMetaData';

function BlogMetaData() {

    const [BlogMetaData, setBlogMetaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBlogMetaData()
                setBlogMetaData(data?.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);

    // console.log("BlogMetaData", BlogMetaData);

    return (
        <>
            <Heading>
                View Blog MetaData
            </Heading>
            {BlogMetaData?.length > 0 &&
                <ViewMetaData CategoryData={BlogMetaData || []} />
            }
        </>
    )
}

export default BlogMetaData;