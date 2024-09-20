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
import { EditIcon } from '@/components/reuseable/EditIcon'
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { updateTourById } from '@/lib/siteApis'


const formSchema = z.object({
    // highlights: z.string().optional()
    title: z.string().optional()
})

function UpdateTourItem({ data, id }) {
    // console.log("modal", data);
    // console.log("modal id", id);

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [loader, setLoader] = useState(false);


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // highlights: data
            title: data
        },
    })


    const onSubmit = async (data) => {
        console.log("UpdateData", data);

        setLoader(true)
        const res = await updateTourById(data, id)
        console.log("res", res);

        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            // const newImageId = res?.data?.categoryImage;
            // setData((prevData) =>
            //     prevData.map((item) =>
            //         item?._id === id
            //             ? { ...item, categoryName: categoryData?.categoryName, categoryImage: newImageId }
            //             : item
            //     )
            // );
            onClose();
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };


    return (
        <>

            <EditIcon
                aria-label="Edit User"
                onClick={onOpen}
            />
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
                                            name="title"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">title</FormLabel>
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

export default UpdateTourItem;
