import React from 'react'
import Heading from '@/components/reuseable/Heading'
import ViewCategories from '@/components/AdminPanel/categories/ViewCategories'
import { getCategories } from '@/lib/siteApis'

async function page() {

    const data = await getCategories()

    return (
        <>
            <Heading>
                View Categories
            </Heading>
            <ViewCategories CategoryData={data?.data || []} />
        </>
    )
}

export default page