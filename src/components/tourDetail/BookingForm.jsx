"use client"
import React, { useEffect, useState } from 'react'
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
import BookingDetail from './BookingDetail'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import HeadingThree from '../reuseable/HeadingThree'
import { HiOutlineUsers } from "react-icons/hi";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, SelectItem, Select } from "@nextui-org/react";
import { RiEnglishInput } from "react-icons/ri";
import { RxMinusCircled, RxPlusCircled } from "react-icons/rx";
import { IoMdArrowDropdown } from 'react-icons/io'
import Para from '../reuseable/Para'
import { CalendarDays, Globe } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import { format } from 'date-fns';
import { IoLanguageOutline } from 'react-icons/io5'

const formSchema = z.object({
    person: z.string().min(2, {
        message: "Required",
    }),
    date: z.string().min(2, {
        message: "Email is Required",
    }),
    language: z.string().min(1, {
        message: "Please Select language",
    }),
    name: z.string().min(2, {
        message: "Name is Required",
    }),
    phone: z.string().min(2, {
        message: "Name is Required",
    }),
    email: z.string().min(2, {
        message: "Name is Required",
    }),
})






function BookingForm({ data }) {

    const [formData, setFormData] = useState({});
    const [isBookingDetailVisible, setIsBookingDetailVisible] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);
    const [selectedDate, setSelectedDate] = useState();
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const incrementAdults = () => setAdults(adults + 1);
    const decrementAdults = () => setAdults(adults > 0 ? adults - 1 : 1);

    const incrementChildren = () => setChildren(children + 1);
    const decrementChildren = () => setChildren(children > 0 ? children - 1 : 0);


    const incrementInfant = () => setInfant(infant + 1);
    const decrementInfant = () => setInfant(infant > 0 ? infant - 1 : 0);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            person: "",
            date: "",
            language: "",
            name: "",
            phone: "",
            email: "",
        },
    })

    useEffect(() => {
        const personString = `Adult x ${adults}, Child x ${children}  infant x ${infant}`;
        form.setValue("person", personString);
    }, [adults, children, infant, form]);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        form.setValue("language", language);
        setIsDropdownOpen(false);
    };


    function onSubmit(values) {
        setFormData(values)
        setIsBookingDetailVisible(true);
    }


    return (
        <>

            <MaxWidthWrapper className='sm:mt-8 mt-8'>
                <div className='lg:w-[80%] w-full bg-navy py-8 sm:px-6 px-4 rounded-2xl '>
                    <HeadingThree className='text-white sm:text-xl'>
                        Reisende, Datum und Sprache
                    </HeadingThree>

                    <Form {...form}>
                        <form onSubmit={form?.handleSubmit(onSubmit)} className="w-full  flex lg:flex-row flex-col items-center gap-x-6 gap-y-2 mt-5">
                            <div className='w-full grid items-center md:grid-cols-3 grid-cols-1 gap-y-4 gap-x-2'>
                                <FormField
                                    className='relative w-full'
                                    control={form.control}
                                    name="person"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormControl className>
                                                <Dropdown>
                                                    <DropdownTrigger className='w-full bg-white aria-expanded:opacity-100 h-12  rounded-full aria-expanded:scale-[1]'>
                                                        <Button
                                                            variant="bordered"
                                                        >
                                                            <div className="flex items-center relative w-full">
                                                                <HiOutlineUsers className="absolute  text-ocean" size={20} />
                                                                <Input
                                                                    {...field}
                                                                    className="w-full   h-12  border-none  pl-10 pr-12 placeholder:text-ocean placeholder:text-base cursor-pointer"
                                                                    type="text"
                                                                    placeholder={`Adult ${adults} x ${adults > 1 ? '' : ''}   Child x ${children} ${children > 1 ? '' : ''}  Infant x ${infant} ${infant > 1 ? '' : ''}`
                                                                    }

                                                                />
                                                                <IoMdArrowDropdown className="absolute right-1 text-ocean" size={25} />
                                                            </div>
                                                        </Button>
                                                    </DropdownTrigger>
                                                    <DropdownMenu closeOnSelect={false} aria-label="Static Actions">
                                                        <DropdownItem
                                                            textValue="Adult Count"
                                                            className="data-[hover=true]:bg-white ata-[focus-visible=true]:outline-offset-0">

                                                            <div className='flex flex-row justify-between items-center gap-x-16'>
                                                                <div>
                                                                    <h5 className='text-base font-semibold'>An adult</h5>
                                                                    <Para className='text-sm'>
                                                                        (Age 18-64)
                                                                    </Para>
                                                                </div>
                                                                <div className="flex items-center space-x-2">
                                                                    <RxMinusCircled size={20} onClick={decrementAdults} className="text-blue cursor-pointer"

                                                                    />
                                                                    <span>
                                                                        {adults}
                                                                    </span>
                                                                    <RxPlusCircled size={20} onClick={incrementAdults} className="cursor-pointer text-blue" />
                                                                </div>
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            textValue="Child Count"
                                                            className="data-[hover=true]:bg-white ata-[focus-visible=true]:outline-offset-0">

                                                            <div className='flex flex-row justify-between items-center gap-x-16'>
                                                                <div>
                                                                    <h5 className='text-base font-semibold'>Children
                                                                    </h5>
                                                                    <Para className='text-sm'>
                                                                        (Age 4-17)
                                                                    </Para>
                                                                </div>
                                                                <div className="flex items-center space-x-2">
                                                                    <RxMinusCircled size={20} onClick={decrementChildren} className="cursor-pointer text-blue" />
                                                                    <span>
                                                                        {children}
                                                                    </span>
                                                                    <RxPlusCircled size={20} onClick={incrementChildren} className="cursor-pointer text-blue" />
                                                                </div>
                                                            </div>
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            textValue="infant Count"
                                                            className="data-[hover=true]:bg-white ata-[focus-visible=true]:outline-offset-0">
                                                            <div className='flex flex-row justify-between items-center gap-x-16'>
                                                                <div>
                                                                    <h5 className='text-base font-semibold'>infant
                                                                    </h5>
                                                                    <Para className='text-sm'>
                                                                        (Above 1 Year )
                                                                    </Para>
                                                                </div>
                                                                <div className="flex items-center space-x-2">
                                                                    <RxMinusCircled size={20} onClick={decrementInfant} className="cursor-pointer text-blue" />
                                                                    <span>
                                                                        {infant}
                                                                    </span>
                                                                    <RxPlusCircled size={20} onClick=
                                                                        {incrementInfant} className="cursor-pointer text-blue" />
                                                                </div>
                                                            </div>
                                                        </DropdownItem>

                                                    </DropdownMenu>
                                                </Dropdown>

                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    className='relative w-full'
                                    control={form.control}
                                    name="date"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormControl>
                                                <Popover
                                                    open={isPopoverOpen} onOpenChange={setIsPopoverOpen}
                                                >
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant="bordered"
                                                            className='w-full bg-white h-12 rounded-full 
                                                            '
                                                        >
                                                            <div className="flex items-center relative w-full">
                                                                <CalendarDays strokeWidth={1.5} className="absolute text-ocean" size={20} />
                                                                <Input
                                                                    {...field}
                                                                    className="w-full h-12 border-none focus:outline-none pl-10 pr-12 placeholder:text-ocean placeholder:text-base cursor-pointer"
                                                                    type="text"
                                                                    placeholder="Select Date"
                                                                    value={selectedDate ? format(selectedDate, "PPP") : ""}
                                                                    readOnly
                                                                />
                                                                <IoMdArrowDropdown className="absolute right-1 text-ocean" size={25} />
                                                            </div>
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={selectedDate}
                                                            onSelect={(date) => {
                                                                if (date) {
                                                                    setSelectedDate(date);
                                                                    field.onChange(format(date, "PPP"));
                                                                    setIsPopoverOpen(false);
                                                                }
                                                            }}
                                                            // disabled={(date) => date < new Date("1900-01-01") || date > new Date()}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    className="relative w-full"
                                    control={form.control}
                                    name="language"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                <div className="relative w-full">
                                                    <button
                                                        type='button'
                                                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                                                        className="w-full bg-white h-12 rounded-full flex items-center justify-between px-4"
                                                    >
                                                        <div className="flex items-center w-full">
                                                            <Globe strokeWidth={1.25} className="text-ocean" size={20} />
                                                            <input
                                                                {...field}
                                                                className="w-full h-12 border-none focus:outline-none pl-4 placeholder:text-ocean placeholder:text-base cursor-pointer bg-white"
                                                                type="text"
                                                                placeholder="Select Language"
                                                                value={selectedLanguage || ""}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <IoMdArrowDropdown className="text-ocean" size={25} />
                                                    </button>
                                                    {isDropdownOpen && (
                                                        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 p-2 z-10">
                                                            <div
                                                                className="w-full cursor-pointer hover:bg-gray-100 p-2 rounded flex items-center gap-x-6"
                                                                onClick={() => {
                                                                    handleLanguageSelect("English");
                                                                    setIsDropdownOpen(false);
                                                                }}
                                                            >
                                                                <RiEnglishInput size={18} />
                                                                <p className="text-base font-semibold">English</p>
                                                            </div>
                                                            <div
                                                                className="w-full cursor-pointer hover:bg-gray-100 p-2 rounded flex items-center gap-x-6"
                                                                onClick={() => {
                                                                    handleLanguageSelect("German");
                                                                    setIsDropdownOpen(false);
                                                                }}
                                                            >
                                                                <IoLanguageOutline size={18} />
                                                                <p className="text-base font-semibold">German</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    className='relative w-full'
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='w-full max-w-full outline-none focus:outline-none h-12 border-[#04326359] border-1 rounded-full placeholder:text-ocean placeholder:pl-2 text-ocean placeholder:text-base'
                                                    type="text"
                                                    placeholder="Name" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    className='relative '
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className='w-full max-w-full outline-none focus:outline-none h-12 border-[#04326359] border-1 rounded-full placeholder:text-ocean placeholder:pl-2 text-ocean placeholder:text-base'
                                                    type="text"
                                                    placeholder="Telefon" />
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
                                                    className='w-full max-w-full outline-none focus:outline-none h-12 border-[#04326359] border-1 rounded-full placeholder:text-ocean placeholder:pl-2 text-ocean placeholder:text-base'
                                                    type="text"
                                                    placeholder="E-mail" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit" className='mt-4 px-10 rounded-full bg-amber hover:bg-amber h-11'>
                                Calculate
                            </Button>
                        </form>
                    </Form>
                </div>
            </MaxWidthWrapper >
            {isBookingDetailVisible && <BookingDetail data={data} formData={formData} />
            }
        </>
    )
}

export default BookingForm

