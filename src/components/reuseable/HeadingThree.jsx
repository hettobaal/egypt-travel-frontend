import { cn } from "@/lib/utils";

function HeadingThree({ className, children }) {
    return (
        <h3 className={cn('text-lg font-semibold text-black', className)}>
            {children}
        </h3>
    )
}

export default HeadingThree;