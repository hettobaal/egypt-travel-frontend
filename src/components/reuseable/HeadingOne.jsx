import { cn } from "@/lib/utils";

function HeadingOne({ className, children }) {
    return (
        <h1 className={cn('md:text-5xl sm:text-4xl text-3xl font-semibold text-slate', className)}>
            {children}
        </h1>
    )
}

export default HeadingOne;