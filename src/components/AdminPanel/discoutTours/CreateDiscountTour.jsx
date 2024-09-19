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
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { Select, SelectItem } from '@nextui-org/react'
import { addDiscountTour } from '@/lib/siteApis'

const formSchema = z.object({
    tourId: z.string().min(1, { message: "Please select Name" }),
})


function CreateDiscountTour({ data }) {

    const [value, setValue] = React.useState(new Set([]));
    const [loader, setLoader] = useState(false);


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tourId: "",
        },
    })


    const onSubmit = async (data) => {
        console.log("id", data);

        setLoader(true)
        const res = await addDiscountTour(data)
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



    return (
        <section className="mt-10 bg-white dark:bg-darkMode px-4 py-6  rounded-md shadow-lg ">
            <div className='mt-6'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className='gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                            <FormField
                                control={form.control}
                                name="tourId"
                                render={({ field }) => (
                                    <FormItem

                                    >
                                        <FormLabel>Select Tour </FormLabel>
                                        <FormControl
                                        >

                                            <Select
                                                {...field}
                                                aria-label='Select Tour'
                                                placeholder="Select Tour"
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
                                                    data?.map((item) => {
                                                        return (

                                                            <SelectItem
                                                                className=' '
                                                                // key={"5185482121820"
                                                                // }
                                                                key={item?._id}
                                                            >
                                                                {item?.title}
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

export default CreateDiscountTour;
