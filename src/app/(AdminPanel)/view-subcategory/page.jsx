import React from 'react'
import Heading from '@/components/reuseable/Heading'
import { getSubCategories } from '@/lib/siteApis'
import ViewSubCategories from '@/components/AdminPanel/subcategories/ViewSubCategories'

async function page() {

    const data = await getSubCategories()

    return (
        <>
            <Heading>
                View SubCategory
            </Heading>
            <ViewSubCategories SubCategoryData={data?.data || []} />
        </>
    )
}

export default page