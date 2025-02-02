"use client"
import React, { useState } from 'react'
import UpdateTourItem from './UpdateTourItem';
import Image from 'next/image';
import Heading from '@/components/reuseable/Heading';
import UpdateHighlight from './UpdateHighlight';
import UpdateInclude from './UpdateInclude';
import UpdateImage from './UpdateImage';
import UpdateInfo from './UpdateInfo';
import AddMoreImages from './AddMoreImages';
import DeleteImage from './DeleteImage';
import AddHighlight from './AddIncludes';
import AddIncludes from './AddIncludes';
import { DeleteHighlights, DeleteInclude, DeleteInfo } from '@/lib/siteApis';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import AddHighlights from './AddHighlights';
import AddInfoPoint from './AddInfoPoint';

function ViewTourDetail({ tourDetail }) {
    console.log("tourDetail", tourDetail);

    const [data, setData] = useState(tourDetail)
    const strikePrice = data?.discountAmount > 0 && data?.priceAdult

    const DeleteIncludePoint = React.useCallback(
        async (id) => {
            const res = await DeleteInclude(id);
            if (res?.status === "Success") {
                toast?.success(res?.message);
                setData((prev) => {
                    if (!prev || !Array.isArray(prev.includes)) {
                        return prev;
                    }
                    return {
                        ...prev,
                        includes: prev.includes.filter((item) => String(item._id) !== String(id)),
                    };
                });
            } else {
                toast?.error(res?.message);
            }
        },
        [setData]
    );


    const DeleteHighlightsPoint = React.useCallback(
        async (id) => {
            const res = await DeleteHighlights(id);
            if (res?.status === "Success") {
                toast?.success(res?.message);
                setData((prev) => {
                    if (!prev || !Array.isArray(prev.highlights)) {
                        return prev;
                    }
                    return {
                        ...prev,
                        highlights: prev.highlights.filter((item) => String(item._id) !== String(id)),
                    };
                });
            } else {
                toast?.error(res?.message);
            }
        },
        [setData]
    );

    const DeleteInfoPoint = React.useCallback(
        async (id) => {
            const res = await DeleteInfo(id);
            if (res?.status === "Success") {
                toast?.success(res?.message);
                setData((prev) => {
                    if (!prev || !Array.isArray(prev.importantInformation)) {
                        return prev;
                    }
                    return {
                        ...prev,
                        importantInformation: prev.importantInformation.filter((item) => String(item._id) !== String(id)),
                    };
                });
            } else {
                toast?.error(res?.message);
            }
        },
        [setData]
    );


    return (
        <section className="mt-10 pb-8 pt-8 h-full bg-white dark:bg-darkMode px-4 py-2  rounded-xl shadow-lg flex flex-col gap-y-8 ">
            {/* First Item */}
            <div className='flex flex-col gap-y-8 border-2 dark:border-white border-gray px-4 py-6 rounded-xl'>
                <div className='flex justify-center items-center '>
                    <Image
                        className='rounded-lg'
                        src={`https://aegyptenmalanders.de/imageslocal/tour/${data?.cardImage}?`}
                        width={400}
                        height={180}
                        loading='lazy'
                        alt={data?.cardImage}
                    />
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                    <div >
                        <Heading>
                            Tour Name
                        </Heading>
                        <h6 className='mt-1'>
                            {data?.title}
                        </h6>
                    </div>
                    <div >
                        <Heading>
                            Sight
                        </Heading>
                        <h6 className='mt-1'>
                            {data?.tag}
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
                            Full Description
                        </Heading>
                        <h6 className='mt-1'>
                            {data?.fullDescription}
                        </h6>
                    </div>
                    {/* {
                        data?.discountAmount > 0 && < div >
                            <Heading>
                                Strike Price
                            </Heading>
                            <h6 className='mt-1'>
                                {strikePrice}
                            </h6>
                        </div>
                    } */}
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
                            Infant Price
                        </Heading>
                        <h6 className='mt-1'>
                            {data?.priceInfant}
                        </h6>
                    </div>

                    {
                        data?.childPriceAfterDiscount > 0 &&
                        (
                            < div >
                                <Heading>
                                    Discounted Adult Price
                                </Heading>
                                <h6 className='mt-1'>
                                    {data?.adultPriceAfterDiscount}
                                </h6>
                            </div>
                        )
                    }

                    {
                        data?.childPriceAfterDiscount > 0 &&
                        (
                            <div >
                                <Heading>
                                    Discounted Child Price
                                </Heading>
                                <h6 className='mt-1'>
                                    {data?.childPriceAfterDiscount}
                                </h6>
                            </div>
                        )
                    }

                    <div >
                        <Heading>
                            Discount Amount
                        </Heading>
                        <h6 className='mt-1'>
                            {data?.discountAmount}
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
                </div>
                <div >
                    <UpdateTourItem TourData={data} id={data?._id} setData={setData} />
                </div>
            </div>
            {/* Highlights */}
            <div className='border-2 dark:border-white border-gray px-4 py-6 rounded-xl'>
                <Heading>
                    Highlights
                </Heading>
                <ul className='flex flex-col gap-y-6 mt-2'>
                    {
                        data?.highlights?.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className='flex flex-col gap-y-2 '>
                                    <p>
                                        {item?.points}
                                    </p>
                                    <UpdateHighlight TourData={item} id={data?._id} setData={setData} />
                                    <Button
                                        className="w-32  text-white bg-blue hover:bg-darkBlue"
                                        onClick={() => DeleteHighlightsPoint(item?._id)}
                                    >
                                        Delete
                                    </Button>

                                </li>
                            )
                        })
                    }
                </ul>
                <AddHighlights id={data?._id} setData={setData} />

            </div>

            {/* Includes */}
            <div className='border-2 dark:border-white border-gray px-4 py-6 rounded-xl'>
                <Heading>
                    Includes
                </Heading>
                <ul className='flex flex-col gap-y-6 mt-2'>
                    {
                        data?.includes?.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className='flex flex-col gap-y-2 '>
                                    <p>
                                        {item?.point}
                                    </p>
                                    <UpdateInclude TourData={item} id={data?._id} setData={setData} />
                                    <Button
                                        className="w-32  text-white bg-blue hover:bg-darkBlue"
                                        onClick={() => DeleteIncludePoint(item?._id)}
                                    >
                                        Delete
                                    </Button>
                                </li>
                            )
                        })
                    }
                </ul>
                <AddIncludes id={data?._id} setData={setData} />

            </div>

            <div className='border-2 dark:border-white border-gray px-4 py-6 rounded-xl'>
                <Heading>
                    Important Information
                </Heading>
                <ul className='flex flex-col gap-y-6 mt-2'>
                    {
                        data?.importantInformation
                            ?.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className='flex flex-col gap-y-2 '>
                                        <Heading>
                                            {item?.heading}
                                        </Heading>
                                        <p>
                                            {item?.points}
                                        </p>
                                        <UpdateInfo TourData={item} id={data?._id} setData={setData} />
                                        <Button
                                            className="w-32  text-white bg-blue hover:bg-darkBlue"
                                            onClick={() => DeleteInfoPoint(item?._id)}
                                        >
                                            Delete
                                        </Button>
                                    </li>
                                )
                            })
                    }
                </ul>
                <AddInfoPoint id={data?._id} setData={setData} />
            </div>

            <div className='border-2 dark:border-white border-gray px-4 py-6 rounded-xl'>
                <Heading>
                    Add More Images
                </Heading>
                <AddMoreImages tourId={data?._id} />
            </div>

            {/* Images */}

            <div className='border-2 dark:border-white border-gray px-4 py-6 rounded-xl'>
                <Heading>
                    Images
                </Heading>
                <div className='mt-2 flex flex-col gap-y-6'>
                    {
                        data?.tourImages?.map((item, index) => {
                            return (
                                <span
                                    className='flex flex-col gap-y-4 mt-4'
                                    key={index}
                                >
                                    <Image
                                        className="rounded-md"
                                        src={`https://aegyptenmalanders.de/imageslocal/tour/${item}`}
                                        width={400}
                                        height={200}
                                        loading="lazy"
                                        alt="category"
                                    />
                                    <div className='flex gap-x-4'>
                                        <UpdateImage TourData={item} id={data?._id} setData={setData} />
                                        <DeleteImage tourId={data?._id} ImageId={item} />
                                    </div>
                                </span>
                            )
                        })
                    }
                </div>
            </div>

        </section >
    )
}

export default ViewTourDetail;
