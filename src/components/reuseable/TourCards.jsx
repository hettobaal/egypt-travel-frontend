import React from 'react'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { IoStar } from 'react-icons/io5';
import TourCardsCarousel from './TourCardsCarousel';
function TourCards({ data }) {
    return (
        <>
            <section className='w-full md:grid hidden xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-5'>
                {
                    data?.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                className='w-full'
                                href='/tourdetail/one'
                            >
                                <Card
                                    shadow='none'
                                    className="h-full w-full p-0 border-2 border-[#ECECEC] rounded-[17.6px]"
                                >
                                    <CardHeader className="p-0  flex-col items-start">
                                        <Image
                                            src={item?.image}
                                            width={700}
                                            height={200}
                                            loading='lazy'
                                            alt="Popular Tour"
                                        />

                                        {item?.category && <Button className='bg-amber hover:bg-amber px-6 -mt-4 h-8 mx-auto rounded-full'>
                                            {item?.category}
                                        </Button>}
                                    </CardHeader>
                                    <CardBody className="py-6 px-2 flex flex-col justify-between h-full ">
                                        <div  >
                                            <h4 className='text-black font-bold sm:text-xl text-lg leading-tight'>{item?.title}</h4>
                                            <p className='mt-2 text-black font-medium text-base'>
                                                {item?.desc}
                                            </p>
                                        </div>
                                        <div className='mt-2'>
                                            {
                                                item?.oldPrice && <h4 className="w-max text-base font-semibold text-black relative">
                                                    <span className="line-through text-black">
                                                        From ${item?.oldPrice}
                                                    </span>
                                                    <span
                                                        className="absolute  inset-0 h-px bg-amber top-[50%]"
                                                    ></span>
                                                </h4>
                                            }
                                            <h5 className='text-amber font-bold sm:text-xl text-lg'>Away {item?.price} {` `} <span className='text-[#363636] font-normal text-base '> per person</span></h5>
                                            <div className='mt-1 flex gap-x-2 items-center'>
                                                {
                                                    Array.from({ length: 5 }, (_, index) => (
                                                        <IoStar key={index} color='#FFBB4A' size={20} />
                                                    ))
                                                }
                                                <h6 className='text-base font-bold'>
                                                    {item?.rating}
                                                </h6>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Link>
                        )
                    })
                }
            </section>
            <TourCardsCarousel data={data} />
        </>
    )
}

export default TourCards;
