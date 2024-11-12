"use client"
import React, { useMemo, useState } from 'react'
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
import toast from 'react-hot-toast'
import Heading from '@/components/reuseable/Heading'
import { Select, SelectItem } from '@nextui-org/react'
import { addTour } from '@/lib/siteApis'

const formSchema = z.object({
    subCategoryId: z.string().min(1, { message: "Please select Category" }),
    title: z.string().min(1, { message: "Title is required" }),
    tag: z.string().min(1, { message: "Tag is required" }),
    description: z.string().min(1, { message: "Tag is required" }),
    priceAdult: z.coerce.number().gte(1, { message: 'Price is required' }),
    priceChild: z.coerce.number().gte(1, { message: 'Price is required' }),
    priceInfant: z.coerce.number().gte(1, { message: 'Price is required' }),
    discountAmount: z.coerce.number().optional(),
    Duration: z.coerce.number().gte(1, { message: 'Duration is required' }),
    cardImage: z
        .any()
        .refine((file) => file?.length == 1, 'File is required.'),
    tourImages: z.array(
        z.any().refine((file) => file instanceof File, 'File is required.')
    ),
    HighlightPoint: z.array(z.object({
        points: z.string().min(1, { message: "required" }),
    })),
    fullDescription: z.string().min(1, { message: "Description is required" }),
    includes: z.array(z.object({
        point: z.string().min(1, { message: "Included point is required" }),
        type: z.enum(["included", "excluded"], { errorMap: () => ({ message: "Select either included or excluded" }) }),
    })),
    // ImportantInformationHeading: z.string().min(1, { message: "Description is required" }),
    ImportantInformation: z.array(z.object({
        heading: z.string().min(1, { message: "Heading is required" }),
        points: z.array(z.string().min(1, { message: "Point is required" }))
    })).min(1, { message: "At least one section is required" })
})

function CreateTour({ data }) {

    const sortedData = useMemo(() => {
        if (Array.isArray(data)) {
            return [...data]?.sort((a, b) => {
                if (a?._id > b?._id) return -1;
                if (a?._id < b?._id) return 1;
                return 0;
            });
        }
        return [];
    }, [data]);
    const [subCategoryData, setSubCategoryData] = useState(sortedData || [])

    const [value, setValue] = React.useState(new Set([]));
    const [loader, setLoader] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subCategoryId: "",
            title: "",
            tag: "",
            description: "",
            priceAdult: "",
            priceChild: "",
            priceInfant: "",
            discountAmount: "",
            Duration: "",
            cardImage: "",
            tourImages: [],
            HighlightPoint: [{ points: " " }],
            fullDescription: "",
            includes: [{ point: " ", type: "included" }],
            // ImportantInformationHeading: "",
            ImportantInformation: [
                {
                    heading: "",
                    points: [" "]
                }
            ],
        },
    })

    // HighlightPoint
    const { fields, append, remove } = useFieldArray({
        control: form?.control,
        name: "HighlightPoint",
    });

    // Includes
    const {
        fields: includeFields,
        append: appendInclude,
        remove: removeInclude,
    } = useFieldArray({
        control: form.control,
        name: "includes",
    });

    // Important Information
    const { fields: importantInfoFields, append: appendImportantInfo, remove: removeImportantInfo } = useFieldArray({
        control: form.control,
        name: "ImportantInformation",
    });

    // Images
    const { fields: imageFields, append: appendImage, remove: removeImage } = useFieldArray({
        control: form.control,
        name: "tourImages"
    });


    const onSubmit = async (data) => {

        setLoader(true)
        const res = await addTour(data)
        setLoader(false)
        if (res?.status == "Success") {
            setLoader(false)
            toast?.success(res?.message)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };

    const fileRef = form?.register("cardImage");

    return (
        <section className="mt-10 bg-white dark:bg-darkMode px-4 py-6  rounded-md shadow-lg ">
            <div className='mt-6'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-y-4 space-y-8">
                            {/* First form */}
                            <div className='gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                                <FormField
                                    control={form.control}
                                    name="subCategoryId"
                                    render={({ field }) => (
                                        <FormItem

                                        >
                                            <FormLabel>Select SubCategory Name</FormLabel>
                                            <FormControl
                                            >
                                                <Select
                                                    {...field}
                                                    aria-label='Select SubCategory'
                                                    placeholder="Select SubCategory"
                                                    selectedKeys={value}
                                                    className="   border border-gray-400 outline-none rounded-lg focus-visible:ring-0 focus:ring-0 dark:bg-darkModeSecondary  "
                                                    onSelectionChange={setValue}
                                                    classNames={{
                                                        trigger: "bg-white dark:bg-darkModeSecondary hover:bg-white  rounded-lg",
                                                        listboxWrapper: 'max-h-32 overflow-y-auto dark:bg-darkModeSecondary',
                                                        mainWrapper: "dark:bg-darkModeSecondary rounded-lg",
                                                        popoverContent: 'dark:bg-darkModeSecondary',
                                                    }}
                                                >

                                                    {
                                                        subCategoryData?.map((item) => {
                                                            return (
                                                                <SelectItem
                                                                    key={item?._id
                                                                    }>
                                                                    {item?.subCategoryName}
                                                                </SelectItem>
                                                            )
                                                        })
                                                    }
                                                </Select>
                                            </FormControl>
                                            <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base dark:text-white  font-semibold">Tour Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='dark:bg-darkModeSecondary  outline-none '
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="tag"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base dark:text-white  font-semibold">Sight</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='dark:bg-darkModeSecondary  outline-none '
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />

                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cardImage"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base dark:text-white  font-semibold">Card Image</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className='dark:bg-darkModeSecondary  outline-none '
                                                    {...fileRef}
                                                    onChange={(event) => {
                                                        field?.onChange(event?.target?.files?.[0] ?? undefined);
                                                    }}
                                                    type="file"
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
                                    name="Duration"
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
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base dark:text-white  font-semibold">Description</FormLabel>
                                            <FormControl>
                                                <textarea {...field} className='outline-none dark:bg-darkModeSecondary flex h-10 max-h-52 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50' />
                                            </FormControl>
                                            <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />
                                        </FormItem>
                                    )}
                                />

                            </div>
                            {/* Second form */}
                            <div>
                                <div>
                                    <Heading>
                                        Images
                                    </Heading>
                                    <div className='mt-4 gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                                        {imageFields?.map((field, index) => (
                                            <FormField
                                                key={field?.id}
                                                control={form.control}
                                                name={`tourImages.${index}`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base dark:text-white font-semibold">
                                                            Image {index + 1}
                                                        </FormLabel>
                                                        <div className="flex space-x-2 items-center">
                                                            <FormControl>
                                                                <Input
                                                                    type="file"
                                                                    onChange={(e) => field.onChange(e.target.files?.[0])}
                                                                    className="dark:bg-darkModeSecondary outline-none"
                                                                />
                                                            </FormControl>
                                                            <Button
                                                                type="button"
                                                                variant="outline"
                                                                className='text-white bg-red-500 hover:bg-darkBlue'
                                                                onClick={() => removeImage(index)}
                                                            >
                                                                <Trash className="h-4 w-4 text-white" />
                                                            </Button>
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
                                        onClick={() => appendImage(null)}
                                        className="flex items-center space-x-2 mt-4 text-white bg-blue hover:bg-darkBlue"
                                    >
                                        <Plus className="h-4 w-4" />
                                        <span>Add Image</span>
                                    </Button>

                                </div>
                            </div>
                            {/* third form */}
                            <div className='flex flex-col gap-y-8'>
                                <div>
                                    <Heading>
                                        Highlights
                                    </Heading>
                                    <div className='mt-4 gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                                        {fields?.map((field, index) => (
                                            <FormField
                                                key={field.id}
                                                control={form.control}
                                                name={`HighlightPoint.${index}.points`}
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
                                                            {fields?.length > 1 && (
                                                                <Button
                                                                    type="button"
                                                                    variant="outline"
                                                                    className='text-white bg-red-500 hover:bg-darkBlue'
                                                                    onClick={() => remove(index)}
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
                                        onClick={() => append("")}
                                        className="flex items-center space-x-2 mt-4 text-white bg-blue hover:bg-darkBlue"
                                    >
                                        <Plus className="h-4 w-4" />
                                        <span>Add Highlights Points</span>
                                    </Button>
                                </div>
                                <div>
                                    <Heading>
                                        Full description
                                    </Heading>
                                    <div className='mt-4'>
                                        <FormField
                                            control={form.control}
                                            name="fullDescription"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base dark:text-white  font-semibold">Description</FormLabel>
                                                    <FormControl>
                                                        <textarea {...field} className='outline-none dark:bg-darkModeSecondary flex h-10 max-h-52 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50' />
                                                    </FormControl>
                                                    <FormMessage className='dark:text-white dark:py-2 dark:px-2 dark:rounded-md dark:bg-[#9c2b2e] ' />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Heading>
                                        Includes
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
                                <div>
                                    <Heading>
                                        Important Information
                                    </Heading>
                                    {importantInfoFields.map((section, sectionIndex) => (
                                        <div key={section.id} className='mt-4' >
                                            <FormField
                                                control={form.control}
                                                name={`ImportantInformation.${sectionIndex}.heading`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-base dark:text-white font-semibold">
                                                            Heading</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                className="dark:bg-darkModeSecondary outline-none"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <div className='mt-4 gap-6 grid sm:grid-cols-2 grid-cols-1  w-full'>
                                                {section.points.map((point, pointIndex) => (
                                                    <FormField
                                                        key={pointIndex}
                                                        control={form.control}
                                                        name={`ImportantInformation.${sectionIndex}.points.${pointIndex}`}
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-base dark:text-white font-semibold">Point</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        className="dark:bg-darkModeSecondary outline-none"
                                                                        {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                ))}
                                            </div>
                                            {/* <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => {
                                                    const currentPoints = form.getValues(`ImportantInformation.${sectionIndex}.points`);
                                                    form.setValue(`ImportantInformation.${sectionIndex}.points`, [...currentPoints, ""]);
                                                }}
                                                className="mt-2"
                                            >
                                                <Plus className="h-4 w-4 mr-2" /> Add Point
                                            </Button> */}
                                            {importantInfoFields.length > 1 && (
                                                <Button
                                                    className='text-white bg-red-500 hover:bg-darkBlue mt-2 ml-2'
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => removeImportantInfo(sectionIndex)}
                                                >
                                                    Remove
                                                </Button>
                                            )}
                                        </div>
                                    ))}
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="flex items-center space-x-2 mt-4 text-white bg-blue hover:bg-darkBlue"
                                        onClick={() => appendImportantInfo({ heading: "", points: [""] })}
                                    >
                                        <Plus className="h-4 w-4 mr-2" /> Add More
                                    </Button>
                                </div>
                            </div>
                            <div >
                                <Button
                                    type="submit"
                                    className="w-32  text-white bg-blue hover:bg-darkBlue"
                                >
                                    {loader ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Create'}
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    )
}

export default CreateTour;