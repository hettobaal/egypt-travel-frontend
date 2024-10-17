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
import { createBlog, createCategory } from '@/lib/siteApis'
import toast from 'react-hot-toast'
import Tiptap from './Tiptap'

const formSchema = z.object({
    title: z.string().min(1, { message: "required" }),
    cardImage: z
        .any()
        .refine((file) => file?.length == 1, 'File is required.'),
    mainImage: z
        .any()
        .refine((file) => file?.length == 1, 'File is required.'),
    shortDesc: z.string().min(1, { message: " required" }),
    // category: z.string().min(1, { message: " required" }),
    date: z.string().min(1, { message: "Date is required" }),
})


export default function CreateBlog() {
    const [loader, setLoader] = useState(false);
    const [content, setContent] = useState(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            cardImage: "",
            mainImage: "",
            shortDesc: "",
            // category: "",
            date: "",

        },
    })



    const onSubmit = async (data) => {
        setLoader(true)
        let dataWithContent = { ...data, content }
        const res = await createBlog(dataWithContent)
        console.log("res", res);

        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            toast?.success(res?.message)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };

    const fileRef = form.register("cardImage");
    const fileRef2 = form.register("mainImage");

    return (
        <section className="mt-10 bg-white dark:bg-darkMode px-4 py-6  rounded-md shadow-lg ">
            <div className='mt-6'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className='gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Blog Title</FormLabel>
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
                                name="cardImage"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Card Image</FormLabel>
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
                            <FormField
                                control={form.control}
                                name="mainImage"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Detail Image</FormLabel>
                                        <FormControl>
                                            <Input
                                                className='dark:bg-darkModeSecondary  outline-none '
                                                {...fileRef2}
                                                onChange={(event) => {
                                                    field.onChange(event.target?.files?.[0] ?? undefined);
                                                }}
                                                type="file"
                                            />
                                        </FormControl>
                                        <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">date</FormLabel>
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
                                name="shortDesc"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Short Description</FormLabel>
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
                        </div>
                        <h3 className='font-bold text-base'>Content</h3>
                        <Tiptap setContent={setContent} />
                        <div className="mt-[1.5rem]">
                            <Button
                                type="submit"
                                className="w-32  text-white bg-blue hover:bg-darkBlue"
                            >
                                {loader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Create Blog'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    )


}