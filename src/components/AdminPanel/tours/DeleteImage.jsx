import { Button } from "@/components/ui/button"
import { deleteImage } from "@/lib/siteApis";
import { Loader2 } from 'lucide-react'
import { useState } from "react";
import toast from 'react-hot-toast'

function DeleteImage({tourId, ImageId}) {
    const [loader, setLoader] = useState(false);

    const onSubmit = async () => {
// console.log("button clicked");

        setLoader(true)
        const res = await deleteImage( tourId , ImageId )
        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            // form.reset({ newtourImages: [] });
            toast?.success(res?.message)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };

    return(
    
    <div onClick={()=>{onSubmit(tourId , ImageId)}}>
        <Button
        
                                    type="submit"
                                    className=" w-32  text-white bg-blue hover:bg-darkBlue"
                                >
                                    {loader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Delete '}
                                </Button>
    </div>)
}

export default DeleteImage