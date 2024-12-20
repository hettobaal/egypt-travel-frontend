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
import { Loader2, Plus, Trash } from 'lucide-react'
import { addHighlightsPoint, addIncludePoint } from '@/lib/siteApis'
import toast from 'react-hot-toast'
import Heading from '@/components/reuseable/Heading'

const formSchema = z.object({
    highlightPoint: z.array(z.object({
        points: z.string().min(1, { message: "required" }),
    })),
})


function AddHighlights({ id, setData }) {
    const [loader, setLoader] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            highlightPoint: [{ points: " " }],
        },
    })


    const { fields, append, remove } = useFieldArray({
        control: form?.control,
        name: "highlightPoint",
    });

    const onSubmit = async (data) => {

        setLoader(true)
        const res = await addHighlightsPoint(data, id)
        console.log("res",res);
        
        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            setData((prevData) => {
                return {
                    ...prevData,
                    highlights: [...res?.data?.highlights], // Merge new includes with existing ones
                };
            });
            toast?.success(res?.message)
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
                            <div className='flex flex-col gap-y-8'>
                                <div>
                                    <Heading>
                                        Highlights
                                    </Heading>
                                    <div className='mt-4 gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                                        {fields?.map((field, index) => (
                                            <FormField
                                                key={field.id}
                                                control={form.control}
                                                name={`highlightPoint.${index}.points`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base dark:text-white font-semibold">
                                                            Point {index + 1}
                                                        </FormLabel>
                                                        <div className="flex space-x-2 items-center">
                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    className="dark:bg-darkModeSecondary outline-none"
                                                                    type="text"
                                                                />
                                                            </FormControl>
                                                            {fields?.length > 1 && (
                                                                <Button
                                                                    type="button"
                                                                    variant="outline"
                                                                    className='text-white bg-red-500 hover:bg-darkBlue'
                                                                    onClick={() => remove(index)}
                                                                >
                                                                    <Trash className="h-4 w-4 text-white" />
                                                                </Button>
                                                            )}
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
                                        onClick={() => append("")}
                                        className="flex items-center space-x-2 mt-4 text-white bg-blue hover:bg-darkBlue"
                                    >
                                        <Plus className="h-4 w-4" />
                                        <span>Add Highlights Points</span>
                                    </Button>
                                </div>
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

export default AddHighlights;
