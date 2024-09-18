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
import toast from 'react-hot-toast'
import { Select, SelectItem } from '@nextui-org/react'
import { createSubCategory } from '@/lib/siteApis'

const formSchema = z.object({
    categoryId: z.string().min(1, { message: "Please select Name" }),
    subCategoryName: z.string().min(1, { message: "SubCategory Name is required " }),
    subCategoryImage: z
        .any()
        .refine((file) => file?.length == 1, 'File is required.'),
})


function CreateSubCategory({ data }) {

    const [value, setValue] = React.useState(new Set([]));
    const [loader, setLoader] = useState(false);


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryId: "",
            subCategoryName: "",
            subCategoryImage: null,
        },
    })


    const onSubmit = async (data) => {
        setLoader(true)
        const res = await createSubCategory(data)
        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            toast?.success(res?.message)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };


    const fileRef = form.register("subCategoryImage");

    return (
        <section className="mt-10 bg-white dark:bg-darkMode px-4 py-6  rounded-md shadow-lg ">
            <div className='mt-6'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className='gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                            <FormField
                                control={form.control}
                                name="categoryId"
                                render={({ field }) => (
                                    <FormItem

                                    >
                                        <FormLabel>Select Category Name</FormLabel>
                                        <FormControl
                                        >

                                            <Select
                                                {...field}
                                                aria-label='Select Category Name'
                                                placeholder="Select Category Name"
                                                selectedKeys={value}
                                                className="   border border-gray-400 outline-none rounded-lg focus-visible:ring-0 focus:ring-0 dark:bg-darkModeSecondary  "
                                                onSelectionChange={setValue}
                                                classNames={{
                                                    trigger: "bg-white dark:bg-darkModeSecondary hover:bg-white  rounded-lg",
                                                    listboxWrapper: 'max-h-32 overflow-y-auto dark:bg-darkModeSecondary',
                                                    mainWrapper: "dark:bg-darkModeSecondary rounded-lg",
                                                    popoverContent: 'dark:bg-darkModeSecondary',
                                                }}
                                            >

                                                {
                                                    data?.data?.map((item) => {
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
                                name="subCategoryName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base dark:text-white  font-semibold">SubCategory Name</FormLabel>
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
                                name="subCategoryImage"
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
        </section >
    )
}

export default CreateSubCategory;
