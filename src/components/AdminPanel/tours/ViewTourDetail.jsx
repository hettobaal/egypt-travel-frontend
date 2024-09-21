"use client"
import React, { useState } from 'react'
import UpdateTourItem from './UpdateTourItem';
import Image from 'next/image';
import Heading from '@/components/reuseable/Heading';

function ViewTourDetail({ tourDetail }) {
    const [data, setData] = useState(tourDetail)

    return (
        <section className="mt-10 pb-8 pt-8 h-full bg-white dark:bg-darkMode px-4 py-2  rounded-xl shadow-lg flex flex-col gap-y-8 ">
            <div className='flex flex-col gap-y-8'>
                <div className='flex justify-center items-center'>
                    <Image
                        className='rounded-lg'
                        src={`https://drive.google.com/thumbnail?id=${data?.cardImage}&sz=w1000&v=${Date?.now()}`}
                        width={500}
                        height={200}
                        loading='lazy'
                        alt={data?.cardImage}
                    />
                </div>
                <div >
                    <Heading>
                        Title
                    </Heading>
                    <h6 className='mt-1'>
                        {data?.title}
                    </h6>
                </div>
                <div >
                    <Heading>
                        Description
                    </Heading>
                    <h6 className='mt-1'>
                        {data?.description}
                    </h6>
                </div>
                <div >
                    <Heading>
                        Strike Price
                    </Heading>
                    <h6 className='mt-1'>
                        {data?.strikePrice}
                    </h6>
                </div>
                <div >
                    <Heading>
                        Adult Price
                    </Heading>
                    <h6 className='mt-1'>
                        {data?.priceAdult}
                    </h6>
                </div>
                <div >
                    <Heading>
                        Child Price
                    </Heading>
                    <h6 className='mt-1'>
                        {data?.priceChild}
                    </h6>
                </div>
                <div >
                    <Heading>
                        Duration
                    </Heading>
                    <h6 className='mt-1'>
                        {data?.duration}
                    </h6>
                </div>
                <div >
                    <UpdateTourItem TourData={data} id={data?._id} setData={setData} />
                </div>
            </div>
        </section>
    )
}

export default ViewTourDetail;
