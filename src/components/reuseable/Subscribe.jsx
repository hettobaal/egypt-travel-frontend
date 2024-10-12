"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { addSubscribe } from '@/lib/siteApis'

const formSchema = z.object({
    email: z.string().min(2, {
        message: "Email Required",
    }),
})
function Subscribe() {
    const [loader, setLoader] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    async function onSubmit(values) {
        setLoader(true)
        const res = await addSubscribe(values)
        if (res?.status == "success") {
            setLoader(false)
            toast?.success(res?.message)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }
    }

    return (
        <div className="w-full flex items-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex  items-center space-x-2 mt-2">
                    <FormField
                        className='relative '
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className='w-full max-w-full outline-none focus:outline-none h-11'
                                        type="email"
                                        placeholder="Email Here" />
                                </FormControl>
                                <FormMessage className='absolute  ' />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='rounded-full bg-amber hover:bg-amber h-11'>
                        {loader ? <span className='flex items-center'>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" /> {` `} Subscribe
                        </span> : 'Subscribe'}
                    </Button>
                </form>
            </Form>

        </div>
    )
}

export default Subscribe
