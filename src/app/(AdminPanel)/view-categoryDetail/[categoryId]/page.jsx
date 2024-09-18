import Heading from '@/components/reuseable/Heading'
import React from 'react'
import { getSingleCategory } from '@/lib/siteApis'
import CategoryDetails from '@/components/AdminPanel/categories/CategoryDetails'

async function page({ params }) {

    const id = params?.categoryId
    const data = await getSingleCategory(id)
    console.log("detail", data?.data?.categoryName);

    return (
        <>
            <Heading>
                {data?.data?.categoryName}
            </Heading>
            <CategoryDetails CategoryData={data?.data?.subCategoryId} />
        </>
    )
}

export default page