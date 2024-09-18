"use client"
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import HeadingOne from '../reuseable/HeadingOne';
import { Minus, Plus } from 'lucide-react';

function Frequently() {
    const [openItem, setOpenItem] = useState(null);

    const handleToggle = (itemId) => {
        setOpenItem(openItem === itemId ? null : itemId);
    }

    const questions = [
        {
            id: 'item-1',
            title: "Where can I find my activity's meeting point information?",
            content: "Lorem ipsum dolor sit amet consectetur. Ut et laoreet platea aliquam  dolor sit amet consectetuEget dignissim id et t."
        },
        {
            id: 'item-2',
            title: "Activity restrictions and requirements",
            content: "Yes. It comes with default styles that matches the other components' aesthetic."
        },
        {
            id: 'item-3',
            title: "I can't submit my personal details. What do I do?",
            content: "Yes. It's animated by default, but you can disable it if you prefer."
        },
        {
            id: 'item-4',
            title: "Where can I find the activity's pickup information?",
            content: "Yes. It's animated by default, but you can disable it if you prefer."
        },
        {
            id: 'item-5',
            title: "I'm running late to my activity. What do I do?",
            content: "Yes. It's animated by default, but you can disable it if you prefer."
        },
    ];

    return (
        <MaxWidthWrapper className=' max-w-screen-lg sm:mt-8 mt-2 sm:mb-4 mb-2'>
            <HeadingOne className='text-center'>
                Die häufigsten
                {` `} <span className='text-amber'>
                    Fragen
                </span>
            </HeadingOne>
            <Accordion type="single" collapsible className="w-full flex flex-col gap-y-4 sm:mt-8 mt-6">
                {questions?.map((question) => (
                    <AccordionItem
                        key={question?.id}
                        className={` ${openItem === question?.id ? 'bg-navy py-4' : 'bg-transparent py-2'} border-1 border-[#04326387] rounded-lg lg:ps-8 ps-2 lg:pr-4 pr-2`}
                        value={question?.id}
                    >
                        <AccordionTrigger
                            onClick={() => handleToggle(question?.id)}
                            className='hover:border-b-0 hover:underline-none flex gap-2 items-start py-1'
                        >
                            <span>
                                <h4 className={`${openItem === question?.id ? 'text-white' : 'text-[#131313]'} text-base text-start font-semibold`}>
                                    {question?.title}
                                </h4>
                            </span>
                            <span className={`${openItem === question?.id ? 'bg-amber' : 'bg-[#dee4eb]'} p-1.5 rounded-full`}>
                                {openItem === question?.id ? <Minus strokeWidth={2} size={18} color='#FFFFFF' /> : <Plus strokeWidth={1.5} size={18} />}
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className={`sm:max-w-screen-sm max-w-[290px] ${openItem === question.id ? 'text-white' : 'text-[#131313]'}`}>
                            {question?.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </MaxWidthWrapper>
    )
}

export default Frequently;
