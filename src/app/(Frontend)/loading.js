import { LoaderIcon } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <LoaderIcon className="animate-spin" size={50} color="#000000" />
        </div>
    )
}