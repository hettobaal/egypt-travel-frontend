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
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { updateCategoryById } from '@/lib/siteApis'


const formSchema = z.object({
    categoryName: z.string().min(1, { message: "Category Name is required " }),
    categoryImage: z
        .any(),
    categoryMobImage: z
        .any(),
    bannerText: z.string().min(1, { message: "Category Name is required " }),
    bannerSlogan: z.string().min(1, { message: "Category Name is required " }),

})

function UpdateCategory({ data, setData, id }) {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [loader, setLoader] = useState(false);


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryName: data?.categoryName,
            categoryImage: null,
            categoryMobImage: null,
            bannerText: data?.bannerText,
            bannerSlogan: data?.bannerSlogan,
        },
    })


    const onSubmit = async (categoryData) => {

        setLoader(true)
        const res = await updateCategoryById(categoryData, id)
        setLoader(false)
        if (res?.status == "Success") {
            toast?.success(res?.message)
            setLoader(false)
            const newImageId = res?.data?.categoryImage;
            const newMobImageId = res?.data?.categoryMobImage;
            setData((prevData) =>
                prevData?.map((item) =>
                    item?._id === id
                        ? {
                            ...item,
                            categoryName: categoryData?.categoryName,
                            categoryImage: newImageId,
                            categoryMobImage: newMobImageId,
                            bannerText: categoryData?.bannerText,
                            bannerSlogan: categoryData?.bannerSlogan,
                        }
                        : item
                )
            );
            onClose();
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };


    const fileRef = form.register("categoryImage");
    const fileRef2 = form.register("categoryMobImage");
    return (
        <>
            <Button
                className="w-32  text-white bg-blue hover:bg-darkBlue"
                onClick={onOpen}
            >
                Edit
            </Button>
            <Modal
                size="xl"
                className="dark:bg-darkMode pb-3"
                isOpen={isOpen}
                onOpenChange={onOpenChange}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Update Category</ModalHeader>
                        <ModalBody>
                            <Form {...form}>
                                <form onSubmit={form?.handleSubmit(onSubmit)} className="space-y-8">
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
                                                    <FormMessage />
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
                                                                field?.onChange(event.target?.files?.[0] ?? undefined);
                                                            }}
                                                            type="file"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="categoryMobImage"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">
                                                        category Mobile Image
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className='dark:bg-darkModeSecondary  outline-none '
                                                            {...fileRef2} onChange={(event) => {
                                                                field.onChange(event.target?.files?.[0] ?? undefined);
                                                            }}
                                                            type="file"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="bannerText"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">
                                                        Banner Title </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            className='dark:bg-darkModeSecondary  outline-none '
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="bannerSlogan"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">
                                                        Banner Text </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            className='dark:bg-darkModeSecondary  outline-none '
                                                            type="text"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="mt-[1.5rem]">
                                        <Button
                                            type="submit"
                                            className="w-32  text-white bg-blue hover:bg-darkBlue"
                                        >
                                            {loader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Update'}
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </ModalBody>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UpdateCategory;
