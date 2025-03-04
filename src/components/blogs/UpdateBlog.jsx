"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Editor from './Editor';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { updateBlogItem } from '@/lib/siteApis';

function UpdateBlog({ entireBlog }) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        category: "design",
        title: entireBlog?.title,
        shortDesc: entireBlog?.shortDesc,
        content: entireBlog?.content || '',
    });

    const [cardImage, setCardImage] = useState(null);
    const [blogBannerImage, setBlogBannerImage] = useState(null);
    const [changedFields, setChangedFields] = useState({});
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setChangedFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setCardImage(file);
        setChangedFields((prev) => ({
            ...prev,
            cardImage: file,
        }));
    };

    const handleBannerFileChange = (event) => {
        const file = event.target.files[0];
        setBlogBannerImage(file);
        setChangedFields((prev) => ({
            ...prev,
            blogBannerImage: file,
        }));
    };

    const handleEditorChange = (content) => {
        setFormData((prev) => ({ ...prev, content }));
        setChangedFields((prev) => ({ ...prev, content }));
    };

    const handleSubmit = async (event, fieldType) => {
        event.preventDefault();
        // console.log("changedFields", changedFields);

        setLoading(true);
        const id = entireBlog?._id;

        const res = await updateBlogItem(changedFields, id);
      
        if (res?.status === "Success") {
            toast.success(res?.message);
            setLoading(false);
            router.push('/blog/view-blogs');
        } else {
            setLoading(false);
            toast.error(res?.message);
        }
    };


    const handleCardSubmit = async (event, fieldType) => {
        event.preventDefault();
      
        setLoading2(true);
        const id = entireBlog?._id;
        const res = await updateBlogItem(changedFields, id);
      
        if (res?.status === "Success") {
            toast.success(res?.message);
            setLoading2(false);
            router.push('/blog/view-blogs');
        } else {
            setLoading2(false);
            toast.error(res?.message);
        }
    };

    const handleBannerSubmit = async (event, fieldType) => {
        event.preventDefault();
 
        setLoading3(true);
        const id = entireBlog?._id;
        const res = await updateBlogItem(changedFields, id);
 
        if (res?.status === "Success") {
            toast.success(res?.message);
            setLoading3(false);
            router.push('/blog/view-blogs');
        } else {
            setLoading3(false);
            toast.error(res?.message);
        }
    };





    return (
        <section className="w-full mt-10 bg-white dark:bg-darkMode px-4 py-6 rounded-md shadow-lg">
            <div className="w-full mt-6">
                <form onSubmit={handleCardSubmit} className="w-full">
                    <div className="space-y-6">
                        <div>
                            <label className="text-base dark:text-white font-semibold">Card Image</label>
                            <input
                                name="cardImage"
                                type="file"
                                onChange={handleFileChange}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-darkModeSecondary outline-none"
                            />
                        </div>
                    </div>
                    <Button className="bg-blue text-white mt-6" type="submit">
                        {loading2 ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Update Card Image'}
                    </Button>
                </form>

                <form onSubmit={handleBannerSubmit} className="w-full mt-6">
                    <div className="space-y-6">
                        <div>
                            <label className="text-base dark:text-white font-semibold">Blog Banner Image</label>
                            <input
                                name="blogBannerImage"
                                type="file"
                                onChange={handleBannerFileChange}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-darkModeSecondary outline-none"
                            />
                        </div>
                    </div>
                    <Button className="bg-blue text-white mt-6" type="submit">
                        {loading3 ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Update Banner Image'}
                    </Button>
                </form>

                <form onSubmit={handleSubmit} className="w-full mt-6">
                    <div className="w-full gap-6 grid sm:grid-cols-2 grid-cols-1">
                        <div className="space-y-2">
                            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base dark:text-white font-semibold">
                                Title
                            </label>
                            <input
                                name="title"
                                onChange={handleInputChange}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-darkModeSecondary outline-none"
                                type="text"
                                value={formData['title']}
                            />
                        </div>

                        {/* <div className="space-y-2">
                            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base dark:text-white font-semibold">
                                Blog Banner Image
                            </label>
                            <input
                                name="blogBannerImage"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-darkModeSecondary outline-none"
                                type="file"
                                onChange={handleBannerFileChange}
                            />
                        </div> */}
                        <div className="space-y-2">
                            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base dark:text-white font-semibold">
                                Short Description
                            </label>
                            <textarea
                                name="shortDesc"
                                onChange={handleInputChange}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 dark:bg-darkModeSecondary outline-none min-h-[80px]"
                                type="text"
                                value={formData['shortDesc']}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <Editor
                            handleEditorChange={handleEditorChange}
                            data={entireBlog?.content}
                        />
                    </div>
                    <Button className="bg-blue text-white mt-6" type="submit">
                        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Update'}
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default UpdateBlog;
