"use client"
import ViewBlogsData from '@/components/AdminPanel/blogs/ViewBlogsData';
import Heading from '@/components/reuseable/Heading'
import { getBlogs } from '@/lib/siteApis'
import React, { useEffect, useState } from 'react'

function ViewBlogs() {


    const [BlogData, setBlogData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBlogs()
                setBlogData(data?.data);
            } catch (error) {
                console.error("Error fetching tours:", error);
            }
        };
        fetchData();
    }, []);



    return (
        <>
            <Heading>
                View Blogs
            </Heading>
            {BlogData?.length > 0 &&
                <ViewBlogsData BlogData={BlogData || []} />}
        </>
    )
}

export default ViewBlogs