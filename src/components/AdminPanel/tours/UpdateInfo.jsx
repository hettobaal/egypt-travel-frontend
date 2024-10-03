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
import { updateInfo } from '@/lib/siteApis'


const formSchema = z.object({
    infoHeading: z.string().optional(),
    infoPoint: z.string().optional(),
})

function UpdateInfo({ TourData, id, setData }) {
    const pointData = TourData?.points[0]

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [loader, setLoader] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            infoHeading: TourData?.heading,
            infoPoint: pointData,
        },
    })

    const onSubmit = async (data) => {
        setLoader(true)
        const res = await updateInfo(data, id, TourData?._id)

        setLoader(false)
        if (res?.status == "Success") {
            toast?.success(res?.message)
            setData((prevData) => {
                return {
                    ...prevData,
                    includes: prevData?.includes?.map((include) =>
                        include?._id === TourData?._id
                            ? {
                                ...include,
                                infoHeading: data?.infoHeading,
                                infoPoint: data?.infoPoint,
                            }
                            : include
                    ),
                };
            });

            onClose();
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };


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
                        <ModalHeader className="flex flex-col gap-1">Update Tour</ModalHeader>
                        <ModalBody>
                            <Form {...form}>
                                <form onSubmit={form?.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className='gap-6 grid  sm:grid-cols-2 grid-cols-1  w-full'>
                                        <FormField
                                            control={form.control}
                                            name="infoHeading"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">Heading</FormLabel>
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
                                            name="infoPoint"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">Point</FormLabel>
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

export default UpdateInfo;
