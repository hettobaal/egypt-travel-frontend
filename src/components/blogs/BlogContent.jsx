"use client"
import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper';
import StarterKit from '@tiptap/starter-kit'
import { generateHTML } from '@tiptap/react'
function BlogContent() {

    const [content, setContent] = useState(null)
    // useEffect(() => {
    //     if (blogsData?.content) {
    //         const htmlContent = generateHTML(blogsData.content, [StarterKit]);
    //         setContent(htmlContent);
    //     }
    // }, [blogsData]);


    return (
        <MaxWidthWrapper className='max-w-screen-lg mt-6'>
            {/* {content &&

                <div dangerouslySetInnerHTML={{ __html: content }} />
            } */}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi voluptatem nemo quam quas modi quasi totam ipsam porro autem, commodi quod? Nulla, quam modi earum velit accusamus vel vitae.
        </MaxWidthWrapper>
    )
}

export default BlogContent;
