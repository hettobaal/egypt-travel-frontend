import React from 'react'
import Heading from '@/components/reuseable/Heading'
import CreateCategory from '@/components/AdminPanel/categories/CreateCategory'

function page() {

  return (
    <>
      <Heading>
        Create Category
      </Heading>
      <CreateCategory />
    </>
  )
}

export default page