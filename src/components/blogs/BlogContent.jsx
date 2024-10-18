"use client";
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import StarterKit from '@tiptap/starter-kit';
import { generateHTML } from '@tiptap/react';

function BlogContent({ data }) {
    // console.log("data", data.content);

    const [content, setContent] = useState('');

    useEffect(() => {
        console.log("content", data?.content);

        if (data?.content) {
            const htmlContent = generateHTML(data?.content, [StarterKit]);
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
