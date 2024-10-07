"use client"
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import React, { useState } from 'react'
import HeadingOne from '../reuseable/HeadingOne';
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
import toast from 'react-hot-toast';
import { ContactMessage } from '@/lib/siteApis';
import { Loader2 } from 'lucide-react';


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name is Required",
    }),
    email: z.string().min(2, {
        message: "Email is Required",
    }),
    message: z.string().min(5, {
        message: "Message should be atleast 5 character",
    }),
})
function ContactForm() {
    const [loader, setLoader] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values) {
        setLoader(true)
        const res = await ContactMessage(values)
        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            toast?.success(res?.message)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }
    }

    return (
        <Card
            radius='lg'
            shadow='lg'
            className='lg:w-1/2 w-full h-full pt-4 lg:pb-12 pb-8 sm:px-6 px-4'>
            <CardHeader className=' flex flex-col items-center  justify-center'>
                <HeadingOne >
                    Schick Uns Eine
                </HeadingOne>
                <HeadingOne >
                    Nachricht
                </HeadingOne>
            </CardHeader>
            <CardBody className='p-0 sm:mt-4 mt-2'>
                <Form {...form}>
                    <form onSubmit={form?.handleSubmit(onSubmit)} className="w-full">
                        <div className='flex items-center flex-col sm:gap-y-6 gap-y-4'>
                            <FormField
                                className='relative '
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                className='w-full max-w-full outline-none focus:outline-none h-14 border-[#04326359] border-1 rounded-lg placeholder:text-ocean text-ocean placeholder:text-base'
                                                type="text"
                                                placeholder="Your Name" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                className='relative '
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                className='w-full max-w-full outline-none focus:outline-none h-14 border-[#04326359] border-1 rounded-lg placeholder:text-ocean  text-ocean placeholder:text-base'
                                                type="email"
                                                placeholder="Your Email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                className='relative '
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormControl>
                                            <textarea
                                                {...field}
                                                className='w-full max-w-full outline-none focus:outline-none min-h-[120px] border-[#04326359] border-1 rounded-lg px-2.5 py-4 placeholder:text-ocean text-ocean placeholder:text-base'
                                                placeholder="Your Message here..." />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className='mt-4 w-full rounded-full bg-amber hover:bg-amber h-11'>
                            {loader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'SEND'}
                        </Button>
                    </form>
                </Form>

            </CardBody>

        </Card>
    )
}

export default ContactForm;
