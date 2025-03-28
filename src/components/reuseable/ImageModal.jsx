import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';
import { X } from 'lucide-react';

function ImageModal({ id, folder }) {

    return (
        <Dialog>
            <DialogTrigger>

                <Image
                    src={`https://aegyptenmalanders.de/imageslocal/${folder}/${id}`}
                    // src={`http://localhost:4000/imageslocal/${folder}/${id}`}
                    width={200}
                    height={150}
                    loading="lazy"
                    alt="category"
                />

            </DialogTrigger>
            <DialogContent className='max-w-full w-full max-h-[60%] p-0 bg-transparent  flex justify-center items-center border-none '>
                <div className='relative md:w-[70%] w-[90%] h-[60%]  mx-auto flex justify-center items-center '>
                    <Image
                        className="rounded-md max-h-[80vh]"
                        src={`https://aegyptenmalanders.de/imageslocal/${folder}/${id}`}
                        width={1000}
                        height={800}
                        loading="lazy"
                        alt="category"
                    />
                </div>
                <DialogClose asChild>
                    <span className='cursor-pointer absolute  text-white -top-10 right-16  flex justify-center items-center border-white border-1 rounded-full py-2 px-2'>
                        <X size={25} strokeWidth={1.25} />
                    </span>
                </DialogClose>
            </DialogContent>
        </Dialog>

    )
}

export default ImageModal;
