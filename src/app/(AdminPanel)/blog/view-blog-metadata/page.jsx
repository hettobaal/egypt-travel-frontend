export const dynamic = 'force-dynamic';

import React from 'react'
import Heading from '@/components/reuseable/Heading';
import { getBlogMetaData } from '@/lib/siteApis';
import ViewMetaData from '@/components/AdminPanel/metaData/ViewMetaData';

async function page() {
    const data = await getBlogMetaData('blog')
    const metaData = data?.data

    return (
        <>
            <Heading>
                View Blog MetaData
            </Heading>
            {/* <ViewMetaData metaData={metaData || []} /> */}

            {metaData?.length > 0 &&
                <ViewMetaData CategoryData={metaData || []} />
            }
        </>
    )
}

export default page;
