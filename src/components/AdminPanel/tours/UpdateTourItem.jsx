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
import { updateTourById } from '@/lib/siteApis'


const formSchema = z.object({
    cardImage: z
        .any(),
    title: z.string().optional(),
    description: z.string().optional(),
    strikePrice: z.coerce.number().optional(),
    priceAdult: z.coerce.number().optional(),
    priceChild: z.coerce.number().optional(),
    duration: z.coerce.number().optional(),
})

function UpdateTourItem({ TourData, id, setData }) {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [loader, setLoader] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cardImage: '',
            title: TourData?.title,
            description: TourData?.description,
            strikePrice: TourData?.strikePrice,
            priceAdult: TourData?.priceAdult,
            priceChild: TourData?.priceChild,
            duration: TourData?.duration,
        },
    })

    const onSubmit = async (data) => {
        setLoader(true)
        const res = await updateTourById(data, id)
        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            const newImageId = res?.data?.cardImage;
            setData((prevData) => {
                if (prevData?._id === id) {
                    return {
                        ...prevData,
                        title: data?.title,
                        cardImage: newImageId,
                        description: data?.description,
                        strikePrice: data?.strikePrice,
                        priceAdult: data?.priceAdult,
                        priceChild: data?.priceChild,
                        duration: data?.duration,
                    };
                }
                return prevData;
            });
            onClose();
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };

    const fileRef = form.register("cardImage");

    return (
        <>
            <Button
                className="w-32  text-white bg-blue hover:bg-darkBlue"
                onClick={onOpen}
            >
                Update
            </Button>
            <Modal
                size="xl"
                className="dark:bg-darkMode pb-3"
                isOpen={isOpen}
                onOpenChange={onOpenChange}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Update Tour</ModalHeader>
                        <ModalBody>
                            <Form {...form}>
                                <form onSubmit={form?.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className='gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
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
                                                    <FormMessage />
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
                                                    <FormMessage />
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
                                            name="strikePrice"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">Strike Price</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            className='dark:bg-darkModeSecondary  outline-none '
                                                            type="number"
                                                        />
                                                    </FormControl>
                                                    <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="priceAdult"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">Adult Price</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            className='dark:bg-darkModeSecondary  outline-none '
                                                            type="number"
                                                        />
                                                    </FormControl>
                                                    <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="priceChild"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">Child Price</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            className='dark:bg-darkModeSecondary  outline-none '
                                                            type="number"
                                                        />
                                                    </FormControl>
                                                    <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="duration"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">Duration</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            className='dark:bg-darkModeSecondary  outline-none '
                                                            type="number"
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

export default UpdateTourItem;
