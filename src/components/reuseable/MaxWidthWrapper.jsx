import { cn } from "@/lib/utils";

function MaxWidthWrapper({ className, children }) {
    return (
        <div className={cn('max-w-screen-2xl w-full mx-auto  lg:px-10 md:px-8 sm:px-6 px-4', className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;