"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Para from './reuseable/Para'
import Link from 'next/link'
import HeadingThree from './reuseable/HeadingThree'
import { getCategories } from '@/lib/siteApis'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCallSharp } from 'react-icons/io5'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdAlternateEmail, MdOutlineAlternateEmail } from 'react-icons/md'

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
                            {/* <span className='flex gap-x-4 gap-y-4 items-center md:flex-nowrap flex-wrap'>
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
                            </span> */}

                        </div>
                        {/* <div className='br w-full'> */}
                        <div className='xl:w-[60%] w-full flex flex-col gap-y-8  xl:ml-8'>
                            <ul className=' w-full grid md:grid-cols-3 grid-cols-2 gap-x-2  gap-y-5  md:pt-16 pt-8 '>
                                <li className='w-full'>
                                    <h6 className='text-[#344054] text-base font-extrabold '>
                                        Hast du Fragen?
                                    </h6 >
                                    <ul className='flex flex-col gap-y-2 mt-4'>
                                        <li className='text-[#344054] text-base font-extrabold'>
                                            Visitors for Touristic Marketing
                                        </li>
                                        <li className='text-[#344054] text-base font-normal'>
                                            Touristic Villages
                                        </li>
                                        <li className='text-[#344054] text-base font-normal'>
                                            1963002 Hurghada
                                        </li>
                                        <li className='text-[#344054] text-base font-normal'>
                                            Ägypten
                                        </li>
                                        <Link
                                            target='_blank'
                                            href='https://maps.app.goo.gl/6pq5FRwYqq2ub6M79'
                                            className='flex gap-x-2 items-center text-[#344054] text-base font-normal'>
                                            <FaLocationDot /> {` `}
                                            5RXF+5VQ Hurghada
                                        </Link>
                                        <Link
                                            href="tel:+4915236601419"
                                            className='flex gap-x-2 items-center text-[#344054] text-base font-normal'>
                                            <IoCallSharp />
                                            {` `}
                                            +49(0)1523 660 1419
                                        </Link>
                                        <Link
                                            href="https://wa.me/201507650920"
                                            className='flex gap-x-2 items-center text-[#344054] text-base font-normal'>
                                            <IoLogoWhatsapp />
                                            {` `}
                                            +20 1507 650 920
                                        </Link>
                                        <Link
                                            href="mailto:info@aegyptenmalanders.de"
                                            className='flex gap-x-2 items-center text-[#344054] text-base font-normal'>
                                            <span className='w-4 h-4'>
                                                <MdOutlineAlternateEmail />
                                            </span>
                                            {` `}
                                            info@aegyptenmalanders.de
                                        </Link>
                                    </ul>
                                </li>
                                <li>
                                    <h6
                                        className='text-[#344054] md:text-lg text-base font-extrabold'
                                    >
                                        Informationen
                                    </h6 >
                                    <div>
                                        <span className='flex flex-col  mt-4'>

                                            <Link
                                                className='mt-1'
                                                href='/about-us'
                                            >
                                                Über uns
                                            </Link>
                                            <Link
                                                className='mt-1'
                                                href='/privacy-policy'
                                            >
                                                Datenschutzerklärung
                                            </Link>
                                            <Link
                                                className='mt-1'
                                                href='/'
                                            >
                                                Impressum
                                            </Link>
                                            {/* <Para className='mt-1'>
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
                                            </Para> */}
                                        </span>
                                    </div>
                                    <div className='mt-6'>
                                        <h6
                                            className='text-[#344054] md:text-lg text-base font-extrabold'
                                        >
                                            Unsere Bezahlarten
                                        </h6 >
                                        <div className='flex gap-x-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                                <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"></path><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                                <path fill="#0d62ab" d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006	C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001	c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"></path><path fill="#199be2" d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115	c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001	c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015	l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102	C42.18,16.106,37.358,13.019,33.183,12.994z"></path><path fill="#006fc4" d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765	c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882	C33.166,12.993,33.148,13,33.132,13H19.66z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                                <linearGradient id="4aQSF3KYsmAUlEZ8JzDHGa_So6jK8i6jddZ_gr1" x1="20.375" x2="28.748" y1="1365.061" y2="1394.946" gradientTransform="translate(0 -1354)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00b3ee"></stop><stop offset="1" stop-color="#0082d8"></stop></linearGradient><path fill="url(#4aQSF3KYsmAUlEZ8JzDHGa_So6jK8i6jddZ_gr1)" d="M43.125,9H4.875C3.287,9,2,10.287,2,11.875v24.25C2,37.713,3.287,39,4.875,39h38.25	C44.713,39,46,37.713,46,36.125v-24.25C46,10.287,44.713,9,43.125,9z"></path><path d="M23.778,27.981c-0.827,0-1.5-0.673-1.5-1.5V26.44l-0.309,0.669c-0.244,0.529-0.779,0.872-1.362,0.872	h-0.917c-0.593,0-1.131-0.35-1.371-0.892l-0.254-0.572c-0.019,0.811-0.684,1.464-1.5,1.464h-2.638c-0.596,0-1.135-0.353-1.374-0.898	l-0.289-0.66h-2.12l-0.28,0.651c-0.238,0.551-0.779,0.907-1.378,0.907H7.383c-0.689,0-1.25-0.561-1.25-1.25v-0.055l0.012-0.12	L6.179,26.4l2.84-6.503C9.261,19.352,9.8,19,10.394,19h1.623c0.59,0,1.127,0.348,1.369,0.887l0.958,2.146V20.5	c0-0.827,0.673-1.5,1.5-1.5h1.872c0.589,0,1.126,0.347,1.368,0.885l1.061,2.362l1.067-2.363C21.453,19.347,21.99,19,22.578,19H24.5	c0.827,0,1.5,0.673,1.5,1.5v5.981c0,0.827-0.673,1.5-1.5,1.5H23.778z" opacity=".05"></path><path d="M23.778,27.481c-0.551,0-1-0.449-1-1v-2.318L21.515,26.9c-0.163,0.353-0.519,0.581-0.908,0.581	h-0.917c-0.395,0-0.754-0.233-0.914-0.595l-1.21-2.729v2.324c0,0.551-0.449,1-1,1h-2.638c-0.397,0-0.757-0.235-0.916-0.599	l-0.42-0.959H9.815l-0.41,0.954c-0.159,0.367-0.519,0.604-0.919,0.604H7.383c-0.414,0-0.75-0.336-0.75-0.75v-0.067l0.035-0.156	l2.81-6.411c0.161-0.363,0.52-0.598,0.916-0.598h1.623c0.394,0,0.751,0.232,0.913,0.591l1.915,4.288V20.5c0-0.551,0.449-1,1-1h1.872	c0.393,0,0.751,0.231,0.912,0.59l1.516,3.375l1.523-3.376c0.162-0.358,0.52-0.589,0.912-0.589H24.5c0.551,0,1,0.449,1,1v5.981	c0,0.551-0.449,1-1,1H23.778z M11.463,23.415l-0.293-0.671l-0.282,0.671H11.463z" opacity=".07"></path><path fill="#fff" d="M24.5,20h-1.922c-0.197,0-0.375,0.115-0.456,0.294l-1.98,4.389l-1.97-4.388	C18.091,20.116,17.912,20,17.715,20h-1.871c-0.276,0-0.5,0.224-0.5,0.5v6.226l-2.871-6.43C12.393,20.116,12.214,20,12.017,20h-1.623	c-0.198,0-0.378,0.117-0.458,0.299L7.15,26.64c0,0-0.017,0.063-0.017,0.091c0,0.138,0.112,0.25,0.25,0.25v0h1.103	c0.2,0,0.38-0.119,0.459-0.302l0.541-1.256h3.432l0.551,1.258c0.08,0.182,0.259,0.299,0.458,0.299h2.638c0.276,0,0.5-0.224,0.5-0.5	v-4.685l2.167,4.888c0.08,0.181,0.259,0.297,0.457,0.297h0.918c0.195,0,0.372-0.113,0.454-0.29l2.217-4.805v4.595	c0,0.276,0.224,0.5,0.5,0.5H24.5c0.276,0,0.5-0.224,0.5-0.5V20.5C25,20.224,24.776,20,24.5,20z M10.135,23.915l1.026-2.44	l1.066,2.44H10.135z"></path><path d="M38.994,28c-0.433,0-0.844-0.187-1.129-0.512l-1.15-1.313l-1.189,1.313	c-0.283,0.313-0.688,0.494-1.112,0.494H28.5c-0.827,0-1.5-0.673-1.5-1.5V20.5c0-0.827,0.673-1.5,1.5-1.5h6.811l1.494,1.69	l1.31-1.422l0.099-0.042c0.145-0.119,0.405-0.207,0.679-0.207h1.541c0.689,0,1.25,0.561,1.25,1.25c0,0.204-0.052,0.509-0.302,0.804	l-2.16,2.36l2.561,2.97l-0.103,0.24c0.003,0.036,0.005,0.072,0.005,0.107c0,0.689-0.561,1.25-1.25,1.25H38.994z" opacity=".05"></path><path d="M38.994,27.5c-0.289,0-0.563-0.125-0.752-0.341l-1.521-1.736l-1.566,1.73	c-0.188,0.209-0.459,0.329-0.741,0.329H28.5c-0.551,0-1-0.449-1-1V20.5c0-0.551,0.449-1,1-1h6.585l1.711,1.936l1.612-1.75	l0.033-0.014c0.13-0.099,0.286-0.153,0.45-0.153h1.541c0.414,0,0.75,0.336,0.75,0.75c0,0.121-0.032,0.302-0.184,0.481l-2.447,2.673	l2.647,3.069l-0.037,0.085c0.014,0.056,0.021,0.114,0.021,0.172c0,0.414-0.336,0.75-0.75,0.75H38.994z M33.507,25.016l0.347-0.381	h-3.638v0.381H33.507z M34.055,24.415l0.916-1.005l-0.916-1.026V24.415z M33.991,22.312l-0.265-0.296l-3.51-0.01v0.307H33.991z" opacity=".07"></path><path fill="#fff" d="M40.615,26.586l0.001-0.003l-2.734-3.169l2.734-2.986c0.037-0.044,0.066-0.097,0.066-0.159	c0-0.138-0.112-0.25-0.25-0.25c-0.007,0-1.538,0-1.541,0c-0.072,0-0.135,0.033-0.18,0.082l-0.007,0.003l-1.916,2.079L34.86,20H28.5	c-0.276,0-0.5,0.224-0.5,0.5v5.982c0,0.276,0.224,0.5,0.5,0.5h5.913c0.141,0,0.276-0.06,0.371-0.164l1.943-2.147l1.891,2.158	C38.713,26.938,38.85,27,38.994,27h1.44c0.138,0,0.25-0.112,0.25-0.25C40.683,26.686,40.655,26.63,40.615,26.586z M33.728,25.516	h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234,0.012l1.693,1.897L33.728,25.516z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li className='md:block hidden'>
                                    <h6
                                        className='text-[#344054] text-base font-extrabold'>
                                        Folge uns
                                    </h6 >
                                    <span className='flex gap-x-4 gap-y-4 items-center flex-wrap mt-2'>
                                        <Link
                                            prefetch={false}
                                            href={'https://www.youtube.com/@hurghadaurlaub'}>
                                            <Image
                                                className=' sm:block hidden'
                                                src='/images/Youtube.svg'
                                                width={32}
                                                height={30}
                                                loading='lazy'
                                                alt='youtube'
                                            />
                                            <Image
                                                className='sm:hidden'
                                                src='/images/Youtube.svg'
                                                width={25}
                                                height={23}
                                                loading='lazy'
                                                alt='youtube'
                                            />
                                        </Link>
                                        <Link href={'https://www.tiktok.com/@adventuresegypt.com'}>
                                            <Image
                                                className='sm:block hidden'
                                                src='/images/Tiktok.svg'
                                                width={32}
                                                height={30}
                                                loading='lazy'
                                                alt='tiktok'
                                            />
                                            <Image
                                                className='sm:hidden'
                                                src='/images/Tiktok.svg'
                                                width={25}
                                                height={23}
                                                loading='lazy'
                                                alt='tiktok'
                                            />
                                        </Link>
                                        <Link href={'/'}>
                                            <Image
                                                className='sm:block hidden'
                                                src='/images/Linkedin.svg'
                                                width={32}
                                                height={30}
                                                loading='lazy'
                                                alt='linkedin'
                                            />
                                            <Image
                                                className='sm:hidden'
                                                src='/images/Linkedin.svg'
                                                width={25}
                                                height={23}
                                                loading='lazy'
                                                alt='linkedin'
                                            />
                                        </Link>
                                        <Link href={'https://www.instagram.com/adventuresegypt/'}>
                                            <Image
                                                className='sm:block hidden'
                                                src='/images/Instagram.svg'
                                                width={32}
                                                height={30}
                                                loading='lazy'
                                                alt='instagram'
                                            />
                                            <Image
                                                className='sm:hidden'
                                                src='/images/Instagram.svg'
                                                width={25}
                                                height={23}
                                                loading='lazy'
                                                alt='instagram'
                                            />
                                        </Link>
                                        <Link href={'/'}>
                                            <Image
                                                className='sm:block hidden'
                                                src='/images/Facebook.svg'
                                                width={32}
                                                height={30}
                                                loading='lazy'
                                                alt='Footer Logo'
                                            />
                                            <Image
                                                className='sm:hidden'
                                                src='/images/Facebook.svg'
                                                width={25}
                                                height={23}
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
                                </li>
                            </ul>
                            <div className='md:hidden'>
                                <h6
                                    className='text-[#344054] text-base font-extrabold'>
                                    Folge uns
                                </h6 >
                                <span className='flex gap-x-4 gap-y-4 items-center flex-wrap mt-4'>
                                    <Link
                                        prefetch={false}
                                        href={'https://www.youtube.com/@hurghadaurlaub'}>
                                        <Image
                                            className=' sm:block hidden'
                                            src='/images/Youtube.svg'
                                            width={32}
                                            height={30}
                                            loading='lazy'
                                            alt='youtube'
                                        />
                                        <Image
                                            className='sm:hidden'
                                            src='/images/Youtube.svg'
                                            width={25}
                                            height={23}
                                            loading='lazy'
                                            alt='youtube'
                                        />
                                    </Link>
                                    <Link href={'https://www.tiktok.com/@adventuresegypt.com'}>
                                        <Image
                                            className='sm:block hidden'
                                            src='/images/Tiktok.svg'
                                            width={32}
                                            height={30}
                                            loading='lazy'
                                            alt='tiktok'
                                        />
                                        <Image
                                            className='sm:hidden'
                                            src='/images/Tiktok.svg'
                                            width={25}
                                            height={23}
                                            loading='lazy'
                                            alt='tiktok'
                                        />
                                    </Link>
                                    <Link href={'/'}>
                                        <Image
                                            className='sm:block hidden'
                                            src='/images/Linkedin.svg'
                                            width={32}
                                            height={30}
                                            loading='lazy'
                                            alt='linkedin'
                                        />
                                        <Image
                                            className='sm:hidden'
                                            src='/images/Linkedin.svg'
                                            width={25}
                                            height={23}
                                            loading='lazy'
                                            alt='linkedin'
                                        />
                                    </Link>
                                    <Link href={'https://www.instagram.com/adventuresegypt/'}>
                                        <Image
                                            className='sm:block hidden'
                                            src='/images/Instagram.svg'
                                            width={32}
                                            height={30}
                                            loading='lazy'
                                            alt='instagram'
                                        />
                                        <Image
                                            className='sm:hidden'
                                            src='/images/Instagram.svg'
                                            width={25}
                                            height={23}
                                            loading='lazy'
                                            alt='instagram'
                                        />
                                    </Link>
                                    <Link href={'/'}>
                                        <Image
                                            className='sm:block hidden'
                                            src='/images/Facebook.svg'
                                            width={32}
                                            height={30}
                                            loading='lazy'
                                            alt='Footer Logo'
                                        />
                                        <Image
                                            className='sm:hidden'
                                            src='/images/Facebook.svg'
                                            width={25}
                                            height={23}
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
                        </div>
                    </div>
                </div>
                <div className='w-full flex md:flex-row flex-col sm:gap-y-6 gap-y-2 justify-between items-center'>
                    <span className='w-full'>
                        <Para className='text-[#667085]  text-center '>
                            © Copyright 2025 by Adventures Egypt All Rights Reserved
                        </Para>
                    </span>
                    {/* <span className='w-full md:justify-end justify-between flex items-center md:gap-x-4'>
                        <Para className='text-[#667085]'>
                            Term of Service
                        </Para>
                        <Link
                            href='privacy-policy'
                            className='text-base text-[#667085]'>
                            Privacy Policy
                        </Link>
                    </span> */}
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
