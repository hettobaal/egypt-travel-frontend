"use client"
import React, { useState } from 'react'
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
import { Loader2 } from 'lucide-react'
import { addImportantInfo } from '@/lib/siteApis'
import toast from 'react-hot-toast'
import Heading from '@/components/reuseable/Heading'

const formSchema = z.object({
    ImportantInformation: z.array(z.object({
        heading: z.string().min(1, { message: "Heading is required" }),
        points: z.array(z.string().min(1, { message: "Point is required" }))
    })).min(1, { message: "At least one section is required" })
})


function AddInfoPoint({ id, setData }) {

    const [loader, setLoader] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ImportantInformation: [
                {
                    heading: "",
                    points: [" "]
                }
            ],
        },
    })


    // Includes
    const { fields: importantInfoFields, append: appendImportantInfo, remove: removeImportantInfo } = useFieldArray({
        control: form.control,
        name: "ImportantInformation",
    });

    const onSubmit = async (data) => {

        setLoader(true)
        const res = await addImportantInfo(data, id)
        setLoader(false)
        if (res?.status == "Success") {
            toast?.success(res?.message)
            setLoader(false)
            setData((prevData) => {
                return {
                    ...prevData,
                    importantInformation: [...res?.data?.importantInformation
                    ],
                };
            });

        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };

    return (
        <>
            <section className="mt-10 bg-white dark:bg-darkMode px-4 py-6  rounded-md shadow-lg ">
                <div className='mt-6'>
                    <Form {...form}>
                        <form onSubmit={form?.handleSubmit(onSubmit)} className="space-y-8">
                            <div>
                                <Heading>
                                    Add More
                                </Heading>
                                {importantInfoFields.map((section, sectionIndex) => (
                                    <div key={section.id} className='mt-4' >
                                        <FormField
                                            control={form.control}
                                            name={`ImportantInformation.${sectionIndex}.heading`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white font-semibold">
                                                        Heading</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            className="dark:bg-darkModeSecondary outline-none"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className='mt-4 gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                                            {section.points.map((point, pointIndex) => (
                                                <FormField
                                                    key={pointIndex}
                                                    control={form.control}
                                                    name={`ImportantInformation.${sectionIndex}.points.${pointIndex}`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-base dark:text-white font-semibold">Point</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    className="dark:bg-darkModeSecondary outline-none"
                                                                    {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        {/* <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => {
                                                    const currentPoints = form.getValues(`ImportantInformation.${sectionIndex}.points`);
                                                    form.setValue(`ImportantInformation.${sectionIndex}.points`, [...currentPoints, ""]);
                                                }}
                                                className="mt-2"
                                            >
                                                <Plus className="h-4 w-4 mr-2" /> Add Point
                                            </Button> */}
                                        {/* {importantInfoFields.length > 1 && (
                                            <Button
                                                className='text-white bg-red-500 hover:bg-darkBlue mt-2 ml-2'
                                                type="button"
                                                variant="outline"
                                                onClick={() => removeImportantInfo(sectionIndex)}
                                            >
                                                Remove
                                            </Button>
                                        )} */}
                                    </div>
                                ))}
                                {/* <Button
                                    type="button"
                                    variant="outline"
                                    className="flex items-center space-x-2 mt-4 text-white bg-blue hover:bg-darkBlue"
                                    onClick={() => appendImportantInfo({ heading: "", points: [""] })}
                                >
                                    <Plus className="h-4 w-4 mr-2" /> Add More
                                </Button> */}
                            </div>
                            <div className="mt-[1.5rem]">
                                <Button
                                    type="submit"
                                    className="w-32  text-white bg-blue hover:bg-darkBlue"
                                >
                                    {loader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Create'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </section >
        </>
    )
}

export default AddInfoPoint;
