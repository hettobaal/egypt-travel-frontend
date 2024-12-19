import Image from 'next/image'
import React from 'react'
import Para from './reuseable/Para'
import Link from 'next/link'

function WebFooter() {
    return (
        <>
            <footer className='max-w-[1336px] w-full mx-auto lg:px-10 md:px-8 sm:px-6 px-4 flex flex-col xl:gap-y-40 md:gap-y-20 gap-y-8 sm:mt-4 mt-4 md:mb-6 mb-4'>
                <div className='flex xl:flex-row flex-col xl:items-center items-start md:gap-x-20'>
                    <div className='max-w-md flex flex-col sm:gap-y-6 gap-y-4'>
                        <Image
                            src='/nav/webLogo.webp'
                            width={150}
                            height={100}
                            loading='lazy'
                            alt='Footer Logo'
                        />
                        <span >
                            <p className='text-slate text-base font-medium'>
                                475 Cherry Dr, Troy, Michigan 48083 United States
                            </p>
                            <Para className='mt-2'>
                                +20 1507 650 920
                            </Para>
                        </span>
                        <span className='flex gap-x-4'>
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
                        </span>

                    </div>
                    {/* <div className='br w-full'> */}
                    <ul className='xl:w-[50%] w-full grid md:grid-cols-4 grid-cols-2 gap-y-5 ml-8   md:pt-16 pt-8 '>
                        <li>
                            <Link href={"/about-us"} className='text-[#344054] text-base font-normal'>About Us</Link >
                            {/* <ul className='flex flex-col gap-y-2 mt-4'>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Tourz Reviews
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Travel Guides
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Data Policy
                                </Link>
                            </li>
                        </ul> */}
                        </li>
                        <li>
                            <Link href={"/contact"} className='text-[#344054] text-base font-normal'>Contact Us</Link >
                            {/* <ul className='flex flex-col gap-y-2 mt-4'>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Legal
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Customer Stories
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Information
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Legal
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Payments
                                </Link>
                            </li>
                        </ul> */}
                        </li>
                        <li>
                            <Link href={"/contact"} className='text-[#344054] text-base font-normal'>Data Policy</Link >
                            {/* <ul className='flex flex-col gap-y-2 mt-4'>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Jobs
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Hiring
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Tips & Tricks
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-[#344054] text-base font-normal'>
                                    Data Policy
                                </Link>
                            </li>
                        </ul> */}
                        </li>
                        <li>
                            <Link href={"/contact"} className='text-[#344054] text-base font-normal'>Payments</Link >
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
                    {/* </div> */}
                </div>
                <div className='w-full flex md:flex-row flex-col sm:gap-y-6 gap-y-2 justify-between items-center'>
                    <span className='w-full'>
                        <Para className='text-[#667085] md:text-start text-center '>
                            © Copyright 2024 by Adventures Egypt All Rights Reserved
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
                    className='text-blue-800'
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
