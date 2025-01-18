import { cn } from '@/lib/utils';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Wrapper({ className, children }) {
    return (
        <section className={cn("py-6 px-6 w-full mt-14 dark:bg-darkModeSecondary bg-silver", className)}>
            {children}
        </section>
    )
}

export default Wrapper;