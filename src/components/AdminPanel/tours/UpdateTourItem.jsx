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
    tag: z.string().optional(),
    heading: z.string().optional(),
    description: z.string().optional(),
    fullDescription: z.string().optional(),
    priceAdult: z.coerce.number().optional(),
    adultPriceAfterDiscount: z.coerce.number().optional(),
    childPriceAfterDiscount: z.coerce.number().optional(),
    priceChild: z.coerce.number().optional(),
    priceInfant: z.coerce.number().optional(),
    discountAmount: z.coerce.number().optional(),
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
            tag: TourData?.tag,
            description: TourData?.description,
            fullDescription: TourData?.fullDescription,
            priceAdult: TourData?.priceAdult,
            priceChild: TourData?.priceChild,
            priceInfant: TourData?.priceInfant,
            adultPriceAfterDiscount: TourData?.adultPriceAfterDiscount,
            childPriceAfterDiscount: TourData?.childPriceAfterDiscount,
            discountAmount: TourData?.discountAmount,
            duration: TourData?.duration,
        },
    })

    const onSubmit = async (data) => {

        setLoader(true)
        const res = await updateTourById(data, id)
        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            toast?.success(res?.message)
            const newImageId = res?.data?.cardImage;
            const adultPriceAfterDiscount = res?.data?.adultPriceAfterDiscount;
            const childPriceAfterDiscount = res?.data?.childPriceAfterDiscount;
            setData((prevData) => {
                if (prevData?._id === id) {
                    return {
                        ...prevData,
                        title: data?.title,
                        tag: data?.tag,
                        cardImage: newImageId,
                        description: data?.description,
                        fullDescription: data?.fullDescription,
                        priceAdult: data?.priceAdult,
                        adultPriceAfterDiscount: adultPriceAfterDiscount,
                        priceChild: data?.priceChild,
                        childPriceAfterDiscount: childPriceAfterDiscount,
                        discountAmount: data?.discountAmount,
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
                Edit
            </Button>
            <Modal
                size="xl"
                className="dark:bg-darkMode pb-3  max-h-[80vh] overflow-y-auto"
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
                                            name="tag"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">Tag</FormLabel>
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
                                            name="priceInfant"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">Infant Price</FormLabel>
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
                                            name="discountAmount"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">Discount Amount</FormLabel>
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
                                        <FormField
                                            control={form.control}
                                            name="fullDescription"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">full Description</FormLabel>
                                                    <FormControl>
                                                        <textarea {...field} className='outline-none dark:bg-darkModeSecondary flex min-h-14 max-h-52 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50' />
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
