import CreateBlog from '@/components/blogs/CreateBlog'
import Heading from '@/components/reuseable/Heading'
import React from 'react'

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