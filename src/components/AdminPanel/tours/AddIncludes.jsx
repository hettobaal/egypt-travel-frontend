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
import { addIncludePoint } from '@/lib/siteApis'
import toast from 'react-hot-toast'
import Heading from '@/components/reuseable/Heading'

const formSchema = z.object({
    includes: z.array(z.object({
        point: z.string().min(1, { message: "Included point is required" }),
        type: z.enum(["included", "excluded"], { errorMap: () => ({ message: "Select either included or excluded" }) }),
    })),
})


function AddIncludes({ id, setData }) {

    const [loader, setLoader] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            includes: [{ point: " ", type: "included" }],
        },
    })


    // Includes
    const {
        fields: includeFields,
        append: appendInclude,
        remove: removeInclude,
    } = useFieldArray({
        control: form.control,
        name: "includes",
    });

    const onSubmit = async (data) => {

        setLoader(true)
        const res = await addIncludePoint(data, id)

        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            setData((prevData) => {
                return {
                    ...prevData,
                    includes: [...res?.data?.includes], // Merge new includes with existing ones
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
                            <div>
                                <Heading>
                                    Add More
                                </Heading>
                                <div className='mt-4 gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                                    {includeFields?.map((field, index) => (
                                        <FormField
                                            key={field.id}
                                            control={form.control}
                                            name={`includes.${index}.point`}
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
                                                        <FormField
                                                            control={form.control}
                                                            name={`includes.${index}.type`}
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <div className="flex items-center space-x-4">
                                                                        <label className="flex items-center space-x-2">
                                                                            <input
                                                                                {...field}
                                                                                type="radio"
                                                                                value="included"
                                                                                checked={field.value === "included"}
                                                                            />
                                                                            <span>✔️ Included</span>
                                                                        </label>
                                                                        <label className="flex items-center space-x-2">
                                                                            <input
                                                                                {...field}
                                                                                type="radio"
                                                                                value="excluded"
                                                                                checked={field.value === "excluded"}
                                                                            />
                                                                            <span>❌ Exclude</span>
                                                                        </label>
                                                                    </div>
                                                                </FormItem>
                                                            )}
                                                        />

                                                        {includeFields.length > 1 && (
                                                            <Button
                                                                type="button"
                                                                variant="outline"
                                                                className='text-white bg-red-500 hover:bg-darkBlue'
                                                                onClick={() => removeInclude(index)}
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
                                    onClick={() => appendInclude({ point: "", type: "included" })}
                                    className="flex items-center space-x-2 mt-4 text-white bg-blue hover:bg-darkBlue"
                                >
                                    <Plus className="h-4 w-4" />
                                    <span>Add Include Point</span>
                                </Button>
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

export default AddIncludes;
