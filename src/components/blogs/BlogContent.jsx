"use client";
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import StarterKit from '@tiptap/starter-kit';
import { generateHTML } from '@tiptap/react';
import Link from '@tiptap/extension-link'
import "./blogstyle.css"

function BlogContent({ blog }) {
    // console.log("blogs", blogs.content);
// console.log(blogs);

    const [content, setContent] = useState('');
    console.log("content outisde", blog?.content);

    useEffect(() => {
        console.log("content insde", blog?.content);

        if (blog?.content) {
            const htmlContent = generateHTML(blog?.content, [StarterKit, Link]);
            setContent(htmlContent);
        }
    }, []);



    return (
        <MaxWidthWrapper className='max-w-screen-lg mt-6'>
            {content && (
                <div dangerouslySetInnerHTML={{ __html: content }} />
            )}
        </MaxWidthWrapper>
    );
}

export default BlogContent;
