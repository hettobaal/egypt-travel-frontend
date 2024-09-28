import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaRegImage } from 'react-icons/fa';
import Para from '../reuseable/Para';
import Image from 'next/image';
import DetailCarousel from './DetailCarousel';

function DetailModal({images, selectedImage, setSelectedImage}) {

    return (
        <Dialog open={!!selectedImage}>
            <DialogTrigger  onClick={()=>{setSelectedImage(true)}}>
                <div className='bottom-0 bg-[#90979e]/80 rounded-full py-2.5 px-6 border-1 border-white absolute  z-30 flex items-center gap-x-1'>
                    <span>
                        <FaRegImage color='#FFFFFF' size={18} />
                    </span>
                    <Para className='text-white'>
                        +20
                    </Para>
                </div>
            </DialogTrigger>
            <DialogContent className=' max-w-full p-0 bg-transparent  flex justify-center items-center border-none '>
                <DetailCarousel images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            </DialogContent>
        </Dialog>
    )
}

export default DetailModal;
