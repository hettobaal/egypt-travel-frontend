"use client"
import React, { useMemo, useState } from 'react'
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
import toast from 'react-hot-toast'
import { Select, SelectItem } from '@nextui-org/react'
import { addCategoryMetaData, createSubCategory } from '@/lib/siteApis'

const formSchema = z.object({
    entityId: z.string().min(1, { message: "Please select Name" }),
    title: z.string().min(1, { message: "Title is required " }),
    description: z.string().min(1, { message: "Description is required " }),
    canonical: z.string().min(1, { message: "Canonical is required " }),
    ogSitename: z.string().min(1, { message: "OgSitename is required " }),
    ogTitle: z.string().min(1, { message: "OgTitle is required " }),
    ogDescription: z.string().min(1, { message: "OgDescription is required " }),
    ogURL: z.string().min(1, { message: "OgURL is required " }),
    ogImageAlt: z.string().min(1, { message: "OgImageAlt is required " }),
    ogImage: z
        .any()
        .refine((file) => file?.length == 1, 'File is required.'),
})


function CreateCategoryMetadata({ data }) {
    const DataArray = data?.data

    const sortedData = useMemo(() => {
        if (Array.isArray(DataArray)) {
            return [...DataArray]?.sort((a, b) => {
                if (a?._id > b?._id) return -1;
                if (a?._id < b?._id) return 1;
                return 0;
            });
        }
        return [];
    }, [DataArray]);

    const [categoryData, setCategoryData] = useState(sortedData || [])

    const [value, setValue] = React.useState(new Set([]));
    const [loader, setLoader] = useState(false);


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            entityId: "",
            title: "",
            description: "",
            canonical: "",
            ogSitename: "",
            ogTitle: "",
            ogDescription: "",
            ogURL: "",
            ogImageAlt: "",
            ogImage: null
        },
    })


    const onSubmit = async (data) => {
        setLoader(true)
        const res = await addCategoryMetaData(data)
        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            toast?.success(res?.message)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };


    const fileRef = form.register("ogImage");

    return (
        <section className="mt-10 bg-white dark:bg-darkMode px-4 py-6  rounded-md shadow-lg ">
            <div className='mt-6'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className='gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                            <FormField
                                control={form.control}
                                name="entityId"
                                render={({ field }) => (
                                    <FormItem

                                    >
                                        <FormLabel>Select Category </FormLabel>
                                        <FormControl
                                        >

                                            <Select
                                                {...field}
                                                aria-label='Select Category '
                                                placeholder="Select Category "
                                                selectedKeys={value}
                                                className="border border-gray-400 outline-none rounded-lg focus-visible:ring-0 focus:ring-0 dark:bg-darkModeSecondary  "
                                                onSelectionChange={setValue}
                                                classNames={{
                                                    trigger: "bg-white dark:bg-darkModeSecondary hover:bg-white  rounded-lg",
                                                    listboxWrapper: 'max-h-32 overflow-y-auto dark:bg-darkModeSecondary',
                                                    mainWrapper: "dark:bg-darkModeSecondary rounded-lg",
                                                    popoverContent: 'dark:bg-darkModeSecondary',
                                                }}
                                            >

                                                {
                                                    categoryData?.map((item) => {
                                                        return (

                                                            <SelectItem
                                                                className=' '
                                                                key={item?._id
                                                                }>
                                                                {item?.categoryName}
                                                            </SelectItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                        <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Title</FormLabel>
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
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Description</FormLabel>
                                        <FormControl>
                                            <textarea
                                                {...field}
                                                className='outline-none dark:bg-darkModeSecondary flex h-14 max-h-52 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50' />
                                        </FormControl>
                                        <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="canonical"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Canonical</FormLabel>
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
                                name="ogSitename"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">ogSite Name</FormLabel>
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
                                name="ogTitle"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Og Title</FormLabel>
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
                                name="ogDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Og Description</FormLabel>
                                        <FormControl>
                                            <textarea
                                                {...field}
                                                className='outline-none dark:bg-darkModeSecondary flex h-14 max-h-52 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50' />
                                        </FormControl>
                                        <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ogURL"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Og URL</FormLabel>
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
                                name="ogImageAlt"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Og ImageAlt</FormLabel>
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
                                name="ogImage"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">Og Image</FormLabel>
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
        </section >
    )
}

export default CreateCategoryMetadata;
