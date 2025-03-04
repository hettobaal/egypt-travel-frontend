"use client"
import React, { useState } from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import Link from 'next/link'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { motion, AnimatePresence } from 'framer-motion'



function BlogCards({ blogData }) {
    const [show, setShow] = useState(6)
    const [expanded, setExpanded] = useState(false)

    const toggleShowMore = () => {
        setExpanded(!expanded)
        setShow(expanded ? 6 : blogData?.length)
        console.log("show", show);

    }


    return (
        <MaxWidthWrapper className='flex flex-col justify-center items-center'>

            {
                blogData?.length > 0 ? (
                    <div
                        className={`w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6`}
                    >
                        <AnimatePresence>
                            {blogData?.slice(0, show).map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                    className='w-full'
                                >
                                    <Link
                                        prefetch={false}
                                        key={index}
                                        className='w-full'
                                        href={`/blog-detail/${item?.slug}`}
                                    >
                                        <Card
                                            shadow='none'
                                            className="h-full w-full p-0 border-2 border-[#ECECEC] rounded-[17.6px] "
                                        >
                                            <CardHeader className="p-0 flex-col items-start">
                                                <Image
                                                    // src={`http://localhost:4000/imageslocal/blogs/${item?.cardImage}`}
                                                    src={`https://aegyptenmalanders.de/imageslocal/blogs/${item?.cardImage}`}
                                                    // src={`https://vps-650845.dogado-cloud.de/imageslocal/blog/${item?.image}`}
                                                    width={700}
                                                    height={200}
                                                    loading='lazy'
                                                    alt="Blogs Cards"
                                                    className="transition-opacity duration-500 ease-in-out"
                                                />
                                            </CardHeader>
                                            <CardBody className="py-6 sm:px-4 px-3 flex flex-col justify-between h-full">
                                                <div>
                                                    <h4 className='text-black font-bold sm:text-xl text-lg leading-tight'>{item?.title}</h4>
                                                    <p className='mt-2 text-black font-medium text-base'>
                                                        {item?.shortDesc}
                                                    </p>
                                                </div>
                                                <div className='mt-2 flex gap-x-2 items-center'>
                                                    <p className="text-navy font-extrabold text-[17px]">
                                                        Read More
                                                    </p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))}

                        </AnimatePresence>
                    </div>
                ) : (
                    <div className='text-center'>
                        <p className='text-black text-lg '>
                            No Blogs Added
                        </p>
                    </div>
                )
            }





            {
                blogData?.length > 6 && (
                    <div className='w-full flex justify-center items-center sm:mt-10 mt-6'>
                        <Button
                            onClick={toggleShowMore}
                            className='w-max rounded-full bg-navy hover:bg-navy px-10 h-11 transition-all duration-500 ease-in-out'
                        >
                            {expanded ? 'SHOW LESS' : 'SHOW MORE'}
                        </Button>

                    </div>
                )
            }
        </MaxWidthWrapper>
    )
}

export default BlogCards
