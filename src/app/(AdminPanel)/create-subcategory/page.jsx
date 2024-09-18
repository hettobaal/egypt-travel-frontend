import Heading from '@/components/reuseable/Heading'
import React from 'react'
import CreateSubCategory from '@/components/AdminPanel/subcategories/CreateSubCategory'
import { getCategories } from '@/lib/siteApis'

async function page() {

    const data = await getCategories()
    

    return (
        <>
            <Heading>
                Create SubCategory
            </Heading>
            <CreateSubCategory data={data} />
        </>
    )
}

export default page