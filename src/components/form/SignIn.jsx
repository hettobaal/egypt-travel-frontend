'use client'
import React, { useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form';
import { Input } from "../../components/ui/input"
import { useForm } from "react-hook-form"
import { Button } from '../../components/ui/button';
import { zodResolver } from "@hookform/resolvers/zod"
import '../../app/globals.css'
import { Loader2 } from 'lucide-react';
import { userLogin } from '@/lib/siteApis';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const FormSchema = z.object({
    email: z.string().min(4, {
        message: "Email must be at least 4 characters.",
    }),
    password: z.string().min(3, {
        message: "Password must be at least 3 characters.",
    }),
})

function SignIn() {

    const [showPassword, setShowPassword] = useState(false);
    const [loader, setLoader] = useState(false);

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const router = useRouter()

    const onSubmit = async (userData) => {
        setLoader(true)
        const res = await userLogin(userData)
        setLoader(false)
        if (res?.status == "success") {
            setLoader(false)
            if (res?.token) {
                Cookies.set("authToken", res?.token);
                Cookies.set("isLogin", true);
            }
            router?.push('/view-categories')
            toast?.success(res?.message)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    }

    return (
        <section className='bg-silver  dark:bg-darkModeSecondary flex p-10 justify-center items-center max-auto h-screen'>
            <div className=' flex  md:max-w-[800px] items-center bg-white dark:bg-darkMode w-full shadow-xl  '>
                <div className='bg-white  w-full px-6 rounded-lg py-6 dark:bg-darkMode '>
                    <h1 className='text-black text-xl text-center  font-semibold font-roboto py-2 dark:text-white'>Sign in</h1>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-6 mt-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className='relative'>
                                            <FormLabel className='dark:text-white'>Email <sup className='text-red-500 text-sm ' >*</sup></FormLabel>

                                            <FormControl className='mt-2'>
                                                <div className='relative'>
                                                    <Input  {...field} className=' focus-visible:outline-none  dark:bg-darkModeSecondary' />
                                                    <i
                                                        type="button"
                                                        className="absolute inset-y-0 right-0 top-0 bottom-0 flex items-center px-2 focus:outline-none "
                                                    >
                                                        <FaUserCircle className="h-4 w-4 text-black dark:text-white" />
                                                    </i>
                                                </div>
                                            </FormControl>

                                            <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel className='dark:text-white'>Password <sup className='text-red-500 text-sm ' >*</sup></FormLabel>
                                        <FormControl className='mt-2'>
                                            <div className="relative">
                                                <Input type={showPassword ? 'text' : 'password'} {...field} className='focus-visible:outline-none  dark:bg-darkModeSecondary' />
                                                <button
                                                    type="button"
                                                    className="absolute inset-y-0 right-0  bottom-0 flex items-center px-2 focus:outline-none "
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <FaEyeSlash className="h-5 w-5 duration-300 text-gray dark:text-white" /> : < IoEyeSharp className="h-5 w-5 text-gray duration-300 dark:text-white" />}
                                                </button>
                                            </div>
                                        </FormControl>


                                        <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className='w-full bg-blue hover:bg-blue duration-300 mt-4 dark:text-white' > {loader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Login'}</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default SignIn;