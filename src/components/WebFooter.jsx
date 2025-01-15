"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Para from './reuseable/Para'
import Link from 'next/link'
import HeadingThree from './reuseable/HeadingThree'
import { getCategories } from '@/lib/siteApis'

function WebFooter() {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await getCategories()
            setCategoryData(data?.data)
        }
        getData()

    }, [])
    return (
        <>
            <footer className='max-w-[1336px] w-full mx-auto lg:px-10 md:px-8 sm:px-6 px-4 flex flex-col xl:gap-y-24 md:gap-y-20 gap-y-8 sm:mt-4 mt-4 md:mb-6 mb-4'>
                <div className='w-full flex flex-col lg:gap-y-16 sm:gap-y-8 gap-y-6 '>
                    <div className='w-full flex xl:flex-row flex-col  justify-between xl:items-start items-start md:gap-x-20'>
                        <div className='max-w-md flex flex-col sm:gap-y-6 gap-y-4'>
                            <Image
                                src='/nav/webLogo.webp'
                                width={150}
                                height={100}
                                loading='lazy'
                                alt='Footer Logo'
                            />
                            <span >
                                <Para className=''>
                                    Aegypten Malanders ist Ihr Tor zur Erkundung der Wunder Ägyptens. Unser Reiseunternehmen ist auf personalisierte Touren spezialisiert, die die reiche Geschichte, die atemberaubenden Landschaften und die lebendige Kultur dieses alten Landes präsentieren. Von den majestätischen Pyramiden von Gizeh bis zu den ruhigen Nilkreuzfahrten stellen wir unvergessliche Erlebnisse zusammen, die auf Ihre Interessen zugeschnitten sind. Lassen Sie sich von unseren sachkundigen Reiseführern auf eine Zeitreise mitnehmen und sorgen Sie dafür, dass jedes Abenteuer unvergesslich und bereichernd ist. Entdecken Sie Ägypten mit uns!
                                </Para>
                            </span>
                            <span className='flex gap-x-4 gap-y-4 items-center md:flex-nowrap flex-wrap'>
                                <Link
                                    prefetch={false}
                                    href={'https://www.youtube.com/@hurghadaurlaub'}>
                                    <Image
                                        className='sm:block hidden'
                                        src='/images/Youtube.svg'
                                        width={50}
                                        height={40}
                                        loading='lazy'
                                        alt='youtube'
                                    />
                                    <Image
                                        className='sm:hidden'
                                        src='/images/Youtube.svg'
                                        width={40}
                                        height={35}
                                        loading='lazy'
                                        alt='youtube'
                                    />
                                </Link>
                                <Link href={'https://www.tiktok.com/@adventuresegypt.com'}>
                                    <Image
                                        className='sm:block hidden'
                                        src='/images/Tiktok.svg'
                                        width={50}
                                        height={40}
                                        loading='lazy'
                                        alt='tiktok'
                                    />
                                    <Image
                                        className='sm:hidden'
                                        src='/images/Tiktok.svg'
                                        width={40}
                                        height={35}
                                        loading='lazy'
                                        alt='tiktok'
                                    />
                                </Link>
                                <Link href={'/'}>
                                    <Image
                                        className='sm:block hidden'
                                        src='/images/Linkedin.svg'
                                        width={50}
                                        height={40}
                                        loading='lazy'
                                        alt='linkedin'
                                    />
                                    <Image
                                        className='sm:hidden'
                                        src='/images/Linkedin.svg'
                                        width={40}
                                        height={35}
                                        loading='lazy'
                                        alt='linkedin'
                                    />
                                </Link>
                                <Link href={'https://www.instagram.com/adventuresegypt/'}>
                                    <Image
                                        className='sm:block hidden'
                                        src='/images/Instagram.svg'
                                        width={50}
                                        height={40}
                                        loading='lazy'
                                        alt='instagram'
                                    />
                                    <Image
                                        className='sm:hidden'
                                        src='/images/Instagram.svg'
                                        width={40}
                                        height={35}
                                        loading='lazy'
                                        alt='instagram'
                                    />
                                </Link>
                                <Link href={'/'}>
                                    <Image
                                        className='sm:block hidden'
                                        src='/images/Facebook.svg'
                                        width={50}
                                        height={40}
                                        loading='lazy'
                                        alt='Footer Logo'
                                    />
                                    <Image
                                        className='sm:hidden'
                                        src='/images/Facebook.svg'
                                        width={40}
                                        height={35}
                                        loading='lazy'
                                        alt='Facebook'
                                    />
                                </Link>
                                <Link
                                    href="https://t.me/+4915236601719"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        className='sm:block hidden'
                                        src='/images/telegram.webp'
                                        width={28}
                                        height={28}
                                        loading='lazy'
                                        alt='telegram'
                                    />
                                    <Image
                                        className='sm:hidden'
                                        src='/images/telegram.webp'
                                        width={22}
                                        height={20}
                                        loading='lazy'
                                        alt='telegram'
                                    />
                                </Link>
                                <Link
                                    href="https://wa.me/4915236601719"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='ms-1'
                                >
                                    <Image
                                        className='sm:block hidden'
                                        src='/images/whatsapp.svg'
                                        width={32}
                                        height={30}
                                        loading='lazy'
                                        alt='telegram'
                                    />
                                    <Image
                                        className='sm:hidden'
                                        src='/images/whatsapp.svg'
                                        width={25}
                                        height={23}
                                        loading='lazy'
                                        alt='telegram'
                                    />
                                </Link>
                                <Link
                                    href="viber://chat?number=4915236601719"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='ms-1'
                                >
                                    <Image
                                        className='sm:block hidden'
                                        src='/images/viber.svg'
                                        width={32}
                                        height={30}
                                        loading='lazy'
                                        alt='telegram'
                                    />
                                    <Image
                                        className='sm:hidden'
                                        src='/images/viber.svg'
                                        width={25}
                                        height={23}
                                        loading='lazy'
                                        alt='telegram'
                                    />
                                </Link>
                            </span>

                        </div>
                        {/* <div className='br w-full'> */}
                        <div className='xl:w-[60%] w-full flex flex-col gap-y-8 xl:ml-8'>

                            <ul className=' grid md:grid-cols-3 grid-cols-2 gap-y-5     md:pt-16 pt-8 '>
                                <li>
                                    <Link href={"/about-us"} className='text-[#344054] text-base font-extrabold '>Hilfreiche Links</Link >
                                    <ul className='flex flex-col gap-y-2 mt-4'>
                                        {
                                            categoryData?.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                    >
                                                        <Link
                                                            href={`/category/${item?.slug}`} className='text-[#344054] text-base font-normal'
                                                        >
                                                            {item?.categoryName}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                        <li>
                                            <Link href={'/about-us'} className='text-[#344054] text-base font-normal'>
                                                Über uns
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/data-policy'} className='text-[#344054] text-base font-normal'>
                                                Datenrichtlinie
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href={"/contact"} className='text-[#344054] md:text-lg text-base font-extrabold'>Kontakt</Link >
                                    <div>
                                        <span className='mt-4'>
                                            <Para className='mt-1'>
                                                <Link
                                                    href='tel:+49015236601719'
                                                >
                                                    +49 (0)1523/ 660 1719
                                                </Link>
                                            </Para>
                                            <Para className='mt-1'>
                                                <Link
                                                    href='tel:+201507650920'
                                                >
                                                    +20 1507 650 920
                                                </Link>
                                            </Para>
                                            <Para className='mt-1'>
                                                Touristic Villages, Hurghada 1,
                                            </Para>
                                            <Para className='mt-1'>
                                                Red Sea Governorate 1963002,
                                            </Para>
                                            <Para className='mt-1'>
                                                Ägypten
                                            </Para>
                                            <Para className='mt-1'>
                                                Handelsregisternummer
                                            </Para>
                                            <Para className='mt-1'>
                                                in Ägypten: 250428
                                            </Para>
                                            <Para className='mt-1'>
                                                Geschäftsführer
                                            </Para>
                                            <Para className='mt-1'>
                                                Mohamed Ibrahim
                                            </Para>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <Link href={"/contact"} className='text-[#344054] text-base font-extrabold'>Zahlungen</Link >
                                    {/* <ul className='flex flex-col gap-y-2 mt-4'>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Support
                                </Link>
                            </li>
                        </ul> */}
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='w-full flex md:flex-row flex-col sm:gap-y-6 gap-y-2 justify-between items-center'>
                    <span className='w-full'>
                        <Para className='text-[#667085] md:text-start text-center '>
                            © Copyright 2025 by Adventures Egypt All Rights Reserved
                        </Para>
                    </span>
                    <span className='w-full md:justify-end justify-between flex items-center md:gap-x-4'>
                        <Para className='text-[#667085]'>
                            Term of Service
                        </Para>
                        <Para className='text-[#667085]'>
                            Privacy Policy
                        </Para>
                    </span>
                </div>
            </footer>

            <Para className='text-[#667085]  text-center pb-2'>
                A Creation of {` `}
                <Link
                    className='text-blue'
                    target='_blank'
                    href='https://infusiontechnologies.co'
                >
                    Infusion
                </Link>
            </Para>

        </>
    )
}

export default WebFooter
