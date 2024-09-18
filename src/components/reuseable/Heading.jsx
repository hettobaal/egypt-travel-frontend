import { cn } from '@/lib/utils';
import React from 'react'

function Heading({ className, children }) {
    return (
        <h1 className={cn('text-2xl font-medium ', className)}>
            {children}
        </h1>
    )
}

export default Heading;