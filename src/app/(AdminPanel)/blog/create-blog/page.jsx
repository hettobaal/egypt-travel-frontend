import Heading from '@/components/reuseable/Heading'
import React from 'react'
import CreateBlog from '@/components/blogs/CreateBlog'

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