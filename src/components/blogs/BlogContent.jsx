"use client";
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import StarterKit from '@tiptap/starter-kit';
import { generateHTML } from '@tiptap/react';
import Link from '@tiptap/extension-link'
import "./blogstyle.css"

function BlogContent({ blog }) {

    // const [content, setContent] = useState('');

    // useEffect(() => {

    //     if (blog?.content) {
    //         const htmlContent = generateHTML(blog?.content, [StarterKit, Link]);
    //         setContent(htmlContent);
    //     }
    // }, []);



    return (
        <MaxWidthWrapper className='max-w-screen-lg mt-6'>
            <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
        </MaxWidthWrapper>
    );
}

export default BlogContent;
