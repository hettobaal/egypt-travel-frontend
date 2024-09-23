"use client"
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { createCategory } from '@/lib/siteApis'
import toast from 'react-hot-toast'

const formSchema = z.object({
    categoryName: z.string().min(1, { message: "Category Name is required " }),
    categoryImage: z
        .any()
        .refine((file) => file?.length == 1, 'File is required.'),
})


function CreateReview() {

    const [loader, setLoader] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryName: "",
            categoryImage: null,
        },
    })


    const onSubmit = async (data) => {
        setLoader(true)
        const res = await createCategory(data)
        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            toast?.success(res?.message)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };


    const fileRef = form.register("categoryImage");

    return (
        <section className="mt-10 bg-white dark:bg-darkMode px-4 py-6  rounded-md shadow-lg ">
            <div className='mt-6'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className='gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                            <FormField
                                control={form.control}
                                name="categoryName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Category Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                className='dark:bg-darkModeSecondary  outline-none '
                                                type="text"
                                            />
                                        </FormControl>
                                         <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="categoryImage"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Category Image</FormLabel>
                                        <FormControl>
                                            <Input
                                                className='dark:bg-darkModeSecondary  outline-none '
                                                {...fileRef} onChange={(event) => {
                                                    field.onChange(event.target?.files?.[0] ?? undefined);
                                                }}
                                                type="file"
                                            />
                                        </FormControl>
                                         <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                    </FormItem>
                                )}
                            />
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
        </section>
    )
}

export default CreateReview;
