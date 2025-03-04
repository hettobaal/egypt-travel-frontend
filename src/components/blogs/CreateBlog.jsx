"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';
import Editor from './Editor';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { addBlog } from '@/lib/siteApis';


function CreateBlog() {
    const [formData, setFormData] = useState({
        category: 'design',
        title: '',
        cardImage: null,
        blogBannerImage: null,
        shortDesc: '',
        content: ''
    });

    const [loading, setLoading] = useState(false)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData((prev) => ({
            ...prev,
            cardImage: file,
        }));
    };
    const handleFileBannerChange = (event) => {
        const file = event.target.files[0];
        setFormData((prev) => ({
            ...prev,
            blogBannerImage: file,
        }));
    };

    const handleEditorChange = (content) => {
        setFormData((prev) => ({ ...prev, content }));
    };



    // const handleCategory = (category) => {
    //     setFormData((prev) => ({ ...prev, category }));


    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        const res = await addBlog(formData)
        if (res?.status === "Success") {
            toast?.success(res?.message);
            setLoading(false)
        } else {
            setLoading(false)
            toast?.error(res?.message);
        }
    }


    return (
        <section className="w-full mt-10 bg-white dark:bg-darkMode px-4 py-6  rounded-md shadow-lg ">
            <div className='w-full mt-6'>
                <form
                    onSubmit={handleSubmit}
                    className='w-full'
                >
                    <div className='w-full gap-6 grid sm:grid-cols-2 grid-cols-1  '>

                        <div className='space-y-2'>
                            <label
                                className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base dark:text-white font-semibold'>
                                Title
                            </label>
                            <input
                                name='title'
                                onChange={handleInputChange}
                                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-darkModeSecondary outline-none'
                                required
                                type="text"
                                value={formData['title']}
                            />
                        </div>
                        <div className='space-y-2'>
                            <label
                                className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base dark:text-white font-semibold'>
                                Card Image
                            </label>
                            <input
                                name="cardImage"
                                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-darkModeSecondary outline-none'
                                type="file"
                                required
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className='space-y-2'>
                            <label
                                className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base dark:text-white font-semibold'>
                                Blog Banner Image
                            </label>
                            <input
                                name="blogBannerImage"
                                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-darkModeSecondary outline-none'
                                type="file"
                                required
                                onChange={handleFileBannerChange}
                            />
                        </div>
                        <div className='space-y-2'>
                            <label
                                className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base dark:text-white font-semibold'>
                                Short Description
                            </label>
                            <textarea
                                name='shortDesc'
                                onChange={handleInputChange}
                                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-darkModeSecondary outline-none min-h-[80px]'
                                required
                                type="text"
                                placeholder='maximum length 450 characters'
                                value={formData['shortDesc']}
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <Editor
                            handleEditorChange={handleEditorChange}
                            data={''}
                        />
                    </div>
                    <Button
                        className='bg-blue text-white mt-6'
                        type='submit'
                    >
                        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Create'}
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default CreateBlog;
