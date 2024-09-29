import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaRegImage } from 'react-icons/fa';
import Para from '../reuseable/Para';
import DetailCarousel from './DetailCarousel';

function DetailModal({ images, selectedImage, setSelectedImage }) {

    return (
        <Dialog open={!!selectedImage} >
            <DialogTrigger onClick={() => { setSelectedImage(true) }}>
                <div className='bottom-2  right-4 w-max bg-[#90979e]/80 rounded-full py-2.5 px-6  absolute  mx-auto z-30 flex items-center gap-x-1'>
                    <span>
                        <FaRegImage color='#FFFFFF' size={18} />
                    </span>
                    <Para className='text-white'>
                        + {images?.length}
                    </Para>
                </div>
            </DialogTrigger>
            <DialogContent className=' max-w-full p-0 bg-transparent border-0 flex justify-center items-center  outline-none  '>
                <DetailCarousel images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            </DialogContent>
        </Dialog>
    )
}

export default DetailModal;
