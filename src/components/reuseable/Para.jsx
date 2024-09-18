import { cn } from '@/lib/utils';
import React from 'react'

function Para({ className, children }) {
    return (
        <p className={cn('text-base font-normal', className)}>
            {children}
        </p>
    )
}

export default Para;