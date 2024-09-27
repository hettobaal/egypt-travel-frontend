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
import Link from 'next/link';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";


const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First Name is Required",
    }),
    lastName: z.string().min(2, {
        message: "Last Name is Required",
    }),
    phoneNumber: z.coerce.number().gte(1, { message: 'Number is required' }),
    email: z.string().min(2, {
        message: "Email is Required",
    }),
    review: z.string().min(4, {
        message: "Review should be At least 4 Character",
    }),
})
function AddReview() {
    const [rating, setRating] = useState(0);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            review: "",
        },
    })

    function onSubmit(values) {
        values.rating = rating;
        console.log("values", values)
    }

    return (
        <Card
            radius='lg'
            shadow='lg'
            className='lg:w-[60%] w-full h-full pt-6 lg:pb-12 pb-8 sm:px-8 px-4'>
            <CardHeader className=' flex flex-col items-center  justify-center'>
                <HeadingOne >
                    Eine Rezension {' '} <span className='text-amber'>
                        Schreiben
                    </span>
                </HeadingOne>
            </CardHeader>
            <CardBody className='p-0 sm:mt-4 mt-2'>
                <Form {...form}>
                    <form onSubmit={form?.handleSubmit(onSubmit)} className="w-full">
                        <div className='flex items-center flex-col sm:gap-y-6 gap-y-4'>
                            <div className='w-full flex lg:flex-row flex-col gap-x-4 gap-y-4'>
                                <FormField
                                    className='relative w-full'
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='w-full max-w-full outline-none focus:outline-none h-14 border-[#04326359] border-1 rounded-lg placeholder:text-ocean text-ocean placeholder:text-base'
                                                    type="text"
                                                    placeholder="First Name" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    className='relative w-full'
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='w-full max-w-full outline-none focus:outline-none h-14 border-[#04326359] border-1 rounded-lg placeholder:text-ocean  text-ocean placeholder:text-base'
                                                    type="text"
                                                    placeholder="Last Name" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='w-full flex lg:flex-row flex-col gap-x-4 gap-y-4'>
                                <FormField
                                    className='relative w-full'
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='w-full max-w-full outline-none focus:outline-none h-14 border-[#04326359] border-1 rounded-lg placeholder:text-ocean text-ocean placeholder:text-base'
                                                    type="email"
                                                    placeholder="info@gmail.com" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    className='relative w-full'
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='w-full max-w-full outline-none focus:outline-none h-14 border-[#04326359] border-1 rounded-lg placeholder:text-ocean  text-ocean placeholder:text-base'
                                                    type="number"
                                                    placeholder="Phone Number" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='w-full flex flex-col gap-y-2'>
                                <span className="flex gap-x-2 cursor-pointer">
                                    {[0, 1, 2, 3, 4].map((star) => (
                                        <span key={star} onClick={() => setRating(star)}>
                                            {rating >= star ? (
                                                <IoIosStar size={30} color="gold" />
                                            ) : (
                                                <IoIosStarOutline size={30} />
                                            )}
                                        </span>
                                    ))}
                                </span>
                                <FormField
                                    className='relative '
                                    control={form.control}
                                    name="review"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormControl>
                                                <textarea
                                                    {...field}
                                                    className='w-full max-w-full outline-none focus:outline-none min-h-[120px] max-h-[200px]  border-[#04326359] border-1 rounded-lg px-2.5 py-4 placeholder:text-ocean text-ocean placeholder:text-base'
                                                    placeholder="Share details of your own experience at this place" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className=' flex lg:flex-row flex-col gap-y-3 justify-center items-center gap-x-2 mx-auto mt-4'>
                            <Link href="/" className='lg:w-max w-full'>
                                <Button className='px-8 lg:w-max w-full rounded-full bg-white hover:bg-white h-11 border-2 border-navy text-navy'>CANCEl</Button>
                            </Link>
                            <Button type="submit" className='px-10 lg:w-max w-full rounded-full bg-navy hover:bg-navy h-11  text-white'>POST</Button>
                        </div>
                    </form>
                </Form>
            </CardBody>
        </Card>
    )
}

export default AddReview;
