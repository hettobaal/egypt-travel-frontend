"use client"
import React, { useMemo, useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2, Plus, Trash } from 'lucide-react'
import toast from 'react-hot-toast'
import Heading from '@/components/reuseable/Heading'
import { Select, SelectItem } from '@nextui-org/react'
import { addMoreImages, addTour, updateTourById } from '@/lib/siteApis'

const formSchema = z.object({
    newtourImages: z.array(
        z.any().refine((file) => file instanceof File, 'File is required.')
    ),

})

function AddMoreImages({tourId}){
    const [loader, setLoader] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newtourImages: [],
        },
    })

    const { fields: imageFields, append: appendImage, remove: removeImage } = useFieldArray({
        control: form.control,
        name: "newtourImages"
    });

    const onSubmit = async (data) => {

        setLoader(true)
        const res = await addMoreImages( tourId, data )
        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            form.reset({ newtourImages: [] });
            toast?.success(res?.message)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };
return (
    <div>
        <section className=" bg-white dark:bg-darkMode px-4 py-6  rounded-md shadow-lg ">
            <div className='mt-6'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>

                    <div>
                                <div>
                                    <Heading>
                                        Add Images
                                    </Heading>
                                    <div className='mt-4 gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                                        {imageFields?.map((field, index) => (
                                            <FormField
                                                key={field?.id}
                                                control={form.control}
                                                name={`newtourImages.${index}`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base dark:text-white font-semibold">
                                                            Image {index + 1}
                                                        </FormLabel>
                                                        <div className="flex space-x-2 items-center">
                                                            <FormControl>
                                                                <Input
                                                                    type="file"
                                                                    onChange={(e) => field.onChange(e.target.files?.[0])}
                                                                    className="dark:bg-darkModeSecondary outline-none"
                                                                />
                                                            </FormControl>
                                                            <Button
                                                                type="button"
                                                                variant="outline"
                                                                className='text-white bg-red-500 hover:bg-darkBlue'
                                                                onClick={() => removeImage(index)}
                                                            >
                                                                <Trash className="h-4 w-4 text-white" />
                                                            </Button>
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => appendImage(null)}
                                        className="flex items-center space-x-2 mt-4 text-white bg-blue hover:bg-darkBlue"
                                    >
                                        <Plus className="h-4 w-4" />
                                        <span>Add More</span>
                                    </Button>

                                </div>
                            </div>
                            <div >
                                <Button
                                    type="submit"
                                    className="mt-6 w-32  text-white bg-blue hover:bg-darkBlue"
                                >
                                    {loader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Upload'}
                                </Button>
                            </div>

                    </form>
                </Form>
            </div>
        </section>
    </div>
)
}

export default AddMoreImages;