import React from 'react'
import Heading from '@/components/reuseable/Heading'
import CreateBlog from '@/components/AdminPanel/blogs/CreateBlog'

function page() {

    return (
        <>
            <Heading>
                Create Blog
            </Heading>
            <CreateBlog />
        </>
    )
}

export default page