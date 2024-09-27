import { cn } from "@/lib/utils";

function HeadingOne({ className, children }) {
    return (
        <h2 className={cn('md:text-5xl sm:text-4xl text-3xl font-semibold text-slate', className)}>
            {children}
        </h2>
    )
}

export default HeadingOne;