import { cn } from '@/lib/utils';
import React from 'react'

function Wrapper({ className, children }) {
    return (
        <section className={cn("py-6 px-6 w-full mt-14 dark:bg-darkModeSecondary bg-silver", className)}>
            {children}
            <span className='flex gap-x-4 gap-y-4 items-center md:flex-nowrap flex-wrap mt-2'>
                <Link
                    prefetch={false}
                    href={'https://www.youtube.com/@hurghadaurlaub'}>
                    <Image
                        className='w-[180px] w-[180px] sm:block hidden'
                        src='/images/Youtube.svg'
                        width={100}
                        height={100}
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
                        className='w-[180px] w-[180px] sm:block hidden'
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
                        className='w-[180px] sm:block hidden'
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
                        className='w-[180px] sm:block hidden'
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
                        className='w-[180px] sm:block hidden'
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
                        className='w-[180px] sm:block hidden'
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
                        className='w-[180px] sm:block hidden'
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
                        className='w-[180px] sm:block hidden'
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
        </section>
    )
}

export default Wrapper;