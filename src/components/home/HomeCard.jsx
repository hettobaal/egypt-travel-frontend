import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function HomeCard({ subCategory }) {

    return (
        <>
            {
                subCategory?.map((item, index) => {
                    return (
                        <Link
                            prefetch={false}
                            href={`/catalog/${item?.slug}`}
                            key={index}
                            className='overflow-hidden  relative group lg:rounded-[10px] rounded-[8px] xl:w-[23.8%] lg:w-[31%] w-[48%] md:h-[250px] h-[170px] '
                        >
                            <Image
                                // src={`https://dccvcdil526gz.cloudfront.net/${item?.subCategoryImage}`}
                                src={`https://aegyptenmalanders.de/imageslocal/subCategory/${item?.subCategoryImage}`}
                                width={400}
                                height={400}
                                loading='lazy'
                                alt={item?.subCategoryName}
                                className=' h-full lg:rounded-[10px] rounded-[8px]'
                            />
                            <span className='absolute inset-0 bg-black bg-opacity-40 lg:rounded-[10px] rounded-[8px]'></span>
                            <span className='absolute bottom-4  left-0 right-0 flex justify-center items-center'>
                                <h1 className='md:font-semibold font-medium  text-white md:text-xl text-[15px] px-2'>{item?.subCategoryName}</h1>
                            </span>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default HomeCard;
